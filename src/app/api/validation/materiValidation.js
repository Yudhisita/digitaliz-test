import { z } from "zod";

export class MateriValidation {
  static CREATE = z.object({
    course_id: z.string().min(1).max(150),
    title: z.string().min(1).max(150),
    description: z.string().min(1).max(150),
    embed_link: z.string().min(1).max(250),
  });

  static UPDATE = z.object({
    id: z.string(),
    title: z.string().min(1).max(100).optional(),
    description: z.string().min(1).max(250).optional(),
    embed_link: z.string().min(1).max(250),
  });
}
