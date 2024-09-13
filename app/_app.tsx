"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";

// Define routes where header and footer should be hidden
const hideHeaderFooterRoutes = ["/signup", "/login", "/resetpwd"];

function getRouteBasedData(pathname: string) {
  return {
    hideHeaderFooter: hideHeaderFooterRoutes.includes(pathname),
  };
}

const App = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const { hideHeaderFooter } = getRouteBasedData(pathname);
  return (
    <SessionProvider>
      {!hideHeaderFooter && <Header />}
      {children}
      <ToastContainer />
      {!hideHeaderFooter && <Footer />}
    </SessionProvider>
  );
};

export default App;
