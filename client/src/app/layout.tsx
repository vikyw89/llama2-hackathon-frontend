import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Finance",
  description: "Your finance assistant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="fixed inset-0 font-sans">{children}</body>
    </html>
  );
}
