import type { Metadata } from "next";
import { Merienda } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./Components/ThemeProvider/ThemeProvider";
import Header from "./Components/Header/Header";

const inter = Merienda({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["normal"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Vanshika Sabharwal",
  description: "Porfolio Web App of Vanshika Sabharwal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
