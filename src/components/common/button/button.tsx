import React, { ReactNode } from "react";

interface ButtonProps {
  className?: string;
  children: ReactNode;
  type?: any;
  onClick?: any;
  disabled?: boolean;
}

const Button = ({
  className,
  children,
  type,
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`custom_button ${className || ""}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
