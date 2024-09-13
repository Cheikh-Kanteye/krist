"use client";
import { HTMLAttributes } from "react";
import { IconType } from "react-icons";

interface IconBtnProps extends Omit<HTMLAttributes<HTMLButtonElement>, "icon"> {
  icon: IconType;
  size?: number;
  color?: string;
}

export const IconBtn = (props: IconBtnProps) => {
  const { icon: Icon, size, color, ...rest } = props;
  return (
    <button type="button" {...rest}>
      <Icon size={size || 20} color={color || "black"} />
    </button>
  );
};
