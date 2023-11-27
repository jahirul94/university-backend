import { z } from "zod";

const userSchema = z.object({
    id: z.string(),
    password: z.string().max(20, { message: "password cannot be more than 20 characters" }),
    isPasswordChange: z.boolean().optional(),
    role: z.enum(["student", "faculty", "admin"]),
    status: z.enum(["in-progress", "blocked"]).default("in-progress"),
    isDeleted: z.boolean().optional().default(false)
})

export const userValidation = {
    userSchema
};
