"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Кое е най-трудното? Да промениш поведението на някого. А важното е да е в желана от него посока. Ангел като човек и книгата му като носител са правилният избор, ако промяната, която търсите, е как да научавате ефективно и ефикасно. И да преподавате, ако като Ангел имате и това призвание.",
    name: "Георги Малчев",
    role: "управител на дигитална агенция, университетски преподавател и съавтор на книгата",
    linkText: "Бъди за пример като успешен родител",
    linkHref:
      "https://locus-publishing.com/product/%d0%b1%d1%8a%d0%b4%d0%b8-%d0%b7%d0%b0-%d0%bf%d1%80%d0%b8%d0%bc%d0%b5%d1%80-%d0%ba%d0%b0%d1%82%d0%be-%d1%83%d1%81%d0%bf%d0%b5%d1%88%d0%b5%d0%bd-%d1%80%d0%be%d0%b4%d0%b8%d1%82%d0%b5%d0%bb/",
  },
  {
    quote:
      "Технологиите променят правилата всеки ден и само едно остава непоклатимо: нуждата да учим. Тази книга е едновременно компас и комплект инструменти \u2013 идеи, упражнения, примери, с които да потеглим по пътя на познанието. Време е да се научим да учим!",
    name: "Георги Караманев",
    role: "",
    linkText: "karamanev.me",
    linkHref: "https://www.karamanev.me",
  },
  {
    quote:
      "Книгата на Ангел е необикновена. Тя е книга за атлети, защото мозъкът е най-големият ни \u201Eмускул\u201C. Той се нуждае от грижи и тренировки, за да бъде в добра кондиция. Тогава ще бъдем готови не за учебен спринт, а за цял маратон. \u201EЗелената книга за ученето\u201C е задължително четиво за всеки преподавател, но и за всеки човек, който цени силата на ученето в дигиталната епоха.",
    name: "Етиен Янев",
    role: "трейнър по AI, дигитален маркетинг и личен брандинг, автор на книгата",
    linkText: "Компас за дигитален маркетинг",
    linkHref:
      "https://locus-publishing.com/product/%d0%ba%d0%be%d0%bc%d0%bf%d0%b0%d1%81-%d0%b7%d0%b0-%d0%b4%d0%b8%d0%b3%d0%b8%d1%82%d0%b0%d0%bb%d0%b5%d0%bd-%d0%bc%d0%b0%d1%80%d0%ba%d0%b5%d1%82%d0%b8%d0%bd%d0%b3/",
  },
]

export function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      ref={ref}
      className="flex justify-center bg-muted px-4 py-20 lg:py-28"
    >
      <div className="w-full max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center font-[family-name:var(--font-montserrat)] text-3xl font-bold text-secondary sm:text-4xl"
        >
          Отзиви
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * (i + 1) }}
            >
              <Card className="h-full border-border/50 bg-card shadow-sm">
                <CardContent className="flex h-full flex-col gap-4 pt-6">
                  <Quote className="size-6 shrink-0 text-primary/30" />
                  <blockquote className="flex-1 text-sm leading-relaxed text-foreground/90 italic">
                    {t.quote}
                  </blockquote>
                  <footer className="border-t border-border/50 pt-4 text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      {t.name}
                    </span>
                    {t.role && `, ${t.role} `}
                    {t.linkText && (
                      <>
                        {" "}
                        <a
                          href={t.linkHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary underline underline-offset-2 hover:text-secondary"
                        >
                          {t.linkText}
                        </a>
                      </>
                    )}
                  </footer>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
