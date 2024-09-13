import { cn } from "@/utils";
import { HTMLAttributes } from "react";

interface ButtonProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, "iconRight"> {
  label?: string;
  iconRight?: React.ReactNode;
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  const { label, iconRight, disabled, className, ...rest } = props;

  return (
    <button
      {...rest}
      className={cn(
        `default-btn ${
          !disabled ? "hover:bg-slate-900" : "cursor-not-allowed"
        } transition-all duration-300`,
        className
      )}
      disabled={disabled}
    >
      {label && label}
      {iconRight && iconRight}
    </button>
  );
};

export default Button;
