"use server";

import { z } from "zod";
import nodemailer from "nodemailer";

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
  
  const { name, company, email, phone, details } = validatedFields.data;
  
  // IMPORTANT: You must configure these environment variables in your .env file
  // for the email sending to work.
  const transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., 'gmail', 'yahoo', or use host/port for custom SMTP
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your email password or app password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'technext96@gmail.com', // The email address you want to receive messages at
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company || 'N/A'}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Details:</strong></p>
      <p>${details}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      message: "Thank you for your message! We'll get back to you shortly.",
      success: true,
    };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      message: "Sorry, there was an error sending your message. Please try again later.",
      success: false,
    };
  }
}
