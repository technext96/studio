'use client';

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import Logo from "@/components/Logo";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navLinks } from "@/lib/constants";
import React from "react";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";


export default function Header() {
    const [isSheetOpen, setIsSheetOpen] = React.useState(false);

    return (
        <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-screen-2xl items-center">
                <div className="mr-4 hidden md:flex">
                    <Logo />
                </div>

                {/* Mobile Menu */}
                <div className="flex md:hidden">
                     <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur p-0">
                            <div className="flex flex-col h-full">
                                <div className="p-4 border-b border-border/40 flex justify-between items-center">
                                    <Logo />
                                    <SheetClose asChild>
                                         <Button variant="ghost" size="icon">
                                            <X className="h-6 w-6" />
                                            <span className="sr-only">Close Menu</span>
                                        </Button>
                                    </SheetClose>
                                </div>
                                <nav className="flex flex-col gap-2 p-4 text-lg font-medium">
                                    {navLinks.map((link) =>
                                     link.items ? (
                                        <div key={link.title} className="flex flex-col gap-2">
                                            <Link href={link.href} className="font-semibold text-primary" onClick={() => setIsSheetOpen(false)}>{link.title}</Link>
                                            {link.items.map((item) => (
                                                <Link key={item.title} href={item.href} className="pl-4 text-foreground/80 hover:text-primary transition-colors" onClick={() => setIsSheetOpen(false)}>
                                                    {item.title}
                                                </Link>
                                            ))}
                                        </div>
                                     ) : (
                                        <Link key={link.title} href={link.href} className="font-semibold text-primary" onClick={() => setIsSheetOpen(false)}>
                                            {link.title}
                                        </Link>
                                     )
                                    )}
                                </nav>
                                <div className="mt-auto p-4 border-t border-border/40">
                                    <Button asChild className="w-full glow-effect">
                                        <Link href="/contact" onClick={() => setIsSheetOpen(false)}>Get a Quote</Link>
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
                 <div className="md:hidden flex-1 flex justify-center">
                    <Logo/>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex flex-1 items-center justify-center">
                    <NavigationMenu>
                        <NavigationMenuList>
                            {navLinks.map((link) => (
                                <NavigationMenuItem key={link.title}>
                                    {link.items ? (
                                        <>
                                            <NavigationMenuTrigger>{link.title}</NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                                    {link.items.map((item) => (
                                                        <ListItem
                                                            key={item.title}
                                                            title={item.title}
                                                            href={item.href}
                                                        >
                                                            {item.description}
                                                        </ListItem>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </>
                                    ) : (
                                        <Link href={link.href} legacyBehavior passHref>
                                            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "font-semibold")}>
                                                {link.title}
                                            </NavigationMenuLink>
                                        </Link>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="hidden md:flex flex-none items-center justify-end space-x-4">
                     <Button asChild className="glow-effect">
                        <Link href="/contact">Get a Quote</Link>
                    </Button>
                </div>
            </div>
        </header>
    );
}
