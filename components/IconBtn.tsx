"use client";
import { HTMLAttributes } from "react";
import { IconType } from "react-icons";

interface IconBtnProps extends HTMLAttributes<HTMLButtonElement> {
  icon: IconType;
  size?: number;
  color?: string;
}

export const IconBtn = (props: IconBtnProps) => {
  const { icon: Icon, size, color } = props;
  return (
    <button type="button" {...props}>
      <Icon size={size || 20} color={color || "black"} />
    </button>
  );
};
