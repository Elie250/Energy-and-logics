import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h2>Energy & Logics Ltd</h2>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/training">Training</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
