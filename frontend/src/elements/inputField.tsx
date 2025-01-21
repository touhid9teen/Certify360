import React from "react";

interface InputFieldProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = (props : InputFieldProps) => {
    const { type, placeholder, value, onChange } = props; 
    return (
        <div className="flex flex-col mb-4 w-full">
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full"
            />
        </div>
    );
};
export default InputField;
