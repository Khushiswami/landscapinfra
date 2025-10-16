import { Metadata } from "next";
import "./globals.css";
import { Kufam } from "next/font/google";

// Import Kufam font
const kufam = Kufam({ subsets: ["latin"], weight: ["400", "700"] });

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
      {/* Apply Kufam as the default font */}
      <body className={kufam.className}>{children}</body>
    </html>
  );
}
