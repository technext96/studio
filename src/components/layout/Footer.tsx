import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/constants";
import { Mail } from "lucide-react";
import Link from "next/link";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2.9A10 10 0 0 1 22 11.45c0 6-5.5 11-11.5 11S1 16 1 11.5c0-3.88 2.37-7.23 6-9.1a10 10 0 0 1 7.05.55z"></path></svg>
)

export default function Footer() {
    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/services", label: "Services" },
        { href: "/portfolio", label: "Portfolio" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <footer className="bg-secondary/50 text-foreground/80">
            <div className="container py-12 px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="flex flex-col gap-4">
                        <Logo />
                        <p className="text-sm">
                            Your trusted partner in building exceptional digital products. We transform ideas into robust and scalable software solutions.
                        </p>
                        <div className="flex gap-2 mt-2">
                             <Button variant="ghost" size="icon" asChild>
                                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                    <WhatsAppIcon className="w-5 h-5" />
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
                        <h4 className="font-headline font-semibold text-foreground mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {navLinks.map(link => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-headline font-semibold text-foreground mb-4">Services</h4>
                        <ul className="space-y-2">
                            {services.map(service => (
                                <li key={service.slug}>
                                    <Link href={`/services/${service.slug}`} className="text-sm hover:text-primary transition-colors">
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
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
                                <a href="tel:+1234567890" className="hover:text-primary transition-colors">+1 (234) 567-890</a>
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
