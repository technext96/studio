'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { type Blog } from '@/generated/prisma';
import { updateBlogStatus, type ActionResult, type BlogAction } from './actions';
import { useToast } from '@/hooks/use-toast';
import { Check, X, Send, Star } from 'lucide-react';
import { ActionButton } from './ActionButton';

interface ActionButtonsProps {
  blog: Blog;
}

export default function ActionButtons({ blog }: ActionButtonsProps) {
  const [loadingAction, setLoadingAction] = useState<BlogAction | null>(null);
  const router = useRouter();
  const { toast } = useToast();

  const handleAction = async (action: BlogAction) => {
    setLoadingAction(action);
    try {
      const result = await updateBlogStatus(blog.id, action, blog.featured);
      
      if (result?.success) {
        toast({ title: 'Success', description: result.message });
        router.refresh();
      } else {
        toast({
          title: 'Error',
          description: result?.message || 'An unexpected error occurred.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'A server-side error occurred. Please try again.',
        variant: 'destructive',
      });
      console.error("Failed to perform blog action:", error);
    } finally {
      setLoadingAction(null);
    }
  };

  return (
    <div className="flex gap-2 justify-end">
      {blog.status !== 'APPROVED' && blog.status !== 'PUBLISHED' && (
        <ActionButton 
          action="approve" 
          icon={<Check className="mr-1 h-4 w-4" />} 
          text="Approve" 
          variant="secondary" 
          loadingAction={loadingAction}
          onClick={() => handleAction('approve')}
        />
      )}
      {blog.status !== 'REJECTED' && (
        <ActionButton 
          action="reject" 
          icon={<X className="mr-1 h-4 w-4" />} 
          text="Reject" 
          variant="destructive"
          loadingAction={loadingAction}
          onClick={() => handleAction('reject')} 
        />
      )}
      {blog.status === 'APPROVED' && (
        <ActionButton 
          action="publish" 
          icon={<Send className="mr-1 h-4 w-4" />} 
          text="Publish" 
          loadingAction={loadingAction}
          onClick={() => handleAction('publish')}
        />
      )}
      
      <ActionButton
        action={blog.featured ? 'unfeature' : 'feature'}
        icon={<Star className="mr-1 h-4 w-4" />}
        text={blog.featured ? 'Un-Feature' : 'Feature'}
        variant={blog.featured ? 'default' : 'outline'}
        loadingAction={loadingAction}
        onClick={() => handleAction(blog.featured ? 'unfeature' : 'feature')}
      />
    </div>
  );
}
