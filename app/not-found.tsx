import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found shell">
      <p className="eyebrow">404 / Não encontrado</p>
      <h1>Esse caminho não pertence ao sistema.</h1>
      <Link className="button primary" href="/">Voltar para o início</Link>
    </main>
  );
}
