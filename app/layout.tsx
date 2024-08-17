import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  metadataBase: new URL("https://test-third-parties.vercel.app/"),
  openGraph: {
    images: ["/img.jpg"],
  },
  // twitter: {
  //   images: ["/img.jpg"],
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="py-6">
          <nav className="container">
            <ul className="flex gap-8">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>{children}</main>
        <GoogleTagManager gtmId="GTM-NHX4M3DT" />
      </body>
    </html>
  );
}
