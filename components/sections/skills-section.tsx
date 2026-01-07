"use client"

import { CheckCircle2 } from "lucide-react"

const skillCategories = [
  {
    category: "Security & Identity",
    skills: ["AES Encryption", "Authentication & Authorization", "Role-Based Access Control", "Microsoft Entra ID"],
  },
  {
    category: "Cloud Platforms",
    skills: ["Oracle Cloud Infrastructure", "Microsoft Azure", "Identity & Access Management", "Cloud Services"],
  },
  {
    category: "Networking",
    skills: ["TCP/IP", "VLANs", "OSPF", "DHCP", "DNS", "HSRP"],
  },
  {
    category: "Backend & APIs",
    skills: ["Java", "Python", "REST APIs", "MySQL", "Firebase"],
  },
  {
    category: "Tools & DevOps",
    skills: ["Wireshark", "VMware", "GitHub Actions", "CI/CD", "Git"],
  },
  {
    category: "Professional Skills",
    skills: ["System Architecture", "Secure Design", "Team Collaboration", "Technical Documentation"],
  },
]

export function SkillsSection() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A comprehensive overview of my technical skills spanning security, cloud infrastructure, backend
            development, and enterprise networking.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-border bg-card/50 hover:bg-card/80 hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="font-heading text-lg font-semibold text-foreground mb-4">{item.category}</h3>
              <div className="space-y-3">
                {item.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
