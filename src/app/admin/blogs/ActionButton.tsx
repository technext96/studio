'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { type BlogAction } from './actions';

interface ActionButtonProps {
  action: BlogAction;
  icon: React.ReactNode;
  text: string;
  variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link";
  disabled?: boolean;
}

export function ActionButton({ action, icon, text, variant = "outline", disabled = false }: ActionButtonProps) {
  const { pending }: { pending: boolean } = useFormStatus();

  return (
    <Button
      name="action"
      value={action}
      size="sm"
      variant={variant}
      disabled={pending || disabled}
      className="text-xs h-8"
      type="submit"
    >
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : icon}
      {text}
    </Button>
  );
}

    