import Image from "next/image";
import React, { PropsWithChildren } from "react";

const AuthLayout = ({
  children,
  img,
}: {
  children?: React.ReactNode;
  img: string;
}) => {
  return (
    <section className="grid lg:grid-cols-2 h-dvh w-full overflow-hidden relative z-0">
      <Image
        src={"/images/logo.png"}
        alt="Krist"
        width={100}
        height={100}
        className="w-24 lg:w-[150px] h-auto absolute top-8 left-8 z-50"
      />
      <div className="h-full relative hidden lg:block">
        <Image
          src={img}
          alt="cover"
          width={1000}
          height={1000}
          className="w-full h-dvh object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>
      <div>{children}</div>
    </section>
  );
};

export default AuthLayout;
