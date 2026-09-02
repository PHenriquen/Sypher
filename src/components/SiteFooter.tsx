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
          <p>Tecnologia, engenharia e pesquisa aplicada construídas em torno de produtos próprios.</p>
          <span className="footer-v3-status"><i /> Empresa em formação</span>
        </div>

        <div className="footer-v3-groups">
          <div>
            <span className="footer-v3-label">Empresa</span>
            <Link href="/brand">Sistema de marca</Link>
            <Link href="/founder">Fundador</Link>
          </div>
          <div>
            <span className="footer-v3-label">Conectar</span>
            <a href={founderLinks.github} target="_blank" rel="noreferrer">GitHub <UiIcon name="arrow-up-right" size={13} /></a>
            <a href={founderLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn <UiIcon name="arrow-up-right" size={13} /></a>
            <a href={founderLinks.portfolio} target="_blank" rel="noreferrer">Portfólio <UiIcon name="arrow-up-right" size={13} /></a>
          </div>
        </div>
      </div>

      <div className="footer-v3-bottom">
        <span>Tecnologia · Engenharia · Pesquisa</span>
        <span>Sypher</span>
      </div>
    </footer>
  );
}
