"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IoReorderThreeSharp, IoCloseSharp } from "react-icons/io5";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, toggleLocale } = useLanguage();

  return (
    <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
<h1 className="text-lg sm:text-2xl font-bold text-foreground whitespace-nowrap">
  <Link href="/" className="hover:underline">
   {t("brand.blogTitle")}
  </Link>
</h1>

        <button
          onClick={toggleLocale}
          className="text-sm font-bold text-foreground border border-border rounded-full px-3 py-1.5 hover:bg-muted transition-colors"
        >
          {t("lang.toggleLabel")}
        </button>
      </div>
    </nav>
  );
}
