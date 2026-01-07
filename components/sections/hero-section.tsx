"use client"

import Link from "next/link"
import { LiquidCtaButton } from "@/components/buttons/liquid-cta-button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="flex flex-col gap-8">
          {/* Main heading with role */}
          <div className="text-center">
            <h1 className="font-display text-6xl md:text-7xl font-bold tracking-tight mb-4">
              <span className="text-foreground block">Rajnish Kumar</span>
              <span className="bg-gradient-to-r from-primary via-primary/70 to-primary bg-clip-text text-transparent">
                Software Engineer  & Java Full-Stack
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed text-balance">
              I build secure, scalable systems with expertise in cloud infrastructure, enterprise networking, and
              backend development. Computer Science graduate specializing in secure design and cloud integration.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
              <Link href="#contact" className="no-underline">
                <LiquidCtaButton>Get in Touch</LiquidCtaButton>
              </Link>
              <Link
                href="#projects"
                className="group flex items-center gap-2 px-8 py-3 rounded-lg border border-border bg-card hover:bg-card/80 transition-colors font-medium"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="#about"
                className="group flex items-center gap-2 px-8 py-3 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-medium"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 pt-8 border-t border-border">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border hover:bg-card hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border hover:bg-card hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:rajnish25052003@gmail.com"
              className="p-3 rounded-lg border border-border hover:bg-card hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
