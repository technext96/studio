'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { submitContactForm, type State } from './actions';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Mail, Phone, Building } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? 'Submitting...' : 'Send Message'}
    </Button>
  );
}

export default function ContactPage() {
  const initialState: State = { message: null, errors: {}, success: false };
  const [state, dispatch] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.success && state.message) {
      toast({
        title: 'Success!',
        description: state.message,
      });
    } else if (!state.success && state.message) {
       toast({
        title: 'Error',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
          <div className="container px-4 md:px-6">
              <div className="text-center space-y-2">
                <h1 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Get in Touch</h1>
                <p className="max-w-[600px] mx-auto text-foreground/80 md:text-xl">
                  We'd love to hear from you. Fill out the form below or use our contact details to reach us.
                </p>
              </div>
          </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Send us a Message</CardTitle>
                <CardDescription>We'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form action={dispatch} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" placeholder="John Doe" required />
                    {state.errors?.name && <p className="text-sm font-medium text-destructive mt-1">{state.errors.name}</p>}
                  </div>
                  <div>
                    <Label htmlFor="company">Company Name (Optional)</Label>
                    <Input id="company" name="company" placeholder="Acme Inc." />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                    {state.errors?.email && <p className="text-sm font-medium text-destructive mt-1">{state.errors.email}</p>}
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+1 (234) 567-890" />
                  </div>
                  <div>
                    <Label htmlFor="details">Project Details</Label>
                    <Textarea id="details" name="details" placeholder="Tell us about your project..." required minLength={10} />
                    {state.errors?.details && <p className="text-sm font-medium text-destructive mt-1">{state.errors.details}</p>}
                  </div>
                  <SubmitButton />
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <h3 className="text-2xl font-headline font-bold">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-full">
                    <Building className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Our Office</h4>
                    <p className="text-foreground/80">123 Innovation Drive, Tech City, 54321</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                   <div className="bg-primary/10 text-primary p-3 rounded-full">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email Us</h4>
                    <a href="mailto:contact@codeharbor.dev" className="text-foreground/80 hover:text-primary transition-colors">contact@codeharbor.dev</a>
                  </div>
                </div>
                 <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-full">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Call Us</h4>
                    <a href="tel:+1234567890" className="text-foreground/80 hover:text-primary transition-colors">+1 (234) 567-890</a>
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
