import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Enter a valid email address"),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;

export const signupSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  topics: z.array(z.string()),
});

export type SignupFormData = z.infer<typeof signupSchema>;

export const commentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  comment: z.string().min(10, "Comment must be at least 10 characters"),
  remember: z.boolean(),
});

export type CommentFormData = z.infer<typeof commentSchema>;

export const serviceRequestSchema = z.object({
  service: z.string().min(1, "Choose a service"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  agree: z.boolean().refine((value) => value, "Please accept the terms"),
});

export type ServiceRequestFormData = z.infer<typeof serviceRequestSchema>;
