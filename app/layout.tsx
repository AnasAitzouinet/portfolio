import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins, Roboto } from "next/font/google";
import { NextUIProvider } from "@nextui-org/system";
import { Analytics } from '@vercel/analytics/react';

import { ScrollArea } from "@/components/ui/scroll-area";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anas AitZouinet",
  description: "Anas's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />

      </body>
    </html>
  );
}
