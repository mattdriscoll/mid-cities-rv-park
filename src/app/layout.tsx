import type { Metadata } from "next";
import { Open_Sans, Playfair } from "next/font/google";
import "./globals.css";

const playfair = Playfair({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mid Cities RV Park",
  description: `DFW's newest RV park, located in the heart of the metroplex. We are a family owned and operated RV park with a focus on providing a safe, clean, and friendly environment for our guests.`,
  metadataBase: new URL("https://midcitiesrvpark.com/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${[openSans.className, playfair.className].join(" ")}`}
    >
      <body className="font-open-sans bg-mcrv-black text-mcrv-white flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
