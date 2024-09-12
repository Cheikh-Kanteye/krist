import AuthLayout from "@/components/auth/AuthLayout";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const ResetPwd = async () => {
  const session = await getServerSession();

  if (session) redirect("/");
  return (
    <AuthLayout img="/images/resetpwd_img.jpg">
      <ResetPasswordForm />
    </AuthLayout>
  );
};

export default ResetPwd;
``;
