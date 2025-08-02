import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const RoutesLayout = ({ children }) => {
  return (
    <body
      className={` font-montserrat antialiased bg-midnight flex flex-col justify-between h-screen`}
    >
      <Header />
      <div className="container mx-auto w-full max-w-[1280px] px-4">
        {children}
      </div>
      <Footer />
    </body>
  );
};

export default RoutesLayout;
