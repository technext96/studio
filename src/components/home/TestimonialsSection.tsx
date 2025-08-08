
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FadeIn } from "@/components/ui/fade-in";

const testimonials = [
  {
    name: "Sarah L.",
    role: "CEO",
    company: "Innovate Inc.",
    avatar: "https://placehold.co/100x100.png",
    quote: "Working with TechNext was a game-changer. They didn't just deliver a product; they delivered a solution that perfectly matched our vision. Their team's expertise in AI and custom software is unmatched.",
  },
  {
    name: "Michael B.",
    role: "CTO",
    company: "ScaleUp Solutions",
    avatar: "https://placehold.co/100x100.png",
    quote: "The offshore development team we got from TechNext integrated seamlessly with our own. Their professionalism, communication, and technical skill have been instrumental in accelerating our product roadmap.",
  },
  {
    name: "Emily C.",
    role: "Marketing Director",
    company: "Growth Co.",
    avatar: "https://placehold.co/100x100.png",
    quote: "Their digital marketing and SEO strategies have had a tangible impact on our bottom line. We've seen a significant increase in organic traffic and lead quality since partnering with them. Highly recommended!",
  },
  {
    name: "David R.",
    role: "Founder",
    company: "HealthTech Startup",
    avatar: "https://placehold.co/100x100.png",
    quote: "Building our HIPAA-compliant platform was a complex challenge, but TechNext navigated it with ease. Their deep understanding of the healthcare industry was invaluable. They are true partners, not just vendors.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="px-8 md:px-12">
        <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm text-primary font-semibold">Client Testimonials</div>
            <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
            <p className="max-w-3xl text-foreground/80 md:text-xl/relaxed">
              We are proud to build long-lasting partnerships with our clients. Here's what they have to say about their experience working with us.
            </p>
          </div>
        </FadeIn>
        <FadeIn className="mt-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col justify-between bg-card/50 backdrop-blur-sm border-primary/10">
                      <CardContent className="p-6 text-center flex flex-col items-center">
                        <p className="text-foreground/80 italic">"{testimonial.quote}"</p>
                      </CardContent>
                      <div className="p-6 pt-0 text-center">
                          <Avatar className="w-16 h-16 mx-auto mb-4 border-2 border-primary/50">
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="person portrait" />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <p className="font-bold font-headline">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </FadeIn>
      </div>
    </section>
  );
}
