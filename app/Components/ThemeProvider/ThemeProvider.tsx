"use client";
import { useEffect, useState } from "react";
import React from "react";
import ThemeContext from "../../context/ThemeContext";

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const themeLocalStorage: boolean =
    typeof localStorage !== "undefined" &&
    localStorage.getItem("portfolio-theme")
      ? JSON.parse(localStorage.getItem("portfolio-theme")!)
      : false;
  const [darkTheme, setDarkTheme] = useState<boolean>(themeLocalStorage);

  const [renderComponent, setRenderComponent] = useState(false);
  useEffect(() => {
    setRenderComponent(true);
  }, []);
  if (!renderComponent) return <></>;

  return (
    <div className="theme-provider">
      <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
        <div className={`${darkTheme ? "dark" : ""} min-h-screen`}>
          <div className="">{children}</div>
        </div>
      </ThemeContext.Provider>
    </div>
  );
};

export default ThemeProvider;
