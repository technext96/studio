
'use client';

import Link from "next/link";
import { Menu, X } from "lucide-react";
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
import React from "react";
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
          <div className="flex items-center gap-3">
            <div className="text-primary transition-transform duration-300 group-hover:scale-110">{icon}</div>
            <div>
              <div className="text-sm font-medium leading-none">{title}</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
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

    return (
        <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-none items-center justify-between px-4 gap-4 md:px-6">
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
                    <NavigationMenu className="flex-shrink">
                        <NavigationMenuList>
                            {navLinks.map((link) => (
                                <NavigationMenuItem key={link.title}>
                                    {link.items ? (
                                        <>
                                            <NavigationMenuTrigger>{link.title}</NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                 <ul className={cn(
                                                    "grid gap-3 p-4 md:w-[500px]",
                                                    link.items.length > 4 ? "lg:grid-cols-2 lg:w-[600px]" : "lg:w-[350px]"
                                                    )}>
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
