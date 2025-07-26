import type { Metadata } from "next";
import "./globals.css"; // This line is critical and correct

// 1. Corrected the import paths to use lowercase folder names
import Header from "@/components/Header"; 
import Footer from "@/components/Footer";

// 2. Imported the new DiscoverSection component
import { DiscoverSection } from "@/components/sections/DiscoverSection";

export const metadata: Metadata = {
  title: "601 Bullies LLC - Built Strong. Raised Right.",
  description: "High-quality American Bully breeder focused on health, temperament, and pedigree.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <DiscoverSection /> {/* 3. Added the new section here, above the footer */}
        <Footer />
      </body>
    </html>
  );
}