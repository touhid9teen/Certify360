import React from "react";

interface InputFieldProps {
    id: string;
    name: string;
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    type?: string;
    customInputClass?: string;
    accept?: string;
}

const inputField: React.FC<InputFieldProps> = (props : InputFieldProps) => {
    const {
        id,
        name,
        value,
        handleChange,
        placeholder,
        type = " ",
        customInputClass = "",
        accept = "",
    } = props;
    
    return (
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            name={name}
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={value}
            onChange={handleChange}
        />
    );
};

export default inputField;
