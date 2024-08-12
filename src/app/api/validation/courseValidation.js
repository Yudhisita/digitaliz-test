import { z } from "zod";

export class CouresValidation {
  static CREATE = z.object({
    title: z.string().min(1).max(100),
    description: z.string().min(1).max(250),
    duration: z.number().min(1).positive().optional(),
  });

  static UPDATE = z.object({
    id: z.string(),
    title: z.string().min(1).max(100).optional(),
    description: z.string().min(1).max(250).optional(),
    duration: z.number().min(1).positive().optional(),
  });
}
