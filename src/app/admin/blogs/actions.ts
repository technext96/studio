'use server';

import { PrismaClient, Prisma } from '@/generated/prisma';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export type BlogAction = 'approve' | 'reject' | 'publish' | 'feature' | 'unfeature';

export async function updateBlogStatus(id: string, action: BlogAction): Promise<{ success: boolean; message: string; }> {
  try {
    let updateData: any = {};

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
        return { success: false, message: 'Invalid action.' };
    }

    await prisma.blog.update({
      where: { id },
      data: updateData,
    });

    revalidatePath('/admin/blogs');
    revalidatePath('/blog');
    revalidatePath('/');
    
    return { success: true, message: `Blog post ${action}ed successfully.` };
  } catch (error) {
    console.error(`Failed to ${action} blog post:`, error);
    if (error instanceof Prisma.PrismaClientKnownRequestError || error instanceof Prisma.PrismaClientInitializationError) {
      return { success: false, message: `Database error: Failed to ${action} blog post.` };
    }
    return { success: false, message: `An unexpected error occurred.` };
  }
}
