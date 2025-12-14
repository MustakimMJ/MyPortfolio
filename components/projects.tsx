"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ExternalLink, Edit, Save, X } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  url: string
}

const initialProjects: Project[] = [
  {
    id: 1,
    title: "Blogging Website",
    description: "A full-featured blogging platform for content creation and management.",
    url: "",
  },
  {
    id: 2,
    title: "Ride Sharing App Using Bash Scripting",
    description: "A command-line ride-sharing application built with Bash scripting.",
    url: "",
  },
  {
    id: 3,
    title: "Internet Banking System Using Java",
    description: "A secure internet banking system implementing core banking functionalities.",
    url: "",
  },
  {
    id: 4,
    title: "University Networking System Using Cisco",
    description: "Designed and implemented a comprehensive university network infrastructure.",
    url: "",
  },
  {
    id: 5,
    title: "Medical AI Chatbot",
    description: "An intelligent chatbot providing medical information and assistance.",
    url: "",
  },
  {
    id: 6,
    title: "Brain Tumor Detection and Classification Using ML",
    description: "Machine learning model for detecting and classifying brain tumors from medical images.",
    url: "",
  },
]

export function Projects() {
  const [projects, setProjects] = useState<Project[]>(initialProjects)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editUrl, setEditUrl] = useState("")

  const handleEdit = (project: Project) => {
    setEditingId(project.id)
    setEditUrl(project.url)
  }

  const handleSave = (id: number) => {
    setProjects(projects.map((p) => (p.id === id ? { ...p, url: editUrl } : p)))
    setEditingId(null)
    setEditUrl("")
  }

  const handleCancel = () => {
    setEditingId(null)
    setEditUrl("")
  }

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
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                {editingId === project.id ? (
                  <div className="space-y-2">
                    <Input
                      placeholder="Enter project URL"
                      value={editUrl}
                      onChange={(e) => setEditUrl(e.target.value)}
                      className="text-sm"
                    />
                    <div className="flex gap-2">
                      <Button size="sm" onClick={() => handleSave(project.id)} className="flex-1">
                        <Save className="h-3 w-3 mr-1" />
                        Save
                      </Button>
                      <Button size="sm" variant="outline" onClick={handleCancel}>
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ) : project.url ? (
                  <div className="flex gap-2">
                    <Button asChild size="sm" className="flex-1">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1"
                      >
                        <ExternalLink className="h-3 w-3" />
                        View Project
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => handleEdit(project)}>
                      <Edit className="h-3 w-3" />
                    </Button>
                  </div>
                ) : (
                  <Button size="sm" variant="outline" onClick={() => handleEdit(project)} className="w-full">
                    <Edit className="h-3 w-3 mr-1" />
                    Add URL
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
