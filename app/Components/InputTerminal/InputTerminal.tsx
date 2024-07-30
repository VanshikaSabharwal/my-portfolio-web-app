"use client";
import React from "react";
import { useRef } from "react";

const InputTerminal = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="terminal-font text-light-foreground dark:text-dark-foreground min-w-max text-xs md:min-w-full md:text-base">
      <main className="terminal-font bg-light-background dark:bg-dark-background w-full h-full p-2"></main>
    </div>
  );
};

export default InputTerminal;
