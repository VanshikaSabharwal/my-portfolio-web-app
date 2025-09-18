import React from "react";
import Head from "next/head";
import { Merienda } from "next/font/google";
import "./globals.css";
import Intro from "./Components/Intro/Intro"
import EnhancedTerminal from "./Components/EnhancedTerminal"
import EnhancedAbout from "./Components/EnhancedAbout"
import EnhancedProjects from "./Components/EnhancedProjects"
import EnhancedContact from "./Components/EnhancedContact"


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
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, maximum-scale=1"
          key="viewport"
        />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={inter.className} style={{ backgroundColor: "#D8C7B4" }}>
        {/* <ThemeProvider> */}
        {/* <Intro />
        <EnhancedTerminal />
        <EnhancedAbout />
        <EnhancedProjects />
        <EnhancedContact /> */}
        {/* <Header /> */}

        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
};

export default RootLayout;

