import React from "react";
import Navbar from "../Navbar";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 py-2 bg-black/50 ">
      <div className="container mx-auto w-full max-w-[1280px] px-4">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
