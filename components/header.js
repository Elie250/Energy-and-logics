import Link from "next/link"

export default function Header() {
  return (
    <header style={{ padding: "20px 40px", borderBottom: "1px solid #eee" }}>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/training">Training</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  )
}
