import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Google Search Clone",
  description: "An open source Google Search Clone built with Next.js and Tailwind CSS ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        {children}
        <Footer/>
      </body>
    </html>
  );
}
