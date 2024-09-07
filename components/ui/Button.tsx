import { cn } from "@/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  iconRight?: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        `default-btn ${
          !props.disabled ? "hover:bg-slate-900" : "cursor-not-allowed"
        } transition-all duration-300`,
        props.className
      )}
    >
      {props.label && props.label}
      {props.iconRight && props.iconRight}
    </button>
  );
};

export default Button;
