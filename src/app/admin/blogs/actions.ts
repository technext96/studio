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
  prevState: ActionResult,
  formData: FormData,
): Promise<ActionResult> {
  const id = formData.get('id') as string;
  const action = formData.get('action') as BlogAction;
  
  if (!id || !action) {
    return { success: false, message: 'Invalid form data. Missing ID or action.' };
  }
  
  try {
    if (action === 'feature' || action === 'unfeature') {
      const newFeaturedState = action === 'feature';
      if (newFeaturedState) {
        await prisma.$transaction(async (tx) => {
          await tx.blog.updateMany({
            where: { featured: true },
            data: { featured: false },
          });
          await tx.blog.update({
            where: { id },
            data: { featured: true },
          });
        });
      } else {
        await prisma.blog.update({
          where: { id },
          data: { featured: false },
        });
      }
    } else {
      let newStatus: Prisma.BlogUpdateInput['status'];
      switch (action) {
        case 'approve':
          newStatus = 'APPROVED';
          break;
        case 'reject':
          newStatus = 'REJECTED';
          break;
        case 'publish':
          newStatus = 'PUBLISHED';
          break;
        default:
          return { success: false, message: 'Invalid status action specified.' };
      }
      await prisma.blog.update({
        where: { id },
        data: { status: newStatus },
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
