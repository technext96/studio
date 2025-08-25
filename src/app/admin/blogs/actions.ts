'use server';

import { prisma } from '@/lib/prisma';
import { Prisma } from '@/generated/prisma';
import { revalidatePath } from 'next/cache';

export type BlogAction = 'approve' | 'reject' | 'publish' | 'feature' | 'unfeature';

type ActionResult = {
  success: boolean;
  message: string;
};

export async function updateBlogStatus(id: string, action: BlogAction): Promise<ActionResult> {
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
        // When featuring a post, un-feature all others first
        await prisma.blog.updateMany({
          where: { featured: true },
          data: { featured: false },
        });
        updateData = { featured: true, status: 'PUBLISHED' }; // Featuring also publishes it
        break;
      case 'unfeature':
        updateData = { featured: false };
        break;
      default:
        return { success: false, message: 'Invalid action specified.' };
    }

    await prisma.blog.update({
      where: { id },
      data: updateData,
    });

    revalidatePath('/admin/blogs');
    revalidatePath('/blog');
    revalidatePath('/');
    
    return { success: true, message: `Blog post action '${action}' completed successfully.` };

  } catch (error) {
    console.error(`Failed to ${action} blog post with ID ${id}:`, error);
    
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        return { success: false, message: `Error: Blog post not found.` };
      }
      return { success: false, message: `Database error: ${error.code}.` };
    }
    
    if (error instanceof Prisma.PrismaClientInitializationError) {
      return { success: false, message: `Database connection error. Please check your DATABASE_URL.` };
    }
    
    return { success: false, message: 'An unexpected server error occurred. Please check the server logs.' };
  }
}
