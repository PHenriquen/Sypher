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
import "./division-worlds.css";
import "./home-division-previews.css";

export const metadata: Metadata = {
  title: {
    default: "Sypher — Tecnologia, Engenharia & Pesquisa",
    template: "%s — Sypher",
  },
  description:
    "A Sypher é uma empresa de tecnologia em formação, criando software, sistemas inteligentes, hardware e experiências interativas.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
