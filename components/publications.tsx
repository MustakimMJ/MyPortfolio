import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText } from "lucide-react"

export function Publications() {
  const publications = [
    {
      title: "Explainable Ensemble Machine Learning Framework for Accurate Detection of Thyroid Disorders",
      type: "Research Publication",
      description:
        "A comprehensive study on detecting thyroid disorders using ensemble machine learning techniques with explainability features.",
    },
  ]

  return (
    <section id="publications" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Publications</h2>
          <p className="text-muted-foreground">Research contributions and academic publications.</p>
        </div>

        <div className="grid gap-6">
          {publications.map((pub, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 mt-1 text-primary" />
                  <div className="space-y-2">
                    <CardTitle className="text-xl text-balance">{pub.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{pub.type}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{pub.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
