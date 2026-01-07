"use client"

import Link from "next/link"
import Image from "next/image"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 p-4">
      <nav className="max-w-5xl mx-auto flex items-center justify-between h-16 px-6 rounded-full bg-card/70 border border-border/50 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/rajnish-logo.png" alt="Rajnish Kumar Logo" width={40} height={40} className="h-10 w-auto" />
        </Link>
        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-1.5 text-sm rounded-full transition-colors text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="ml-2 px-4 py-1.5 text-sm rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </nav>
    </header>
  )
}
