import { Anchor } from 'lucide-react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 group" prefetch={false}>
      <Anchor className="h-7 w-7 text-primary transition-transform duration-300 group-hover:rotate-45" />
      <span className="text-xl font-headline font-semibold text-primary transition-colors duration-300 group-hover:text-primary/80">
        Technext
      </span>
    </Link>
  );
};

export default Logo;
