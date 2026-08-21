import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import "./brand-system.css";
import "./polish.css";
import "./shell-polish.css";
import "./site-v3.css";
import "./footer-v3.css";
import "./template-tailwind.css";

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
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
