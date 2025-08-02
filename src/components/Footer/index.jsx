import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto w-full max-w-[1280px] px-4 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center">
          <Logo />
        </div>

        <a
          href="mailto:movix.support@gmail.com"
          className="flex items-center gap-2 text-sm text-center w-full sm:w-auto hover:underline hover:text-red-400 transition"
        >
          <MdEmail className="text-lg" />
          movix.support@gmail.com
        </a>

        <div className="flex items-center gap-4 text-xl">
          <a
            href="https://instagram.com"
            target="_blank"
            className="hover:text-pink-400 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            className="hover:text-blue-500 transition"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
