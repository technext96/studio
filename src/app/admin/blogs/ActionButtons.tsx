
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Blog } from '@/generated/prisma';
import { updateBlogStatus, BlogAction } from './actions';
import { Check, X, Send, Star, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ActionButtonsProps {
  blog: Blog;
}

export default function ActionButtons({ blog }: ActionButtonsProps) {
  const [loadingAction, setLoadingAction] = useState<BlogAction | null>(null);
  const { toast } = useToast();

  const handleAction = async (action: BlogAction) => {
    setLoadingAction(action);
    const result = await updateBlogStatus(blog.id, action);
    setLoadingAction(null);

    if (result && result.success) {
      toast({ title: 'Success', description: result.message });
    } else {
      toast({ 
        title: 'Error', 
        description: result?.message || 'An unexpected error occurred.', 
        variant: 'destructive' 
      });
    }
  };
  
  const renderButton = (action: BlogAction, icon: React.ReactNode, text: string, variant: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link" = "outline", disabled = false) => {
    const isLoading = loadingAction === action;
    return (
      <Button
        size="sm"
        variant={variant}
        onClick={() => handleAction(action)}
        disabled={isLoading || disabled}
        className="text-xs h-8"
      >
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : icon}
        {text}
      </Button>
    );
  };


  return (
    <div className="flex gap-2 justify-end">
      {blog.status !== 'APPROVED' && blog.status !== 'PUBLISHED' && renderButton('approve', <Check className="mr-1 h-4 w-4" />, 'Approve', 'secondary')}
      {blog.status !== 'REJECTED' && renderButton('reject', <X className="mr-1 h-4 w-4" />, 'Reject', 'destructive')}
      {blog.status === 'APPROVED' && renderButton('publish', <Send className="mr-1 h-4 w-4" />, 'Publish')}
      {renderButton(blog.featured ? 'unfeature' : 'feature', <Star className="mr-1 h-4 w-4" />, blog.featured ? 'Un-Feature' : 'Feature', blog.featured ? 'default' : 'outline')}
    </div>
  );
}
