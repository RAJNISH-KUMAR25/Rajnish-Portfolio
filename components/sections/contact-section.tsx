"use client"

import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Let's Connect</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out through any of
            these channels.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Email */}
          <Link
            href="mailto:rajnish25052003@gmail.com"
            className="p-6 rounded-xl border border-border bg-card/50 hover:bg-card/80 hover:border-primary/50 transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Email</h3>
                <p className="text-muted-foreground text-sm">rajnish25052003@gmail.com</p>
              </div>
            </div>
          </Link>

          {/* Phone */}
          <Link
            href="tel:+916202963255"
            className="p-6 rounded-xl border border-border bg-card/50 hover:bg-card/80 hover:border-primary/50 transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Phone</h3>
                <p className="text-muted-foreground text-sm">+91-6202963255</p>
              </div>
            </div>
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-xl border border-border bg-card/50 hover:bg-card/80 hover:border-primary/50 transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">LinkedIn</h3>
                <p className="text-muted-foreground text-sm">Connect on LinkedIn</p>
              </div>
            </div>
          </Link>

          {/* GitHub */}
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-xl border border-border bg-card/50 hover:bg-card/80 hover:border-primary/50 transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Github className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">GitHub</h3>
                <p className="text-muted-foreground text-sm">View my repositories</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Direct Message CTA */}
        <div className="p-8 rounded-xl border border-primary/30 bg-primary/5 text-center">
          <h3 className="font-heading text-xl font-bold text-foreground mb-3">Preferred Contact Method</h3>
          <p className="text-muted-foreground mb-6">
            For the quickest response, please reach out via email or phone. I'm typically available during business
            hours.
          </p>
          <Link
            href="mailto:rajnish25052003@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Send an Email
            <Mail className="w-4 h-4" />
          </Link>
        </div>

        {/* Location */}
        <div className="mt-12 p-6 rounded-lg border border-border bg-card/50 flex items-center gap-4">
          <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
          <div>
            <p className="font-heading font-semibold text-foreground">Location</p>
            <p className="text-muted-foreground text-sm">Bengaluru, India</p>
          </div>
        </div>
      </div>
    </section>
  )
}
