'use client';

import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { type BlogAction } from './actions';

interface ActionButtonProps {
  action: BlogAction;
  icon: React.ReactNode;
  text: string;
  variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link";
  disabled?: boolean;
  loadingAction: BlogAction | null;
  onClick: () => void;
}

export function ActionButton({ 
  action, 
  icon, 
  text, 
  variant = "outline", 
  disabled = false,
  loadingAction,
  onClick
}: ActionButtonProps) {
  const isLoading = loadingAction === action;

  return (
    <Button
      size="sm"
      variant={variant}
      disabled={isLoading || disabled || !!loadingAction}
      className="text-xs h-8"
      onClick={onClick}
      type="button" // Change to button to prevent form submission
    >
      {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : icon}
      {text}
    </Button>
  );
}
