'use client';

import { type Blog } from '@/generated/prisma';
import { Check, X, Send, Star } from 'lucide-react';
import { ActionButton } from './ActionButton';

interface ActionButtonsProps {
  blog: Blog;
}

export default function ActionButtons({ blog }: ActionButtonsProps) {
  return (
    <div className="flex gap-2 justify-end">
      {blog.status !== 'APPROVED' && blog.status !== 'PUBLISHED' && (
        <ActionButton 
          blogId={blog.id}
          action="approve" 
          isFeatured={blog.featured}
          icon={<Check className="mr-1 h-4 w-4" />} 
          text="Approve" 
          variant="secondary"
        />
      )}
      {blog.status !== 'REJECTED' && (
        <ActionButton 
          blogId={blog.id}
          action="reject" 
          isFeatured={blog.featured}
          icon={<X className="mr-1 h-4 w-4" />} 
          text="Reject" 
          variant="destructive"
        />
      )}
      {blog.status === 'APPROVED' && (
        <ActionButton 
          blogId={blog.id}
          action="publish" 
          isFeatured={blog.featured}
          icon={<Send className="mr-1 h-4 w-4" />} 
          text="Publish" 
        />
      )}
      
      <ActionButton
        blogId={blog.id}
        action={blog.featured ? 'unfeature' : 'feature'}
        isFeatured={blog.featured}
        icon={<Star className="mr-1 h-4 w-4" />}
        text={blog.featured ? 'Un-Feature' : 'Feature'}
        variant={blog.featured ? 'default' : 'outline'}
      />
    </div>
  );
}
