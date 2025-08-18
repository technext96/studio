
import { Metadata } from 'next';
import { Mail, Phone, Building } from 'lucide-react';
import ContactForm from './ContactForm';
import { FadeIn } from '@/components/ui/fade-in';

const siteUrl = 'https://technext96.com';
const pageUrl = `${siteUrl}/contact`;

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with the TechNext team to discuss your project. We offer free consultations for our software, AI, and web development services.",
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: 'Contact Us | TechNext',
        description: "Get in touch with the TechNext team to discuss your project.",
        url: pageUrl,
    },
};

export default function ContactPage() {
  return (
    <>
      <section className="w-full py-20 md:py-28 lg:py-36 bg-secondary/50">
          <div className="px-8 md:px-12">
            <FadeIn>
              <div className="text-center space-y-4">
                <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-6xl">Get in Touch</h1>
                <p className="max-w-3xl mx-auto text-foreground/80 md:text-xl">
                  Have a project in mind, a question about our services, or just want to say hello? We'd love to hear from you. Fill out the form below or use our contact details.
                </p>
              </div>
            </FadeIn>
          </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="px-8 md:px-12">
          <div className="grid gap-16 lg:grid-cols-2 items-start">
            
            <FadeIn><ContactForm /></FadeIn>

            <FadeIn style={{animationDelay: '0.1s'}}>
              <div className="space-y-12">
                <h3 className="text-3xl font-headline font-bold">Contact Information</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="bg-primary/10 text-primary p-4 rounded-full flex-shrink-0">
                      <Building className="h-7 w-7" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl">Our Office</h4>
                      <p className="text-foreground/80 text-lg mt-1">Khurshaid Khan Plaza, Charbagh Swat</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                     <div className="bg-primary/10 text-primary p-4 rounded-full flex-shrink-0">
                      <Mail className="h-7 w-7" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl">Email Us</h4>
                      <a href="mailto:technext96@gmail.com" className="text-foreground/80 text-lg hover:text-primary transition-colors mt-1 block">technext96@gmail.com</a>
                    </div>
                  </div>
                   <div className="flex items-start gap-6">
                    <div className="bg-primary/10 text-primary p-4 rounded-full flex-shrink-0">
                      <Phone className="h-7 w-7" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl">Call Us</h4>
                      <a href="tel:+923491089456" className="text-foreground/80 text-lg hover:text-primary transition-colors mt-1 block">+92 349 1089456</a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>
    </>
  );
}
