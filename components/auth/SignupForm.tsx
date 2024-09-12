"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Button from "../ui/Button";
import InputField from "../ui/InputField";
import Checkbox from "../ui/Checkbox";
import { z } from "zod";
import UserSchema from "./schema/UserSchema";
import Link from "next/link";

// Type inference from the schema
type UserFormValues = z.infer<typeof UserSchema>;

const SignupForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserFormValues>({
    resolver: zodResolver(UserSchema),
  });

  const onSubmit = async (data: UserFormValues) => {
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        console.log("Inscription réussie !");
        router.push("/login");
      } else {
        console.log("Échec de l'inscription. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Erreur de soumission:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-8 md:px-12 lg:px-16 flex flex-col justify-center h-full gap-4"
    >
      <div className="mb-3">
        <h1 className="text-3xl lg:text-4xl font-semibold leading-none">
          Create New Account
        </h1>
        <p className="text-base lg:text-lg text-gray-500">
          Please enter details
        </p>
      </div>

      <InputField
        type="text"
        label="First Name"
        {...register("first_name")}
        error={errors.first_name?.message}
      />

      <InputField
        type="text"
        label="Last Name"
        {...register("last_name")}
        error={errors.last_name?.message}
      />

      <InputField
        type="email"
        label="Email"
        {...register("email")}
        error={errors.email?.message}
      />

      <InputField
        type="password"
        label="Mot de passe"
        {...register("password")}
        error={errors.password?.message}
      />

      <Checkbox>
        I agree to the <strong>Terms & Conditions</strong>
      </Checkbox>

      <Button
        label={isSubmitting ? "Loading..." : "Signup"}
        className="max-w-lg"
        disabled={isSubmitting}
      />
      <Link
        href={"/login"}
        className=" max-w-lg text-center text-base lg:text-lg text-black/70"
      >
        Already have account?{" "}
        <span className="text-black font-semibold">Log in</span>
      </Link>
    </form>
  );
};

export default SignupForm;
