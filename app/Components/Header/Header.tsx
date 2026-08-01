"use client";
import { useState } from "react";
import Link from "next/link";
import { IoReorderThreeSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { useSpring, animated } from "@react-spring/web";
import { useLanguage } from "../../context/LanguageContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, toggleLocale } = useLanguage();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // React Spring Animation for Menu
  const menuAnimation = useSpring({
    transform: menuOpen ? "translateX(0%)" : "translateX(100%)", // Menu slides in from the right
    opacity: menuOpen ? 1 : 0,
    config: { tension: 280, friction: 26 },
  });

  const HorizontalNav = () => {
    return (
      <div className="md:flex items-center justify-start w-full linkContainer">
        <Link
          href="/"
          className="hover:-translate-y-2 duration-500 transition-all font-black text-tertiary-dark"
        >
          {t("nav.home")}
        </Link>
        <Link
          href="/about"
          className="hover:-translate-y-2 duration-500 transition-all font-black text-tertiary-dark"
        >
          {t("nav.about")}
        </Link>
        <Link
          href="/projects"
          className="hover:-translate-y-2 duration-500 transition-all font-black text-tertiary-dark"
        >
          {t("nav.projects")}
        </Link>
        <Link
          href="/terminal"
          className="hover:-translate-y-2 duration-500 transition-all font-black text-tertiary-dark"
        >
          {t("nav.terminal")}
        </Link>
        <Link
          href="/skills"
          className="hover:-translate-y-2 duration-500 transition-all font-black text-tertiary-dark"
        >
          {t("nav.skills")}
        </Link>
        <Link
          href="/contact"
          className="hover:-translate-y-2 duration-500 transition-all font-black text-tertiary-dark"
        >
          {t("nav.contact")}
        </Link>
      </div>
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
          {t("nav.home")}
        </Link>
        <Link
          href="/about"
          className="hover:-translate-y-2 duration-500 transition-all font-black text-tertiary-dark"
        >
          {t("nav.about")}
        </Link>
        <Link
          href="/projects"
          className="hover:-translate-y-2 duration-500 transition-all font-black text-tertiary-dark"
        >
          {t("nav.projects")}
        </Link>
        <Link
          href="/terminal"
          className="hover:-translate-y-2 duration-500 transition-all font-black text-tertiary-dark"
        >
          {t("nav.terminal")}
        </Link>
        <Link
          href="/skills"
          className="hover:-translate-y-2 duration-500 transition-all font-black text-tertiary-dark"
        >
          {t("nav.skills")}
        </Link>
        <Link
          href="/contact"
          className="hover:-translate-y-2 duration-500 transition-all font-black text-tertiary-dark"
        >
          {t("nav.contact")}
        </Link>
      </animated.div>
    );
  };

  return (
    <header className="py-4 bg-black px-4 container text-xl flex flex-wrap items-center justify-between headerContainer">
      <div className="portfolioTitle py-2.5 px-3">{t("brand.portfolio")}</div>

      {/* Hamburger Icon for Mobile View */}
      <div className="flex flex-row items-center gap-3 md:hidden z-50">
        <button
          onClick={toggleLocale}
          className="text-sm font-bold text-white border border-white rounded-full px-3 py-1"
        >
          {t("lang.toggleLabel")}
        </button>
        <button onClick={toggleMenu} className="text-3xl text-white">
          {menuOpen ? <IoCloseSharp /> : <IoReorderThreeSharp />}
        </button>
      </div>

      {/* Menu for Desktop */}
      <div className="hidden md:flex items-center justify-between w-full">
        <HorizontalNav />
        <button
          onClick={toggleLocale}
          className="text-sm font-bold text-white border border-white rounded-full px-3 py-1 ml-4 shrink-0 hover:bg-white hover:text-black transition-colors"
        >
          {t("lang.toggleLabel")}
        </button>
      </div>

      {/* Menu for Mobile */}
      <div className="md:hidden w-full">
        <animated.div
          style={menuAnimation}
          className="fixed inset-0 w-screen h-screen bg-black z-50 overflow-y-auto"
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
