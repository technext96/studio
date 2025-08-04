
'use client';

import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { WhatsAppIcon } from './WhatsAppIcon';
import { MessageSquare, Phone, X } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPromptVisible, setIsPromptVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPromptVisible(true);
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const whatsappNumber = "923491089456";
  const whatsappMessage = "Hello! I found your website and I'm interested in your services. Could we discuss further?";

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
        setIsPromptVisible(true); // Always show prompt when manually opened
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
             <div className="animate-fade-in-up">
                <Card className={cn(
                    "w-80 rounded-xl shadow-lg border-primary/20",
                    isPromptVisible ? 'block' : 'hidden'
                )}>
                    <CardHeader className="flex flex-row items-center justify-between p-4 bg-secondary/30 rounded-t-xl">
                        <CardTitle className="text-base font-semibold">Hi there! 👋</CardTitle>
                        <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setIsOpen(false)}>
                            <X className="h-4 w-4" />
                        </Button>
                    </CardHeader>
                    <CardContent className="p-4 space-y-4">
                        <p className="text-sm text-foreground/80">How can we help you today?</p>
                        <div className="space-y-3">
                             <Button asChild className="w-full">
                                <Link href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank">
                                    <WhatsAppIcon className="w-5 h-5 mr-2" />
                                    Chat on WhatsApp
                                </Link>
                            </Button>
                            <Button asChild variant="outline" className="w-full">
                                <Link href="/contact">
                                    <Phone className="w-4 h-4 mr-2" />
                                    Talk to Sales
                                </Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )}

       <div className="flex justify-end mt-4">
            <Button
                onClick={toggleOpen}
                className="w-16 h-16 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-transform duration-300 hover:scale-110"
                aria-label={isOpen ? "Close chat" : "Open chat"}
            >
                {isOpen ? <X className="w-8 h-8"/> : <MessageSquare className="w-8 h-8" />}
            </Button>
       </div>
    </div>
  );
}
