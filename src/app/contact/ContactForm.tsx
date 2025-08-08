
'use client';

import { useEffect, useRef } from 'react';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import { submitContactForm, type State } from './actions';
import { useToast } from '@/hooks/use-toast';

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

export default function ContactForm() {
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
  );
}
