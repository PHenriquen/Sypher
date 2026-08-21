import type { Metadata } from "next";
import "./globals.css";
import "./brand-system.css";
import "./polish.css";
import "./shell-polish.css";

export const metadata: Metadata = {
  title: {
    default: "Sypher — Technology, Engineering & Research",
    template: "%s — Sypher",
  },
  description:
    "Sypher is a technology company in formation, building software, intelligent systems, hardware and interactive products.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
