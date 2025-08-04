
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { homePageFaqs } from "@/lib/data";
import { FadeIn } from "@/components/ui/fade-in";

export default function FaqSection() {
    return (
        <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
            <div className="px-8 md:px-12">
                <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-3">
                        <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
                        <p className="max-w-3xl text-foreground/80 md:text-xl/relaxed">
                            Have questions? We've got answers. Here are some of the most common queries we receive from our clients.
                        </p>
                    </div>
                </FadeIn>
                <FadeIn className="mx-auto mt-12">
                    <Accordion type="single" collapsible className="w-full">
                        {homePageFaqs.map((faq, index) => (
                            <AccordionItem value={`item-${index}`} key={index}>
                                <AccordionTrigger className="text-left text-lg hover:no-underline font-semibold">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-base text-foreground/80">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </FadeIn>
            </div>
        </section>
    );
}
