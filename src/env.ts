import z from "zod";

const envSchema = z.object({
    VITE_EMAIL_SERVICE_ID: z.string(),
    VITE_EMAIL_TEMPLATE_ID: z.string(),
    VITE_EMAIL_PUBLIC_KEY: z.string(),
})

const metaEnv = envSchema.parse(import.meta.env)

export default metaEnv