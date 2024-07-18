import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mubashir Curtain",
  description: "At Mubashir Curtain, we enhance your spaces with stylish and elegant curtains, blinds, and interior design solutions. Our commitment to quality and personalized service ensures your home or office reflects your unique taste.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
