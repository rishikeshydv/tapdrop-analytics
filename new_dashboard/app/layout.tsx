import type { Metadata } from "next";
import "./globals.css";
import poppins from "@/font/font";

export const metadata: Metadata = {
  title: "Tapdrop Analytics",
  description: "Tapdrop Analytics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
