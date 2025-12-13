import type React from "react";
import type { FormFieldProps } from "../../types/formTypes";

const FormField: React.FC<FormFieldProps> = ({
    placeholder,
    name,
    formName,
    register,
    error, }) => (
    <div className="form-input-group">
        <label htmlFor={name} className="block text-gray-300 mb-2">{formName}</label>
        <input
            type="text"
            placeholder={placeholder}
            {...register(name)}
            className="w-full bg-transparent border-b border-gray-600 focus:border-yellow-500 outline-none pb-2 text-white"
        />
        {error && (<p className='text-red-500'>{error.message}</p>)}
    </div>
)

export default FormField