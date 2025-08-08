'use client';

import { useEffect, useRef } from 'react';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Mail, Phone, Building, Loader2 } from 'lucide-react';
import { submitContactForm, type State } from './actions';
import { useToast } from '@/hooks/use-toast';
import { Metadata } from 'next';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full py-6 text-lg" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Sending...
        </>
      ) : (
        'Send Message'
      )}
    </Button>
  );
}

// Note: Metadata export is not used in a client component,
// but can be helpful for static analysis or if this component
// were to be used in a server component context.
export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with the TechNext team to discuss your project. We offer free consultations and quotes for our custom software, AI, and web development services.",
};


export default function ContactPage() {
  const initialState: State = { success: false, message: null };
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: 'Success!',
          description: state.message,
        });
        formRef.current?.reset();
      } else {
        toast({
          title: 'Error',
          description: state.message,
          variant: 'destructive',
        });
      }
    }
  }, [state, toast]);

  return (
    <>
      <section className="w-full py-20 md:py-28 lg:py-36 bg-secondary/50">
          <div className="px-8 md:px-12">
              <div className="text-center space-y-4">
                <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-6xl">Get in Touch</h1>
                <p className="max-w-3xl mx-auto text-foreground/80 md:text-xl">
                  Have a project in mind, a question about our services, or just want to say hello? We'd love to hear from you. Fill out the form below or use our contact details to reach our team of experts.
                </p>
              </div>
          </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="px-8 md:px-12">
          <div className="grid gap-16 lg:grid-cols-2 items-start">
            
            <Card className="bg-card/80">
              <CardHeader>
                <CardTitle className="font-headline text-3xl">Send us a Message</CardTitle>
                <CardDescription>Our team will get back to you as soon as possible to discuss your needs.</CardDescription>
              </CardHeader>
              <CardContent>
                <form 
                  ref={formRef}
                  action={formAction}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" name="name" placeholder="John Doe" required />
                      {state.errors?.name && <p className="text-destructive text-sm mt-1">{state.errors.name[0]}</p>}
                    </div>
                    <div>
                      <Label htmlFor="company">Company Name (Optional)</Label>
                      <Input id="company" name="company" placeholder="Acme Inc." />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                    {state.errors?.email && <p className="text-destructive text-sm mt-1">{state.errors.email[0]}</p>}
                  </div>
                   <div>
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input id="phone" name="phone" placeholder="+1 (555) 123-4567" />
                  </div>
                  <div>
                    <Label htmlFor="details">Project Details</Label>
                    <Textarea id="details" name="details" placeholder="Tell us about your project, goals, and any specific requirements..." required minLength={10} rows={6} />
                    {state.errors?.details && <p className="text-destructive text-sm mt-1">{state.errors.details[0]}</p>}
                  </div>
                  <SubmitButton />
                </form>
              </CardContent>
            </Card>

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

          </div>
        </div>
      </section>
    </>
  );
}
