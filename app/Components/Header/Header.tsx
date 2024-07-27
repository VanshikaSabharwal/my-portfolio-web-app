"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nonwrap items-center justify-between">
      <div className="portfolioTitle">PortFolio</div>
      <div className="flex items-center w-full md:2/3 linkContainer">
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
          href="/services"
          className="hover:-translate-y-2 duration-500 transition-all font-black text-tertiary-dark"
        >
          Services
        </Link>
        <Link
          href="/contact"
          className="hover:-translate-y-2 duration-500 transition-all font-black text-tertiary-dark"
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
