import { Metadata } from "next";
import "./globals.css";
import "@fontsource/sofia-sans";
import "@fontsource/sofia-sans/400.css"; // Regular
import "@fontsource/sofia-sans/500.css"; // Medium
import "@fontsource/sofia-sans/600.css"; // SemiBold
import "@fontsource/sofia-sans/700.css"; // Bold

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
      <body className="font-sofia-sans">{children}</body>
    </html>
  );
}
