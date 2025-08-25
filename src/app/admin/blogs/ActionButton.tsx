'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { type BlogAction, updateBlogStatus } from './actions';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';
import { useActionState } from 'react';

interface ActionButtonProps {
  blogId: string;
  action: BlogAction;
  isFeatured: boolean;
  icon: React.ReactNode;
  text: string;
  variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link";
  disabled?: boolean;
}

function SubmitButton({ 
  icon, 
  text, 
  variant,
  disabled
}: Pick<ActionButtonProps, 'icon' | 'text' | 'variant' | 'disabled'>) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size="sm"
      variant={variant}
      disabled={pending || disabled}
      className="text-xs h-8 w-full justify-center"
      aria-disabled={pending}
    >
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : icon}
      {text}
    </Button>
  );
}

export function ActionButton({
  blogId,
  action,
  isFeatured,
  icon,
  text,
  variant = 'outline',
  disabled = false,
}: ActionButtonProps) {
  
  const [state, formAction] = useActionState(updateBlogStatus, { success: false, message: '' });
  const { toast } = useToast();

  useEffect(() => {
    if (state && state.message) {
      if (state.success) {
        toast({ title: 'Success', description: state.message });
      } else {
        toast({
          title: 'Error',
          description: state.message,
          variant: 'destructive',
        });
      }
    }
  }, [state, toast]);

  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={blogId} />
      <input type="hidden" name="action" value={action} />
      <input type="hidden" name="isFeatured" value={String(isFeatured)} />
      <SubmitButton icon={icon} text={text} variant={variant} disabled={disabled}/>
    </form>
  );
}
