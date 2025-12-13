import z from "zod";

export const contactUsSchema = z.object({
    subject: z
        .string()
        .min(3, "Subject must be at least 3 characters"),
    user_name: z
        .string()
        .min(2, "Name must be at least 2 characters"),
    user_email: z.email("Invalid email address"),
    message: z
        .string()
        .min(10, "Message must be at least 10 characters"),
})