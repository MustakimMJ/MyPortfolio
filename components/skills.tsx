import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Java", "Python"],
    },
    {
      title: "Databases",
      skills: ["MySQL"],
    },
    {
      title: "Concepts",
      skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "Software Development Life Cycle (SDLC)"],
    },
    {
      title: "Soft Skills",
      skills: ["Teamwork", "Adaptability", "Time Management", "Problem-Solving"],
    },
    {
      title: "Languages",
      skills: ["English", "Bangla"],
    },
  ]

  return (
    <section id="skills" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Skills
          </h2>
          <p className="text-muted-foreground">Technical and soft skills acquired through academic and project work.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm hover:bg-primary/20 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
