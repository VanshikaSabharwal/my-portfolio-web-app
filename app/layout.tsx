import React from "react";
import Head from "next/head";
import { Merienda } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header/Header"; // Ensure the path is correct
import InputTerminal from "./Components/InputTerminal/InputTerminal";

const inter = Merienda({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["normal"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Vanshika Sabharwal",
  description: "Portfolio Web App of Vanshika Sabharwal",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, maximum-scale=1"
          key="viewport"
        />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={inter.className}>
        {/* <ThemeProvider> */}
        <Header />
        {children}
        <InputTerminal />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
};

export default RootLayout;
