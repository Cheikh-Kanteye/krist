import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  iconRight?: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className={`h-14 bg-black text-center w-full text-white flex items-center gap-2 rounded-lg text-lg ${
        !props.disabled ? "hover:bg-slate-900" : "cursor-not-allowed"
      } transition-all duration-300 ${props.className}`}
    >
      {props.label && props.label}
      {props.iconRight && props.iconRight}
    </button>
  );
};

export default Button;
