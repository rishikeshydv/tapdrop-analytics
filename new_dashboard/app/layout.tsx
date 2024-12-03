import type { Metadata } from "next";
import "./globals.css";
import poppins from "@/font/font";
import Footer from "@/components/homepage/Footer";


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

        <Footer />
      </body>
    </html>
  );
}
