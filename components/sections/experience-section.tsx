"use client"

import { Calendar, Building2, Trophy } from "lucide-react"

const experience = [
  {
    company: "IASYNT Global Pvt. Ltd.",
    position: "Java Developer Intern",
    location: "Bengaluru",
    duration: "Jan 2024 – Jan 2025",
    description: [
      "Completed 1 year of internship focused on Java backend development with compensation provided through development tools and subscriptions for continuous learning.",
      "Developed and maintained Java-based backend modules supporting secure web applications.",
      "Worked with REST APIs and Firebase for data storage, validation, and access control workflows.",
      "Assisted in reviewing application logic for security, performance, and data accuracy.",
      "Collaborated with cross-functional teams to debug, test, and deploy backend services.",
      "Documented technical workflows and supported coordination between development and testing teams.",
    ],
  },
]

const education = [
  {
    school: "Presidency University",
    degree: "B.Tech in Computer Science Engineering",
    duration: "2021–2025",
    location: "Bengaluru",
    cgpa: "7.51/10",
  },
]

const certifications = [
  "Oracle Cloud Infrastructure (OCI) 2025 Certified",
  "CCNA Fundamentals — Simplilearn",
  "Cisco Networking Academy — Networking & Packet Tracer",
  "Google Cloud — Cloud Computing, Security, Generative AI",
]

const achievements = [
  "Published two research papers in IJRASET focusing on secure system design and encryption",
  "Hackathon finalist for AI and cloud-based solutions",
  "Actively organized and volunteered in technical and academic events",
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Experience */}
        <div className="mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-12">Professional Experience</h2>

          {experience.map((exp, idx) => (
            <div key={idx} className="mb-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-1">{exp.position}</h3>
                  <div className="flex flex-col sm:flex-row sm:gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 ml-0">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-20">
          {/* Education */}
          <div className="mb-20">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8">Education</h2>

            {education.map((edu, idx) => (
              <div key={idx} className="p-6 rounded-lg border border-border bg-card/50">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{edu.degree}</h3>
                <p className="text-muted-foreground mb-3">{edu.school}</p>
                <div className="flex flex-col sm:flex-row sm:gap-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.duration}</span>
                  </div>
                  <div>CGPA: {edu.cgpa}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-20">
          {/* Certifications */}
          <div className="mb-20">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8">Certifications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="p-4 rounded-lg border border-border bg-card/50 flex items-center gap-3">
                  <Trophy className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-20">
          {/* Achievements */}
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-8">Achievements & Publications</h2>

            <div className="space-y-4">
              {achievements.map((achievement, idx) => (
                <div key={idx} className="p-4 rounded-lg border border-border bg-card/50 flex items-start gap-3">
                  <Trophy className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
