import type { FieldError, UseFormRegister } from "react-hook-form";
import type z from "zod";
import type { contactUsSchema } from "../schemas/contactUsSchema";

export type DataFormProps = z.infer<typeof contactUsSchema>

export type FormFieldProps = {
    placeholder?: string;
    name: ValidFieldNames;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
    formName: string
    register: UseFormRegister<DataFormProps>;
};

export type ValidFieldNames =
    | "user_email"
    | "subject"
    | "user_name"
    | "message";