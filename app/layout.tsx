import React, { Suspense } from "react";
import { TheHeader } from "@/components/TheHeader";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TheFooter } from "@/components/TheFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next App",
  description: "next blog app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TheHeader />
        <Suspense fallback={<div>Загрузка...</div>}>
          <main className="container">{children}</main>
        </Suspense>
        <TheFooter />
      </body>
    </html>
  );
}
