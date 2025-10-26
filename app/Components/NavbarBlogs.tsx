"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IoReorderThreeSharp, IoCloseSharp } from "react-icons/io5";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);



  return (
    <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
<h1 className="text-lg sm:text-2xl font-bold text-foreground whitespace-nowrap">
  <Link href="/" className="hover:underline">
   Tech Diaries by  Vanshika 
  </Link>
</h1>

      </div>
    </nav>
  );
}
