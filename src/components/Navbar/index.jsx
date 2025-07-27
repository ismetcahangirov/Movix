"use client";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import NavLink from "../NavLink";
import Logo from "../Logo";
import SearchInput from "../Search";
import HamburgerMenu from "../HamburgerMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentUser = useSelector((state) => state.auth.currentUser);

  return (
    <nav className="bg-transparent text-white py-2">
      <div className="flex justify-between items-center gap-4 md:gap-6">
        <NavLink href="/">
          <Logo />
        </NavLink>

        <div className="hidden md:flex items-center gap-2 md:gap-4 ml-2 flex-1 flex-nowrap overflow-hidden min-w-0">
          <NavLink
            href="/"
            className="text-sm whitespace-nowrap min-w-0 truncate"
          >
            Əsas ekran
          </NavLink>
          <NavLink
            href="/new"
            className="text-sm whitespace-nowrap min-w-0 truncate"
          >
            Yeni
          </NavLink>
          <NavLink
            href="/popular"
            className="text-sm whitespace-nowrap min-w-0 truncate"
          >
            Populyar
          </NavLink>
          <NavLink
            href="/my-list"
            className="text-sm whitespace-nowrap min-w-0 truncate"
          >
            Mənim siyahılarım
          </NavLink>

          <SearchInput />
        </div>

        <div className="sign hidden md:flex items-center gap-6">
          {currentUser ? (
            <NavLink href="/dashboard">
              <div className="flex items-center gap-1">
                <FaUserCircle size={22} />
                <span>Profil</span>
              </div>
            </NavLink>
          ) : (
            <>
              <NavLink
                href="/login"
                className="text-sm whitespace-nowrap min-w-0 truncate"
              >
                Daxil ol
              </NavLink>
              <NavLink
                href="/register"
                className="text-sm whitespace-nowrap min-w-0 truncate"
              >
                Qeydiyyat
              </NavLink>
            </>
          )}
        </div>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <AiOutlineClose size={24} />
          ) : (
            <GiHamburgerMenu size={24} />
          )}
        </button>
      </div>

      {menuOpen && (
        <>
          <HamburgerMenu currentUser={currentUser} setMenuOpen={setMenuOpen} />
        </>
      )}
    </nav>
  );
}
