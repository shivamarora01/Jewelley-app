import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import NavbarHead from "./components/NavbarHead";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jewellery",
  description: "Generated by Mulltiply",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <NavbarHead />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
