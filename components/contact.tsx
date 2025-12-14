import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mustakim.cse.gub@gmail.com",
      href: "mailto:mustakim.cse.gub@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "01955966123",
      href: "tel:01955966123",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "628/D Adorshonogor, Middle Badda, Badda, Dhaka - 1212",
      href: null,
    },
  ]

  return (
    <section id="contact" className="relative py-24 px-4 bg-muted/30 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-muted-foreground">Feel free to reach out for collaborations or just a friendly chat.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {contactInfo.map((info) => (
            <Card key={info.label} className="hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <info.icon className="h-5 w-5 text-primary" />
                  {info.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors break-words"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-sm text-muted-foreground break-words">{info.value}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
