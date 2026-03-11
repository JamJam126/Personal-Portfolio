import React from "react";

export enum ButtonVariant {
  Primary = "primary",
  Secondary = "secondary",
}

type ButtonProps = {
  label: string;
  icon?: React.ReactNode;
  variant?: ButtonVariant;
};

const variantStyles: Record<ButtonVariant, string> = {
  [ButtonVariant.Primary]: "bg-white text-black",

  [ButtonVariant.Secondary]: "border border-border text-text",
};

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  variant = ButtonVariant.Primary,
}) => {
  return (
    <button
      className={`flex items-center gap-2 px-3 py-2 w-fit rounded-md transition ${variantStyles[variant]}`}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      <span className="font-semibold text-sm">{label}</span>
    </button>
  );
};

export default Button;
