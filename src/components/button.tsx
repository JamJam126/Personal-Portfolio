import React from "react";

export enum ButtonVariant {
  Primary = "primary",
  Secondary = "secondary",
}

type ButtonProps = {
  label: string;
  icon?: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
};

const variantStyles: Record<ButtonVariant, string> = {
  [ButtonVariant.Primary]: `
    bg-white text-black
    hover:bg-[#CCCCCC]
    active:scale-95
    transition duration-150 ease-in-out
  `,

  [ButtonVariant.Secondary]: `
    border border-border text-text
    hover:bg-[#262626] hover:text-white
    active:bg-[#0a0a0a] active:scale-95
    transition duration-150 ease-in-out
  `,
};

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  variant = ButtonVariant.Primary,
  href,
}) => {
  const classes = `flex items-center gap-2 px-3 py-2 w-fit rounded-md transition ${variantStyles[variant]}`;
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {icon && <span className="flex items-center">{icon}</span>}
        <span className="font-semibold text-sm">{label}</span>
      </a>
    );
  }

  return (
    <button
      className={classes}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      <span className="font-semibold text-sm">{label}</span>
    </button>
  );
};

export default Button;
