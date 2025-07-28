import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FileQuestion } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center gap-8 text-center p-8">
      <div className="flex items-center justify-center w-24 h-24 rounded-full bg-secondary">
        <FileQuestion className="w-12 h-12 text-primary" />
      </div>
      <div className="space-y-2">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
          404 - Page Not Found
        </h1>
        <p className="max-w-md text-foreground/80">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
      </div>
      <Button asChild size="lg">
        <Link href="/">Return to Homepage</Link>
      </Button>
    </div>
  );
}
