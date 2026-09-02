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
import "./sypher-theme.css";
import "./sypher-editorial.css";
import "./sypher-site-v2.css";
import "./sypher-site-v3.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sypher-delta.vercel.app"),
  title: {
    default: "Sypher — Tecnologia, Engenharia & Pesquisa",
    template: "%s — Sypher",
  },
  description:
    "A Sypher é uma empresa de tecnologia em formação, criando software, sistemas inteligentes, hardware e experiências interativas.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sypher — Tecnologia, Engenharia & Pesquisa",
    description: "Projetos próprios em software, inteligência artificial, produtos digitais, sistemas, hardware e experiências interativas.",
    type: "website",
    locale: "pt_BR",
    url: "/",
  },
  robots: { index: true, follow: true },
};

const themeBoot = `
(() => {
  try {
    const saved = localStorage.getItem('sypher-theme');
    const theme = saved === 'light' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch (_) {
    document.documentElement.dataset.theme = 'dark';
    document.documentElement.style.colorScheme = 'dark';
  }
})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
