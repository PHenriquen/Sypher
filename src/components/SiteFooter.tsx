import Link from "next/link";
import { founderLinks } from "../brand";

export function SiteFooter() {
  return (
    <footer className="footer shell">
      <div className="footer-brand">
        <div className="brand-lockup compact">
          <img src="/brand/sypher.svg" alt="" aria-hidden="true" />
          <span>SYPHER</span>
        </div>
        <p>Technology company in formation · working identity v1.</p>
      </div>
      <div className="footer-links">
        <Link href="/brand">Brand system</Link>
        <Link href="/founder">Founder</Link>
        <Link href="/after-hours">After Hours</Link>
        <a href={founderLinks.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={founderLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={founderLinks.portfolio} target="_blank" rel="noreferrer">Portfolio</a>
      </div>
    </footer>
  );
}
