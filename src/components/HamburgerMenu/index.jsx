import React from "react";
import { FaUserCircle } from "react-icons/fa";
import NavLink from "../NavLink";
import SearchInput from "../Search";

const HamburgerMenu = ({ currentUser, setMenuOpen }) => {
  return (
    <div className="mt-3 flex flex-col gap-3 md:hidden items-start px-1">
      <NavLink href="/" onClick={() => setMenuOpen(false)}>
        Əsas ekran
      </NavLink>
      <NavLink href="/new" onClick={() => setMenuOpen(false)}>
        Yeni
      </NavLink>
      <NavLink href="/popular" onClick={() => setMenuOpen(false)}>
        Populyar
      </NavLink>
      <NavLink href="/my-list" onClick={() => setMenuOpen(false)}>
        Mənim siyahılarım
      </NavLink>
      <NavLink href="/#about" onClick={() => setMenuOpen(false)}>
        Haqqında
      </NavLink>
      <div className="flex flex-col gap-2">
        {currentUser ? (
          <NavLink href="/dashboard" onClick={() => setMenuOpen(false)}>
            <div className="flex items-center gap-1">
              <FaUserCircle size={20} />
              <span>Profil</span>
            </div>
          </NavLink>
        ) : (
          <>
            <NavLink href="/login" onClick={() => setMenuOpen(false)}>
              Daxil ol
            </NavLink>
            <NavLink href="/register" onClick={() => setMenuOpen(false)}>
              Qeydiyyat
            </NavLink>
          </>
        )}
      </div>

      <SearchInput />
    </div>
  );
};

export default HamburgerMenu;
