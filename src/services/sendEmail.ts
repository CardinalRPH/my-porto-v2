import emailjs from "@emailjs/browser"
import metaEnv from "../env"
import type { DataFormProps } from "../types/formTypes"


const sendEmail = async (data: DataFormProps) => {
    try {
        await emailjs.send(metaEnv.VITE_EMAIL_SERVICE_ID, metaEnv.VITE_EMAIL_TEMPLATE_ID, data, metaEnv.VITE_EMAIL_PUBLIC_KEY)
    } catch (error) {
        throw error
    }
}

export default sendEmail