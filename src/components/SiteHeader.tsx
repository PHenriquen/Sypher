import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header shell">
      <Link className="brand-lockup" href="/" aria-label="Sypher home">
        <img src="/brand/sypher.svg" alt="" aria-hidden="true" />
        <span>SYPHER</span>
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/#divisions">Divisions</Link>
        <Link href="/#projects">Projects</Link>
        <Link href="/brand">Brand</Link>
        <Link href="/founder">Founder</Link>
        <Link href="/after-hours">After Hours</Link>
      </nav>
    </header>
  );
}
