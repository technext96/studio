
import { Metadata } from 'next';
import { Mail, Phone, Building } from 'lucide-react';
import ContactForm from './ContactForm';
import { FadeIn } from '@/components/ui/fade-in';

const siteUrl = 'https://technext96.com';
const pageUrl = `${siteUrl}/contact`;

export const metadata: Metadata = {
  title: "Contact TechNext | Get in Touch with Our Team Today",
  description:
    "Have a project in mind? Contact TechNext for expert software development, AI/ML integration, and digital solutions. Get your free consultation today.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Contact TechNext | Get in Touch with Our Team Today",
    description:
      "Have a project in mind? Contact TechNext for expert software development, AI/ML integration, and digital solutions. Get your free consultation today.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "TechNext - Contact Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact TechNext | Get in Touch with Our Team Today",
    description:
      "Have a project in mind? Contact TechNext for expert software development, AI/ML integration, and digital solutions. Get your free consultation today.",
    images: [`${siteUrl}/og-image.png`],
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="w-full py-20 md:py-28 lg:py-36 bg-secondary/50">
          <div className="px-4 md:px-6">
            <FadeIn>
              <div className="text-center space-y-4 max-w-4xl mx-auto">
                <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl">Get in Touch</h1>
                <p className="text-foreground/80 text-base sm:text-lg md:text-xl">
                  Have a project in mind, a question about our services, or just want to say hello? We'd love to hear from you. Fill out the form below or use our contact details.
                </p>
              </div>
            </FadeIn>
          </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-start max-w-6xl mx-auto">
            
            <FadeIn><ContactForm /></FadeIn>

            <FadeIn style={{animationDelay: '0.1s'}}>
              <div className="space-y-10">
                <h3 className="text-3xl font-headline font-bold">Contact Information</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-3 sm:p-4 rounded-full flex-shrink-0">
                      <Building className="h-6 w-6 sm:h-7 sm:w-7" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg sm:text-xl">Our Office</h4>
                      <p className="text-foreground/80 text-base sm:text-lg mt-1">Khurshaid Khan Plaza, Charbagh Swat</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <div className="bg-primary/10 text-primary p-3 sm:p-4 rounded-full flex-shrink-0">
                      <Mail className="h-6 w-6 sm:h-7 sm:w-7" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg sm:text-xl">Email Us</h4>
                      <a href="mailto:technext96@gmail.com" className="text-foreground/80 text-base sm:text-lg hover:text-primary transition-colors mt-1 block">technext96@gmail.com</a>
                    </div>
                  </div>
                   <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-3 sm:p-4 rounded-full flex-shrink-0">
                      <Phone className="h-6 w-6 sm:h-7 sm:w-7" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg sm:text-xl">Call Us</h4>
                      <a href="tel:+923491089456" className="text-foreground/80 text-base sm:text-lg hover:text-primary transition-colors mt-1 block">+92 349 1089456</a>
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
