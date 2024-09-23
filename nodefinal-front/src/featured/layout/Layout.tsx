"use client";

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Header from "../header";
import Footer from "../footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();

  const excludePaths = ["/", "/signup"];

  return (
    <div>
      {!excludePaths.includes(pathname) && <Header />}
      {children}
      {!excludePaths.includes(pathname) && <Footer />}
    </div>
  );
};

export default Layout;
