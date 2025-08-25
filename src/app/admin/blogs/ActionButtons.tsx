
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useFormState } from 'react-dom';
import { type Blog } from '@/generated/prisma';
import { updateBlogStatus } from './actions';
import { useToast } from '@/hooks/use-toast';
import { Check, X, Send, Star } from 'lucide-react';
import { ActionButton } from './ActionButton';

interface ActionButtonsProps {
  blog: Blog;
}

const initialState = {
  success: false,
  message: '',
};

export default function ActionButtons({ blog }: ActionButtonsProps) {
  const [state, dispatch] = useFormState(updateBlogStatus, initialState);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    if (state?.message) {
      if (state.success) {
        toast({ title: 'Success', description: state.message });
      } else {
        toast({
          title: 'Error',
          description: state.message,
          variant: 'destructive',
        });
      }
      router.refresh();
    }
  }, [state, toast, router]);

  return (
    <form action={dispatch} className="flex gap-2 justify-end">
      <input type="hidden" name="id" value={blog.id} />
      <input type="hidden" name="isFeatured" value={String(blog.featured)} />
      
      {blog.status !== 'APPROVED' && blog.status !== 'PUBLISHED' && (
        <ActionButton action="approve" icon={<Check className="mr-1 h-4 w-4" />} text="Approve" variant="secondary" />
      )}
      {blog.status !== 'REJECTED' && (
        <ActionButton action="reject" icon={<X className="mr-1 h-4 w-4" />} text="Reject" variant="destructive" />
      )}
      {blog.status === 'APPROVED' && (
        <ActionButton action="publish" icon={<Send className="mr-1 h-4 w-4" />} text="Publish" />
      )}
      
      <ActionButton
        action={blog.featured ? 'unfeature' : 'feature'}
        icon={<Star className="mr-1 h-4 w-4" />}
        text={blog.featured ? 'Un-Feature' : 'Feature'}
        variant={blog.featured ? 'default' : 'outline'}
      />
    </form>
  );
}
