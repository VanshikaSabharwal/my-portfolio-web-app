"use client";
import { useState } from "react";
import Link from "next/link";
import { IoReorderThreeSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { useSpring, animated } from "@react-spring/web";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // React Spring Animation for Menu
  const menuAnimation = useSpring({
    transform: menuOpen ? "translateX(0%)" : "translateX(-100%)", // This ensures menu comes from the left
    opacity: menuOpen ? 1 : 0,
    config: { tension: 250, friction: 20 },
  });

  const HorizontalNav = () => {
    return (
      <animated.div
        style={menuAnimation}
        className="md:flex items-center flex-wrap w-full md:w-2/3 linkContainer"
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
      </animated.div>
    );
  };

  const VerticalNav = () => {
    return (
      <animated.div
        style={menuAnimation}
        className="md:flex linkContainerVertical items-center flex-wrap w-full flex flex-col md:w-2/3 pt-16 space-y-4"
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
      </animated.div>
    );
  };

  return (
    <header className="py-10 bg-black px-4 container text-xl flex flex-wrap items-center justify-between headerContainer">
      <div className="portfolioTitle py-2.5 px-3">PortFolio</div>

      {/* Hamburger Icon for Mobile View */}
      <div className="flex flex-row items-center md:hidden z-50">
        <button onClick={toggleMenu} className="text-3xl text-white">
          {menuOpen ? <IoCloseSharp /> : <IoReorderThreeSharp />}
        </button>
      </div>

      {/* Menu for Desktop */}
      <div className="hidden md:flex items-center justify-between w-full">
        <HorizontalNav />
      </div>

      {/* Menu for Mobile */}
      <div className="md:hidden w-full">
        <animated.div
          style={menuAnimation}
          className="absolute top-0 left-0 w-full h-screen bg-black z-50"
        >
          {/* Close button inside the menu */}
          {menuOpen && (
            <div className="absolute top-5 right-5 z-50">
              <button onClick={toggleMenu} className="text-3xl text-white">
                <IoCloseSharp />
              </button>
            </div>
          )}
          <VerticalNav />
        </animated.div>
      </div>
    </header>
  );
};

export default Header;
