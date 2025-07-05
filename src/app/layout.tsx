import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EverythingArt",
  description: "EverythingArt by Faith Ogabor. Discover our collection of handcrafted textile masterpieces, where traditional techniques meet contemporary luxury design. For over three years, we have been at the forefront of luxury textile art, creating pieces that transcend ordinary decoration to become treasured heirlooms. Explore our curated collection of luxury textile artworks, each piece representing the pinnacle of craftsmanship and artistic vision.",
  keywords: "EverythingArt, Ogabor, Faith Ogabor, Textile, Textile Designs, Masterpiece art designs, Owogoga",
  openGraph: {
    title: "EverythingArt",
    description: "EverythingArt by Faith Ogabor. Discover our collection of handcrafted textile masterpieces, where traditional techniques meet contemporary luxury design. For over three years, we have been at the forefront of luxury textile art, creating pieces that transcend ordinary decoration to become treasured heirlooms. Explore our curated collection of luxury textile artworks, each piece representing the pinnacle of craftsmanship and artistic vision.",
    tags: "EverythingArt, Ogabor, Faith Ogabor, Textile, Textile Designs, Masterpiece art designs, Owogoga"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
