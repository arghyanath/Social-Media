import { email, z } from "zod";

export const CreateUserSchema = z.object({
    name: z.string(),
    email: z.email(),
    password: z.string().min(6)
})