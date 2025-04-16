import React, { forwardRef } from "react";
import classNames from "classnames";

type ButtonVariant = "primary" | "secondary" | "default";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  outline?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "default",
      size = "md",
      outline = false,
      fullWidth = false,
      className,
      children,
      disabled,
      onClick,
      ...props
    },
    ref
  ) => {
    const getVariantStyles = () => {
      if (outline) {
        return {
          primary:
            "border border-primary-500 text-primary-500 hover:bg-primary/50",
          secondary:
            "border border-secondary-500 text-secondary-500 hover:bg-secondary hover:text-white",
          default: "border border-gray-300 text-gray-700 hover:bg-gray-50",
        }[variant];
      }

      return {
        primary:
          "bg-primary border border-primary text-white hover:bg-primary/80",
        secondary:
          "bg-secondary border border-secondary text-white hover:bg-secondary/80",
        default:
          "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50",
      }[variant];
    };

    const getSizeStyles = () => {
      return {
        sm: "px-4 py-1.5 text-[13px]",
        md: "px-5 md:px-7 py-2.5 text-xs md:text-sm",
        lg: "px-5 sm:px-[31px] py-2.5 sm:py-[11px] text-xs sm:text-base",
      }[size];
    };

    const baseStyles = classNames(
      "inline-flex items-center justify-center rounded-[5px] font-semibold transition-colors focus:outline-none !font-family-barlow cursor-pointer",
      getVariantStyles(),
      getSizeStyles(),
      {
        "w-full": fullWidth,
        "opacity-50 cursor-not-allowed": disabled,
      },
      className
    );

    return (
      <button
        ref={ref}
        className={baseStyles}
        disabled={disabled}
        {...props}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
