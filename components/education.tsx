import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "BSc in Computer Science and Engineering",
      institution: "Green University of Bangladesh",
      year: "2022 - Running",
      cgpa: "3.60",
    },
    {
      degree: "HSC (Higher Secondary Certificate)",
      institution: "Government Science College",
      year: "2018 - 2020",
      cgpa: "5.00",
    },
    {
      degree: "SSC (Secondary School Certificate)",
      institution: "Badda Alatunnessa High School",
      year: "2013 - 2018",
      cgpa: "5.00",
    },
  ]

  const courses = [
    "Machine Learning A - Z Master Class [UDEMY]",
    "Learn to Code in Python and How to Use NumPy, Pandas, Matplotlib and Seaborn by Real Time Machine Learning Project [UDEMY]",
  ]

  return (
    <section id="education" className="relative py-24 px-4 bg-muted/30 overflow-hidden">
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-muted-foreground">My academic background and professional certifications.</p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Academic Qualifications
            </h3>
            <div className="grid gap-4">
              {education.map((edu, index) => (
                <Card key={index} className="hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1 text-sm">
                      <p className="text-muted-foreground">{edu.institution}</p>
                      <p className="text-muted-foreground">{edu.year}</p>
                      <p className="font-semibold text-primary">CGPA: {edu.cgpa}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Professional Courses</h3>
            <Card className="hover:border-primary/50 transition-all duration-300">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {courses.map((course, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span className="text-sm text-muted-foreground">{course}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
