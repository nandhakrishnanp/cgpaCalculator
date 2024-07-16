import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "CGPA Calculator",
  description: "Ggpas calculator for students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="https://t4.ftcdn.net/jpg/03/02/36/89/360_F_302368996_otkNEsq49lDGQUKJN7EuvYHQcHZ2xIsc.jpg" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
