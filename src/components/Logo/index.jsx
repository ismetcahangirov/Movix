import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import NavLink from "../NavLink";

const Logo = () => {
  return (
    <NavLink href="/">
      <div className=" text-amber-400  font-bold flex items-center gap-1">
        <FaGooglePlay size={15} />
        <div className="text-amber-400 text-xl md:text-2xl">Movix</div>
      </div>
    </NavLink>
  );
};

export default Logo;
