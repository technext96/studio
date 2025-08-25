
'use server';

import { prisma } from '@/lib/prisma';
import { Prisma } from '@/generated/prisma';
import { revalidatePath } from 'next/cache';

export type BlogAction = 'approve' | 'reject' | 'publish' | 'feature' | 'unfeature';

export type ActionResult = {
  success: boolean;
  message: string;
};

export async function updateBlogStatus(
  prevState: ActionResult, 
  formData: FormData
): Promise<ActionResult> {
  const id = formData.get('id') as string;
  const action = formData.get('action') as BlogAction;

  if (!id || !action) {
    return { success: false, message: 'Invalid form data. Missing ID or action.' };
  }
  
  try {
    let updateData: Prisma.BlogUpdateInput = {};

    switch (action) {
      case 'approve':
        updateData = { status: 'APPROVED' };
        break;
      case 'reject':
        updateData = { status: 'REJECTED' };
        break;
      case 'publish':
        updateData = { status: 'PUBLISHED' };
        break;
      case 'feature':
        // Using a transaction to ensure data consistency
        await prisma.$transaction(async (tx) => {
          // Un-feature any currently featured post
          await tx.blog.updateMany({
            where: { featured: true },
            data: { featured: false },
          });
          // Feature the new post and ensure it's published
          await tx.blog.update({
            where: { id },
            data: { featured: true, status: 'PUBLISHED' },
          });
        });
        break;
      case 'unfeature':
        updateData = { featured: false };
        break;
      default:
        return { success: false, message: 'Invalid action specified.' };
    }

    // For actions other than 'feature', perform a single update.
    // The 'feature' action is handled within the transaction.
    if (action !== 'feature') {
        await prisma.blog.update({
          where: { id },
          data: updateData,
        });
    }

    revalidatePath('/admin/blogs');
    revalidatePath('/blog');
    revalidatePath('/');
    
    return { success: true, message: `Blog post action '${action}' completed successfully.` };

  } catch (error) {
    console.error(`Failed to ${action} blog post with ID ${id}:`, error);
    
    // Provide more specific error messages
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        return { success: false, message: `Error: Blog post not found.` };
      }
      return { success: false, message: `Database error: ${error.code}. Please check server logs.` };
    }
    
    if (error instanceof Prisma.PrismaClientInitializationError) {
      return { success: false, message: `Database connection error. Please check your DATABASE_URL.` };
    }
    
    // Generic fallback for any other errors
    return { success: false, message: 'An unexpected server error occurred. Please check the server logs.' };
  }
}
