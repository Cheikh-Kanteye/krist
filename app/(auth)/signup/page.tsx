import AuthLayout from "@/components/auth/AuthLayout";
import SignupForm from "@/components/auth/SignupForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Signup = async () => {
  const session = await getServerSession();

  if (session) redirect("/");
  return (
    <AuthLayout img="/images/signup_img.png">
      <SignupForm />
    </AuthLayout>
  );
};

export default Signup;
