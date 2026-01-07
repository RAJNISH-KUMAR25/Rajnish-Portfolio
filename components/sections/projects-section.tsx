"use client"

import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Secure Bank Management System",
    description:
      "Designed and implemented a secure banking application using AES encryption for sensitive data protection. Built role-based access control mechanisms ensuring data confidentiality and integrity.",
    technologies: ["Java", "MySQL", "AES Encryption", "RBAC"],
    highlights: ["AES encryption for data protection", "Role-based access control", "Research paper published"],
    link: "#",
    github: "#",
  },
  {
    title: "Hybrid Identity Infrastructure",
    description:
      "Configured a comprehensive hybrid identity solution integrating on-premise Active Directory with Microsoft Entra ID. Enabled seamless SSO and validated secure authentication across hybrid environments.",
    technologies: ["Windows Server", "Azure AD", "Active Directory", "DNS/DHCP"],
    highlights: [
      "Active Directory & DNS/DHCP configuration",
      "Azure AD Connect integration",
      "Seamless SSO implementation",
    ],
    link: "#",
    github: "#",
  },
  {
    title: "Enterprise Network Redundancy",
    description:
      "Designed a high-availability enterprise network with router redundancy using HSRP. Implemented VLAN segmentation, OSPF routing, and DHCP relay for controlled network access.",
    technologies: ["OSPF", "VLANs", "HSRP", "DHCP Relay"],
    highlights: ["High-availability network design", "Router redundancy with HSRP", "Failover scenario testing"],
    link: "#",
    github: "#",
  },
  {
    title: "Cloud-Integrated Secure API Service",
    description:
      "Developed RESTful APIs integrated with cloud-based identity and authentication workflows. Reviewed API flows from a security perspective to ensure controlled access and reliability.",
    technologies: ["REST APIs", "Cloud Identity", "Backend Development", "Security Review"],
    highlights: ["RESTful API development", "Cloud identity integration", "Security-first architecture"],
    link: "#",
    github: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A selection of projects showcasing my expertise in secure system design, cloud architecture, and backend
            development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group p-6 lg:p-8 rounded-xl border border-border bg-card/50 hover:bg-card/80 hover:border-primary/50 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                {/* Content */}
                <div className="lg:col-span-2 space-y-4">
                  <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack & Links */}
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 rounded text-xs bg-secondary/50 text-foreground border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3 pt-6">
                    <Link
                      href={project.github}
                      className="p-2 rounded-lg border border-border hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </Link>
                    <Link
                      href={project.link}
                      className="p-2 rounded-lg border border-border hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-colors"
                      aria-label="View Project"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
