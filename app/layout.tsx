import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
const inter = Inter({ subsets: ["latin"] });
import { Providers } from "./components/Providers";

export const metadata: Metadata = {
  title: "Testing Blog with Next.js",
  description: "Created by Jimmy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-100 text-black dark:bg-slate-900 dark:text-white">
        <Providers>
          <Navbar />
          <main className="prose prose-xl prose-slate dark:prose-invert mx-auto">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
