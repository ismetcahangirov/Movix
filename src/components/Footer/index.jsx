import React from "react";
import { FaInstagram, FaFacebook, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto w-full max-w-[1280px] px-4  flex flex-col md:flex-row items-center justify-between flex-wrap gap-4">
        <div className="flex items-center">
          <Logo />
        </div>

        <div className="flex flex-col items-center sm:items-start gap-2 text-sm text-center w-full sm:w-auto">
          <a
            href="mailto:movix.support@gmail.com"
            className="flex items-center gap-2 hover:underline hover:text-red-400 transition"
          >
            <MdEmail className="text-lg" />
            movix.support@gmail.com
          </a>
          <a
            href="tel:+994777777777"
            className="flex items-center gap-2 hover:underline hover:text-green-400 transition"
          >
            <FaPhone className="text-lg" />
            +994 77 777 77 77
          </a>
        </div>

        <div className="flex items-center gap-4 text-xl">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
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
