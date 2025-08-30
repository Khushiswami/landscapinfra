// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { inter } from "../lib/fonts";

export const metadata: Metadata = {
  title: "Landsking Infra",
  description: "Global clients partner with us to build projects.",
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
      </body>
    </html>
  );
}
