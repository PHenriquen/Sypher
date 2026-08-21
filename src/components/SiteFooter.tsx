import Link from "next/link";
import { founderLinks } from "../brand";
import { UiIcon } from "./UiIcon";

export function SiteFooter() {
  return (
    <footer className="footer footer-v3 shell">
      <div className="footer-v3-main">
        <div className="footer-v3-brand">
          <div className="brand-lockup compact">
            <img src="/brand/sypher.svg" alt="" aria-hidden="true" />
            <span>SYPHER</span>
          </div>
          <p>Technology, engineering and applied research built around proprietary products.</p>
          <span className="footer-v3-status"><i /> Company in formation</span>
        </div>

        <div className="footer-v3-groups">
          <div>
            <span className="footer-v3-label">Company</span>
            <Link href="/brand">Brand system</Link>
            <Link href="/founder">Founder</Link>
            <Link href="/after-hours">After Hours</Link>
          </div>
          <div>
            <span className="footer-v3-label">Connect</span>
            <a href={founderLinks.github} target="_blank" rel="noreferrer">GitHub <UiIcon name="arrow-up-right" size={13} /></a>
            <a href={founderLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn <UiIcon name="arrow-up-right" size={13} /></a>
            <a href={founderLinks.portfolio} target="_blank" rel="noreferrer">Portfolio <UiIcon name="arrow-up-right" size={13} /></a>
          </div>
        </div>
      </div>

      <div className="footer-v3-bottom">
        <span>Technology · Engineering · Research</span>
        <span>Sypher / 2026</span>
      </div>
    </footer>
  );
}
