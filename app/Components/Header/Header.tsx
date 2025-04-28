"use client";
import { useState } from "react";
import Link from "next/link";
import { IoReorderThreeSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const HorizontalNav = () => {
    return (
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex items-center flex-wrap w-full md:w-2/3 linkContainer`}
      >
        <Link
          href="/"
          className="hover:-translate-y-2 duration-500 transition-all font-black text-tertiary-dark"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="hover:-translate-y-2 duration-500 transition-all font-black text-tertiary-dark"
        >
          About
        </Link>
        <Link
          href="/projects"
          className="hover:-translate-y-2 duration-500 transition-all font-black text-tertiary-dark"
        >
          Projects
        </Link>
        <Link
          href="/terminal"
          className="hover:-translate-y-2 duration-500 transition-all font-black text-tertiary-dark"
        >
          Terminal
        </Link>
        <Link
          href="/skills"
          className="hover:-translate-y-2 duration-500 transition-all font-black text-tertiary-dark"
        >
          Skills
        </Link>
        <Link
          href="/contact"
          className="hover:-translate-y-2 duration-500 transition-all font-black text-tertiary-dark"
        >
          Contact
        </Link>
      </div>
    );
  };
  const VerticalNav = () => {
    return (
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex linkContainerVertical items-center flex-wrap w-full flex flex-col md:w-2/3 `}
      >
        <Link
          href="/"
          className="hover:-translate-y-2 duration-500 transition-all font-black text-tertiary-dark"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="hover:-translate-y-2 duration-500 transition-all font-black text-tertiary-dark"
        >
          About
        </Link>
        <Link
          href="/projects"
          className="hover:-translate-y-2 duration-500 transition-all font-black text-tertiary-dark"
        >
          Projects
        </Link>
        <Link
          href="/terminal"
          className="hover:-translate-y-2 duration-500 transition-all font-black text-tertiary-dark"
        >
          Terminal
        </Link>
        <Link
          href="/skills"
          className="hover:-translate-y-2 duration-500 transition-all font-black text-tertiary-dark"
        >
          Skills
        </Link>
        <Link
          href="/contact"
          className="hover:-translate-y-2 duration-500 transition-all font-black text-tertiary-dark"
        >
          Contact
        </Link>
      </div>
    );
  };

  return (
    <header className="py-10 bg-black px-4 container text-xl flex flex-wrap items-center justify-between headerContainer">
      <div className="portfolioTitle py-2.5 px-3">PortFolio</div>
      <div className="flex flex-row items-center md:hidden">
        <button onClick={toggleMenu} className="text-3xl text-white">
          {menuOpen ? <IoReorderThreeSharp /> : <IoCloseSharp />}
        </button>
      </div>

      {menuOpen ? <HorizontalNav /> : <VerticalNav />}
    </header>
  );
};

export default Header;
