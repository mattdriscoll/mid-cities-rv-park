import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mid Cities RV Park",
  description: `DFW's newest RV park, located in the heart of the metroplex. We are a family owned and operated RV park with a focus on providing a safe, clean, and friendly environment for our guests.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-mcrv-black text-mcrv-white flex flex-col min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
