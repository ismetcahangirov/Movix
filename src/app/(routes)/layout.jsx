import Header from "@/components/Header";
import React from "react";

const RoutesLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container mx-auto w-full max-w-[1280px] px-4">
        {children}
      </div>
    </>
  );
};

export default RoutesLayout;
