import { Metadata } from "next";
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
      {/* Apply Arial as the default font */}
      <body className="font-sans">{children}</body>
    </html>
  );
}
