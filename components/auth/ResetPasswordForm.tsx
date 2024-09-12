"use client";

import React from "react";
import InputField from "../ui/InputField";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../ui/Button";
import Link from "next/link";
import { RiArrowLeftLine, RiArrowLeftSLine } from "react-icons/ri";

const ResetSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type ResetFormInput = {
  email: string;
};

const ResetPasswordForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetFormInput>({
    resolver: zodResolver(ResetSchema),
  });

  const onSubmit = () => {};

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-8 md:px-12 lg:px-16 flex flex-col justify-center h-full gap-4"
    >
      <div className="mb-4">
        <button onClick={router.back} className="flex gap-1 items-center mb-4">
          <RiArrowLeftSLine size={24} /> <span>Back</span>
        </button>
        <h1 className="text-3xl lg:text-4xl font-semibold leading-none">
          Forgot Password
        </h1>
        <p className="text-base lg:text-lg text-gray-500 max-w-lg text-pretty">
          Enter your registered email address. we’ll send you a code to reset
          your password.
        </p>
      </div>

      <InputField
        type="email"
        label="Email address"
        {...register("email")}
        error={errors.email?.message}
      />
      <Button
        label={isSubmitting ? "Loading..." : "Reset Password"}
        className="max-w-lg"
        disabled={isSubmitting}
      />
    </form>
  );
};

export default ResetPasswordForm;
