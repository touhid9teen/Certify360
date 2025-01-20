import React, { BaseHTMLAttributes, FC, ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    icon?: {
		iconFile: ReactNode;
		iconCustomClass?: string;
	}
    buttonStyle?: string;
    iconStyle?: string;
    buttonType?: "button" | "submit" | "reset";
    buttonVariant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const { children, icon, buttonStyle, iconStyle, buttonVariant } = props;

    const buttonColor =
        `${buttonVariant === "primary" ? "bg-primary text-white" : "bg-secondary"}`;
    return (
        <button
            type="button"
            className={`flex items-center rounde-lg h-14 px-5 text-semibold ${buttonStyle} ${buttonColor} `}
        >
            {icon && (
                <span
				className={`${icon.iconCustomClass}`}
                >
                  {icon.iconFile}
                </span>
            )}
            <span>{children}</span>
        </button>
    );
};
export default Button;
