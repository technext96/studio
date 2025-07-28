'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/components/Logo";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

export default function Header() {
    const pathname = usePathname();

    const NavLink = ({ href, label }: { href: string; label: string }) => {
        const isActive = (pathname.startsWith(href) && href !== "/") || pathname === href;
        return (
            <Link
                href={href}
                className={cn(
                    "transition-colors hover:text-primary",
                    isActive ? "text-primary font-semibold" : "text-foreground/60"
                )}
            >
                {label}
            </Link>
        );
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-screen-2xl items-center">
                <div className="mr-4 hidden md:flex">
                    <Logo />
                </div>

                <div className="flex md:hidden">
                     <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur">
                            <div className="flex flex-col h-full">
                                <div className="p-4">
                                    <Logo />
                                </div>
                                <nav className="flex flex-col gap-6 p-4 text-lg font-medium">
                                    {navLinks.map(link => (
                                        <NavLink key={link.href} href={link.href} label={link.label} />
                                    ))}
                                </nav>
                                <div className="mt-auto p-4">
                                    <Button asChild className="w-full glow-effect">
                                        <Link href="/contact">Get a Quote</Link>
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-center">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        <div className="md:hidden">
                            <Logo />
                        </div>
                    </div>
                     <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                        {navLinks.map(link => (
                            <NavLink key={link.href} href={link.href} label={link.label} />
                        ))}
                    </nav>
                </div>

                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="hidden md:flex items-center space-x-2">
                        <Button asChild className="glow-effect">
                            <Link href="/contact">Get a Quote</Link>
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    );
}
