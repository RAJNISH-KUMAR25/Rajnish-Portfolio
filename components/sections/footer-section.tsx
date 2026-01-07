import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

const footerLinks = {
  navigation: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
}

export function FooterSection() {
  return (
    <footer className="px-6 py-16 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="font-display text-xl font-semibold text-foreground">
              Rajnish Kumar
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Backend developer specializing in secure systems, cloud infrastructure, and enterprise networking.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border hover:bg-card hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border hover:bg-card hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:rajnish25052003@gmail.com"
                className="p-2 rounded-lg border border-border hover:bg-card hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rajnish Kumar. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
