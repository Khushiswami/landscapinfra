// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Landsking Infra",
  description: "Global clients partner with us to build projects.",
  icons: {
    icon: "/finallogo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>
        {children}
      </body> */}
      <body className="font-newpanam">{children}</body>
    </html>
  );
}
