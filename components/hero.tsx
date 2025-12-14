import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden">
      {/* Green gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            {/* Added green text accent to name */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                MD. Mustakim Hossain
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">Computer Science & Engineering Student</p>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Final-year BSc student passionate about designing efficient and scalable solutions with hands-on experience
            in machine learning, data analysis, and software development.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Dhaka, Bangladesh</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:mustakim.cse.gub@gmail.com" className="hover:text-foreground transition-colors">
                mustakim.cse.gub@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>01955966123</span>
            </div>
          </div>

          <div className="flex gap-4">
            <Button asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
