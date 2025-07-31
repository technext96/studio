
'use client';

import Link from "next/link";
import { Menu, X, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle
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
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ScrollArea } from "../ui/scroll-area";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-start gap-4">
            <div className="text-primary transition-transform duration-300 group-hover:scale-110 mt-1 flex-shrink-0 w-6 h-6">{icon}</div>
            <div>
              <div className="text-sm font-medium leading-none">{title}</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                {children}
              </p>
            </div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";


export default function Header() {
    const [isSheetOpen, setIsSheetOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={cn(
            "fixed top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300",
        )}>
             <div className={cn(
                "bg-secondary/20 border-b border-border/40 transition-all duration-300",
                isScrolled ? "-translate-y-full opacity-0 absolute" : "translate-y-0 opacity-100 relative"
             )}>
                <div className="container flex h-8 max-w-none items-center justify-end px-4 md:px-6 text-xs text-foreground/80 gap-6">
                   <a href="mailto:sales@technext.dev" className="flex items-center gap-2 hover:text-primary transition-colors">
                       <Mail className="h-3 w-3" />
                       sales@technext.dev
                   </a>
                    <div className="flex items-center gap-2">
                       <Phone className="h-3 w-3" />
                       USA: 123-123-123
                   </div>
                </div>
            </div>
            <div className="container flex h-16 max-w-none items-center justify-between px-4 gap-4 md:px-6 border-b border-border/40">
                <Link href="/" className="mr-6 hidden lg:flex">
                    <Logo />
                </Link>

                {/* Mobile Menu */}
                <div className="lg:hidden">
                     <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur flex flex-col p-0">
                           <SheetHeader className="p-4 border-b border-border/40">
                              <SheetTitle className="sr-only">Main Menu</SheetTitle>
                              <SheetClose asChild>
                                  <Link href="/">
                                    <Logo />
                                  </Link>
                                </SheetClose>
                            </SheetHeader>
                            <ScrollArea className="flex-1">
                               <nav className="flex flex-col gap-4 p-4 text-lg font-medium">
                                    {navLinks.map((link) =>
                                     link.items ? (
                                        <div key={link.title} className="flex flex-col gap-2">
                                            <SheetClose asChild>
                                                <Link href={link.href} className="font-semibold text-primary">{link.title}</Link>
                                            </SheetClose>
                                            {link.items.map((item) => (
                                                <SheetClose asChild key={item.title}>
                                                    <Link href={item.href} className="pl-4 text-foreground/80 hover:text-primary transition-colors text-base font-normal">
                                                        {item.title}
                                                    </Link>
                                                </SheetClose>
                                            ))}
                                        </div>
                                     ) : (
                                        <SheetClose asChild key={link.title}>
                                            <Link href={link.href} className="font-semibold text-primary">
                                                {link.title}
                                            </Link>
                                        </SheetClose>
                                     )
                                    )}
                                </nav>
                            </ScrollArea>
                            <div className="mt-auto p-4 border-t border-border/40">
                                <SheetClose asChild>
                                    <Button asChild className="w-full glow-effect">
                                        <Link href="/contact">Get a Quote</Link>
                                    </Button>
                                </SheetClose>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                 <div className="flex lg:hidden flex-1 justify-center">
                   <Link href="/">
                    <Logo/>
                   </Link>
                </div>

                {/* Desktop Menu */}
                 <div className="hidden lg:flex flex-1 items-center justify-end gap-4">
                    <NavigationMenu className="flex-shrink-0">
                        <NavigationMenuList>
                            {navLinks.map((link) => (
                                <NavigationMenuItem key={link.title}>
                                    {link.items ? (
                                        <>
                                            <NavigationMenuTrigger>{link.title}</NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                 <ul className={cn("grid gap-3 p-4 w-[450px]", (link.title === 'Services' || link.title === 'Industries') && 'grid-cols-2 lg:w-[600px]')}>
                                                     {link.image && (
                                                        <li className="row-span-3">
                                                            <NavigationMenuLink asChild>
                                                                <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md" href={link.href}>
                                                                    <div className="w-full h-32 mb-4">{link.image}</div>
                                                                    <div className="mb-2 mt-4 text-lg font-bold font-headline">{link.title}</div>
                                                                    <p className="text-sm leading-tight text-muted-foreground">{link.description}</p>
                                                                </a>
                                                            </NavigationMenuLink>
                                                        </li>
                                                     )}
                                                     {link.items.map((item) => (
                                                        <ListItem
                                                          key={item.title}
                                                          title={item.title}
                                                          href={item.href}
                                                          icon={item.icon}
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

                     <Button asChild className="glow-effect flex-shrink-0">
                        <Link href="/contact">Get a Quote</Link>
                    </Button>
                </div>
                 <div className="lg:hidden flex-none w-10 h-10"></div> {/* Spacer for mobile to balance the menu button */}
            </div>
        </header>
    );
}
