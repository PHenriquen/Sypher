import Link from "next/link";
import { founderUrl } from "../brand";

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
        <a href="https://github.com/PHenriquen" target="_blank" rel="noreferrer">GitHub</a>
        <a href={founderUrl} target="_blank" rel="noreferrer">Founder portfolio</a>
      </div>
    </footer>
  );
}
