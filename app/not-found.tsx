import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found shell">
      <p className="eyebrow">404 / Not found</p>
      <h1>This path does not belong to the system.</h1>
      <Link className="button primary" href="/">Return home</Link>
    </main>
  );
}
