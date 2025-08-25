'use server';

import { prisma } from '@/lib/prisma';
import { Prisma } from '@/generated/prisma';
import { revalidatePath } from 'next/cache';

export type BlogAction = 'approve' | 'reject' | 'publish' | 'feature' | 'unfeature';

export type ActionResult = {
  success: boolean;
  message: string;
  action?: BlogAction;
};

export async function updateBlogStatus(
  id: string,
  action: BlogAction,
  isFeatured: boolean
): Promise<ActionResult> {
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
        await prisma.$transaction(async (tx) => {
          await tx.blog.updateMany({
            where: { featured: true },
            data: { featured: false },
          });
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

    if (action !== 'feature') {
        await prisma.blog.update({
          where: { id },
          data: updateData,
        });
    }

    revalidatePath('/admin/blogs');
    revalidatePath('/blog');
    revalidatePath('/');
    
    return { success: true, message: `Blog post action '${action}' completed successfully.`, action };

  } catch (error: any) {
    console.error(`Failed to ${action} blog post with ID ${id}:`, error);
    
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        return { success: false, message: `Error: Blog post not found.` };
      }
      return { success: false, message: `Database error: ${error.message}. Please check server logs.` };
    }
    
    if (error instanceof Prisma.PrismaClientInitializationError) {
      return { success: false, message: `Database connection error. Please check your DATABASE_URL.` };
    }
    
    return { success: false, message: 'An unexpected server error occurred. Please check the server logs.' };
  }
}
