import AuthLayout from "@/components/auth/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const Login = async () => {
  const session = await getServerSession();

  if (session) redirect("/");
  return (
    <AuthLayout img="/images/login_img.jpg">
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
