import React from "react";
import { FaGooglePlay } from "react-icons/fa";

const Logo = () => {
  return (
    <div className="text-lg text-amber-400 md:text-xl font-bold flex items-center gap-1">
      <FaGooglePlay size={15} />
      Movix
    </div>
  );
};

export default Logo;
