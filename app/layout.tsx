import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sypher — Technology, Engineering & Research",
  description: "Sypher is a technology company in formation, building software, intelligent systems, hardware and interactive products.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
