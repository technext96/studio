"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  company: z.string().optional(),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  details: z.string().min(10, { message: "Details must be at least 10 characters." }),
});

export type State = {
  errors?: {
    name?: string[];
    company?: string[];
    email?: string[];
    phone?: string[];
    details?: string[];
  };
  message?: string | null;
  success: boolean;
};

export async function submitContactForm(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    company: formData.get("company"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    details: formData.get("details"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed. Please check the form and try again.",
      success: false,
    };
  }
  
  // Here you would typically send an email, save to a database, etc.
  // For this example, we'll just simulate a success response.
  console.log("Form data submitted successfully:", validatedFields.data);

  return {
    message: "Thank you for your message! We'll get back to you shortly.",
    success: true,
  };
}
