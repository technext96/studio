import { Anchor } from 'lucide-react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
      <Anchor className="h-7 w-7 text-primary" />
      <span className="text-xl font-headline font-semibold text-primary">
        Code Harbor
      </span>
    </Link>
  );
};

export default Logo;
