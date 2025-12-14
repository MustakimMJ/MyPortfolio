"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  url: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Blogging Website",
    description: "A full-featured blogging platform for content creation and management.",
    url: "https://your-blogging-website.com",
  },
  {
    id: 2,
    title: "Ride Sharing App Using Bash Scripting",
    description: "A command-line ride-sharing application built with Bash scripting.",
    url: "https://github.com/yourusername/ride-sharing-bash",
  },
  {
    id: 3,
    title: "Internet Banking System Using Java",
    description: "A secure internet banking system implementing core banking functionalities.",
    url: "https://github.com/yourusername/banking-system",
  },
  {
    id: 4,
    title: "University Networking System Using Cisco",
    description: "Designed and implemented a comprehensive university network infrastructure.",
    url: "https://github.com/yourusername/university-network",
  },
  {
    id: 5,
    title: "Medical AI Chatbot",
    description: "An intelligent chatbot providing medical information and assistance.",
    url: "https://your-medical-chatbot.com",
  },
  {
    id: 6,
    title: "Brain Tumor Detection and Classification Using ML",
    description: "Machine learning model for detecting and classifying brain tumors from medical images.",
    url: "https://github.com/yourusername/brain-tumor-detection",
  },
]

export function Projects() {
  return (
    <section id="projects" className="relative py-24 px-4 bg-muted/30 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-muted-foreground">
            A collection of my academic and personal projects showcasing my technical skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="group">
                  <CardTitle className="text-xl flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                    {project.title}
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                </a>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
