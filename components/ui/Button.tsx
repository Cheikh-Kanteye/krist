import { cn } from "@/utils";
import { HTMLAttributes } from "react";

interface ButtonProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, "iconRight"> {
  label?: string;
  iconRight?: React.ReactNode;
  disabled?: boolean;
  variant?: "outline" | "primary";
}

const Button = (props: ButtonProps) => {
  const {
    label,
    iconRight,
    disabled,
    className,
    variant = "primary",
    ...rest
  } = props;

  return (
    <button
      {...rest}
      className={cn(
        `default-btn ${
          !disabled ? "hover:bg-slate-900" : "cursor-not-allowed"
        } transition-all duration-300`,
        className,
        {
          "bg-transparent border border-black text-black hover:bg-black/5":
            variant == "outline",
        }
      )}
      disabled={disabled}
    >
      {label && label}
      {iconRight && iconRight}
    </button>
  );
};

export default Button;
