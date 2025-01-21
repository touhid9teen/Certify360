import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    text: string;
    labelStyle?: string;
}

const Label: React.FC<LabelProps> = (Props: LabelProps) => {
    const { text, labelStyle, ...rest } = Props;
    return (
        <label
            className={`block text-sm font-medium text-gray-700 ${labelStyle}`}
        >
            {text}
        </label>
    );
};

export default Label;
