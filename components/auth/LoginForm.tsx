"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import Link from "next/link";
import InputField from "../ui/InputField";
import Checkbox from "../ui/Checkbox";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

// Zod schema definition
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

// Define the form data type based on the schema
type LoginFormInputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormInputs) => {
    const { email, password } = data;

    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (response?.error)
      toast.error("Email or password incorrect", {
        position: "top-right",
      });

    if (response?.ok) {
      toast.success("Successfully connected!", { position: "top-right" });
      router.push("/");
      router.refresh();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-8 md:px-12 lg:px-16 flex flex-col justify-center h-full gap-4"
    >
      <div className="mb-4">
        <h1 className="text-3xl lg:text-4xl font-semibold leading-none">
          Welcome 👋
        </h1>
        <p className="text-base lg:text-lg text-gray-500">Please login here</p>
      </div>

      <InputField
        type="email"
        label="Email"
        {...register("email")}
        error={errors.email?.message}
      />

      <InputField
        type="password"
        label="Password"
        {...register("password")}
        error={errors.password?.message}
      />

      <div className="my-3 flex justify-between items-center max-w-lg">
        <Checkbox>Remember me</Checkbox>
        <Link href="/reset" className="text-base lg:text-lg">
          Forgot Password?
        </Link>
      </div>
      <Button
        label={isSubmitting ? "Loading..." : "Login"}
        className="max-w-lg"
        disabled={isSubmitting}
      />
    </form>
  );
};

export default LoginForm;
