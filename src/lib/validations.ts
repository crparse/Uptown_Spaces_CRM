import { z } from "zod";
import { LeadStatus, LeadSource, PropertyType } from "../types";

export const leadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^\+?[\d\s-]{10,}$/, "Invalid phone number format"),
  email: z.string().email("Invalid email address"),
  budget: z.number().min(1000, "Budget must be at least $1,000"),
  location: z.string().min(2, "Location is required"),
  propertyType: z.nativeEnum(PropertyType),
  source: z.nativeEnum(LeadSource),
});

export type LeadFormData = z.infer<typeof leadSchema>;

export const noteSchema = z.object({
  content: z.string().min(1, "Note content cannot be empty"),
});

export type NoteFormData = z.infer<typeof noteSchema>;
