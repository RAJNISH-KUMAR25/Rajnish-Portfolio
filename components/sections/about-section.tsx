"use client"

import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-12">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-1 flex flex-col items-center">
            <Image
              src="/rajnish-profile.png"
              alt="Rajnish Kumar - Backend Developer"
              width={280}
              height={380}
              className="rounded-lg shadow-lg border border-border/50 w-full max-w-xs h-auto"
            />
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                I'm a Computer Science graduate from Presidency University, Bengaluru with a passion for building
                secure, scalable systems. My expertise spans backend development, cloud infrastructure, and enterprise
                networking.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With 1 year of internship experience at IASYNT Global Pvt. Ltd., I've gained hands-on expertise in
                designing robust solutions that prioritize security and performance. The compensation was structured
                through development tools and subscriptions for continuous learning. From implementing AES encryption
                systems to architecting hybrid cloud infrastructures, I approach every project with meticulous attention
                to detail and a commitment to best practices.
              </p>
            </div>

            {/* Key highlights */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="p-4 rounded-lg bg-card/50 border border-border">
                <div className="text-2xl font-bold text-primary mb-1">1 Year</div>
                <div className="text-sm text-muted-foreground">Internship Experience</div>
              </div>
              <div className="p-4 rounded-lg bg-card/50 border border-border">
                <div className="text-2xl font-bold text-primary mb-1">5+ Projects</div>
                <div className="text-sm text-muted-foreground">Completed Works</div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="mailto:rajnish25052003@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-medium"
              >
                Let's Connect
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
              <div className="p-4 rounded-lg border border-border bg-card/50 hover:bg-card/80 transition-colors">
                <h3 className="font-heading font-semibold text-foreground mb-2 text-base">Security & Identity</h3>
                <p className="text-muted-foreground text-sm">
                  AES Encryption, Authentication & Authorization, Role-Based Access Control, Microsoft Entra ID
                </p>
              </div>

              <div className="p-4 rounded-lg border border-border bg-card/50 hover:bg-card/80 transition-colors">
                <h3 className="font-heading font-semibold text-foreground mb-2 text-base">Cloud Platforms</h3>
                <p className="text-muted-foreground text-sm">
                  Oracle Cloud Infrastructure, Microsoft Azure, Cloud Identity & Access Management
                </p>
              </div>

              <div className="p-4 rounded-lg border border-border bg-card/50 hover:bg-card/80 transition-colors">
                <h3 className="font-heading font-semibold text-foreground mb-2 text-base">Backend & Networking</h3>
                <p className="text-muted-foreground text-sm">
                  Java, Python, REST APIs, TCP/IP, VLANs, OSPF, DHCP, DNS, MySQL
                </p>
              </div>

              <div className="p-4 rounded-lg border border-border bg-card/50 hover:bg-card/80 transition-colors">
                <h3 className="font-heading font-semibold text-foreground mb-2 text-base">Tools & DevOps</h3>
                <p className="text-muted-foreground text-sm">
                  Wireshark, VMware, GitHub Actions, Firebase, REST API Development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
