import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header shell">
      <Link className="brand-lockup" href="/" aria-label="Página inicial da Sypher">
        <img src="/brand/sypher.svg" alt="" aria-hidden="true" />
        <span>SYPHER</span>
      </Link>
      <div className="site-header-right">
        <nav aria-label="Navegação principal">
          <Link href="/#divisoes">Divisões</Link>
          <Link href="/#projetos">Projetos</Link>
          <Link href="/brand">Marca</Link>
          <Link href="/founder">Fundador</Link>
          <Link href="/after-hours">After Hours</Link>
        </nav>
        <span className="header-status"><i /> Em formação</span>
      </div>
    </header>
  );
}
