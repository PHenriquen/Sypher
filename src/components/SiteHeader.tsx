import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader() {
  return (
    <header className="site-header shell">
      <Link className="brand-lockup" href="/" aria-label="Página inicial da Sypher">
        <img src="/brand/sypher.svg" alt="" aria-hidden="true" />
        <span>SYPHER</span>
      </Link>
      <div className="site-header-right">
        <nav aria-label="Navegação principal">
          <Link href="/#areas">Áreas</Link>
          <Link href="/#projetos">Projetos</Link>
          <Link href="/brand">Marca</Link>
          <Link href="/founder">Fundador</Link>
        </nav>
        <span className="header-status"><i /> Em formação</span>
        <ThemeToggle compact />
      </div>
    </header>
  );
}
