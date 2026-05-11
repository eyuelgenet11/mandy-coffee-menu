import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Mandy Coffee | Premium Digital Menu",
  description: "Experience the finest boutique coffee and artisan snacks at Mandy Coffee House. Browse our curated digital menu for Espresso, V60, Mojitos, and more.",
  keywords: ["coffee", "digital menu", "Mandy Coffee", "espresso", "v60", "specialty coffee", "Ethiopia coffee"],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: "Mandy Coffee | Digital Menu",
    description: "Boutique coffee and snacks in a modern atmosphere.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
