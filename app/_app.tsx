"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { usePathname } from "next/navigation";
import React, { PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";

// Define routes where header and footer should be hidden
const hideHeaderFooterRoutes = ["/signup", "/login", "/reset"];

function getRouteBasedData(pathname: string) {
  return {
    hideHeaderFooter: hideHeaderFooterRoutes.includes(pathname),
  };
}

const App = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const { hideHeaderFooter } = getRouteBasedData(pathname);
  return (
    <>
      {!hideHeaderFooter && <Header />}
      {children}
      <ToastContainer />
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

export default App;
