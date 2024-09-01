import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className={`h-14 bg-black text-center w-full text-white rounded-lg text-lg hover:bg-slate-950 transition-all duration-300 ${props.className}`}
    >
      {props.label}
    </button>
  );
};

export default Button;
