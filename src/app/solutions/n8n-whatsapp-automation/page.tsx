
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FadeIn } from '@/components/ui/fade-in';
import { n8nWhatsappIllustration } from '@/lib/constants';
import { CheckCircle2, Zap, GitBranch, Infinity, Bot, Mail } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "n8n WhatsApp Automation | Connect Your Business",
    description: "Automate your business workflows with our expert n8n and WhatsApp integration services. Connect to any app, build complex automations, and save time.",
    openGraph: {
        title: "n8n WhatsApp Automation | Custom Workflow Integration",
        description: "Leverage the power of n8n to automate your WhatsApp communication and connect it to your entire app ecosystem.",
    },
};

export default function N8nWhatsappAutomationPage() {
    const features = [
        {
            icon: <Zap className="h-8 w-8 text-primary"/>,
            title: "Custom Workflow Design",
            description: "We design and build custom n8n workflows tailored to your exact business processes, from simple notifications to complex, multi-step automations."
        },
        {
            icon: <GitBranch className="h-8 w-8 text-primary"/>,
            title: "Any App Integration",
            description: "Connect WhatsApp and n8n to hundreds of other applications, including your CRM, ERP, Google Sheets, or any app with an API."
        },
        {
            icon: <Infinity className="h-8 w-8 text-primary"/>,
            title: "Scalable and Self-Hosted",
            description: "We deploy n8n on your own infrastructure, giving you full control over your data, scalability, and no per-execution limits."
        },
        {
            icon: <Bot className="h-8 w-8 text-primary"/>,
            title: "Intelligent Chatbots",
            description: "Build powerful WhatsApp chatbots for customer support, lead qualification, or appointment booking using n8n's logic and AI nodes."
        }
    ];

     const useCases = [
        {
            title: "E-commerce Order Notifications",
            description: "Automatically send WhatsApp messages for order confirmation, shipping updates, and delivery notifications from your Shopify or WooCommerce store."
        },
        {
            title: "Lead Management",
            description: "Instantly send a personalized welcome message on WhatsApp to new leads from your CRM (like HubSpot or Salesforce) and assign them to a sales representative."
        },
        {
            title: "Customer Support Automation",
            description: "Create a support chatbot that answers frequently asked questions and creates support tickets in a system like Zendesk or Jira when human intervention is needed."
        },
        {
            title: "Appointment Reminders",
            description: "Reduce no-shows by automatically sending appointment reminders to clients via WhatsApp 24 hours before their scheduled time."
        }
    ];

    return (
        <>
            <section className="w-full pt-24 md:pt-36 lg:pt-40 bg-secondary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="px-8 md:px-12 z-10 relative">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <FadeIn className="space-y-6 text-center lg:text-left">
                             <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
                                n8n WhatsApp Automation
                            </h1>
                            <p className="max-w-xl mx-auto lg:mx-0 text-foreground/80 md:text-xl">
                                Supercharge your business by connecting WhatsApp to any application. We build powerful, custom automation workflows using n8n to save you time and streamline your operations.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                                <Button size="lg" className="text-lg px-8 py-6">
                                    <Link href="/contact">
                                        Get a Free Consultation
                                    </Link>
                                </Button>
                            </div>
                        </FadeIn>
                        <FadeIn>
                             <div className="mx-auto aspect-square max-w-lg object-contain">
                                {n8nWhatsappIllustration()}
                             </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

             <section id="features" className="w-full py-16 md:py-24">
                <div className="px-8 md:px-12">
                    <FadeIn className="text-center space-y-3 mb-12 max-w-3xl mx-auto">
                        <h2 className="text-4xl font-headline font-bold">Powerful Features, Limitless Possibilities</h2>
                        <p className="text-foreground/80 md:text-lg">
                            We provide end-to-end services to get your custom automations up and running.
                        </p>
                    </FadeIn>
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {features.map((feature, i) => (
                             <FadeIn key={feature.title} style={{ animationDelay: `${i * 0.05}s` }}>
                                <Card className="bg-card/50 backdrop-blur-sm border-primary/10 h-full p-6 text-center flex flex-col items-center">
                                    <div className="mb-4">{feature.icon}</div>
                                    <h3 className="font-headline text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-foreground/80 text-sm">{feature.description}</p>
                                </Card>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            <section id="use-cases" className="w-full py-16 md:py-24 bg-secondary/20">
                <div className="px-8 md:px-12">
                     <FadeIn className="text-center space-y-3 mb-12 max-w-3xl mx-auto">
                        <h2 className="text-4xl font-headline font-bold">Popular Use Cases</h2>
                        <p className="text-foreground/80 md:text-lg">
                           See how businesses like yours are using n8n and WhatsApp to improve efficiency and customer engagement.
                        </p>
                    </FadeIn>
                     <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {useCases.map((useCase, i) => (
                             <FadeIn key={useCase.title} style={{ animationDelay: `${i * 0.1}s` }}>
                                <Card className="bg-card/50 backdrop-blur-sm border-primary/10 h-full">
                                    <CardHeader>
                                        <CardTitle className="font-headline text-xl flex items-start gap-4">
                                            <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                            <span>{useCase.title}</span>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-foreground/80">{useCase.description}</p>
                                    </CardContent>
                                </Card>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

             <section id="contact" className="w-full py-20 md:py-28">
                <div className="px-8 md:px-12 text-center">
                   <FadeIn className="space-y-6 max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border-primary/10 rounded-lg p-10 glow-effect">
                     <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">Ready to Automate Your Business?</h2>
                     <p className="text-foreground/80 md:text-lg">
                       Stop wasting time on manual tasks. Let's discuss your business processes and build a powerful automation solution that works for you 24/7.
                     </p>
                      <div className="pt-4">
                        <Button asChild size="lg" className="text-lg px-8 py-6">
                           <Link href="mailto:technext96@gmail.com?subject=n8n WhatsApp Automation Inquiry">
                                <Mail className="mr-2 h-5 w-5"/>
                                Contact Our Experts
                            </Link>
                        </Button>
                      </div>
                  </FadeIn>
                </div>
              </section>
        </>
    );
}
