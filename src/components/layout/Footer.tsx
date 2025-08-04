import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/constants";
import { Mail, Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    
    const companyLinks = navLinks.find(l => l.title === "Company")?.items || [];
    const serviceLinks = navLinks.find(l => l.title === "Services")?.items || [];

    return (
        <footer className="bg-secondary/20 text-foreground/80">
            <div className="py-12 px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="flex flex-col gap-4">
                        <Logo />
                        <p className="text-sm">
                           Crafting the future of software, one line of code at a time.
                        </p>
                        <div className="flex gap-2 mt-2">
                             <Button variant="ghost" size="icon" asChild>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="Github">
                                    <Github className="w-5 h-5" />
                                </a>
                             </Button>
                             <Button variant="ghost" size="icon" asChild>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                    <Twitter className="w-5 h-5" />
                                </a>
                             </Button>
                             <Button variant="ghost" size="icon" asChild>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                             </Button>
                             <Button variant="ghost" size="icon" asChild>
                                <a href="mailto:contact@codeharbor.dev" aria-label="Email">
                                    <Mail className="w-5 h-5" />
                                </a>
                             </Button>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-headline font-semibold text-foreground mb-4">Services</h4>
                        <ul className="space-y-2">
                            {serviceLinks.map(link => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-headline font-semibold text-foreground mb-4">Company</h4>
                        <ul className="space-y-2">
                            {companyLinks.map(link => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                              <li>
                                <Link href="/blog" className="text-sm hover:text-primary transition-colors">
                                    Resources
                                </Link>
                            </li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="font-headline font-semibold text-foreground mb-4">Contact Us</h4>
                        <div className="space-y-2 text-sm">
                           <p>123 Innovation Drive,<br/>Tech City, 54321</p>
                           <p>
                                <a href="mailto:contact@codeharbor.dev" className="hover:text-primary transition-colors">contact@codeharbor.dev</a>
                           </p>
                           <p>
                                <a href="tel:+15551234567" className="hover:text-primary transition-colors">+1 (555) 123-4567</a>
                           </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Code Harbor. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
