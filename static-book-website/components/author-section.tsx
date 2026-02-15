"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Linkedin } from "lucide-react"

const credentials = [
  "20 години опит в обученията на 3 континента",
  "\u201EЗнам.бе\u201C и Приложна академия \u201EСиндео\u201C",
  "Sales & Training Portfolio Product Manager, ITCE",
  "ITIL Foundation\u00AE и AI+ Executive сертификати",
]

export function AuthorSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="avtor"
      ref={ref}
      className="flex justify-center bg-background px-4 py-20 lg:py-28"
    >
      <div className="grid w-full max-w-5xl items-center gap-12 md:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Acho%20Sindeo-xAeqWWZ4FAwW8ETDsKnncWcvchnlE8.jpg"
            alt="Ангел Георгиев"
            width={400}
            height={500}
            className="h-auto w-full max-w-sm rounded-xl object-cover shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col gap-6"
        >
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-secondary sm:text-4xl">
            За автора
          </h2>

          <p className="leading-relaxed text-foreground/90">
            Ангел Георгиев е образователен иноватор с близо 20 години опит като
            треньор и продуктов презентатор. Провеждал е стотици обучения в
            Европа, САЩ и Близкия изток, работейки с над 20 000 професионалисти
            — от корпоративни екипи до учители и индивидуални предприемачи. През
            последните 10 години е неразделна част от българското образование в
            областта на софтуерното инженерство, информационните технологии и
            изкуствения интелект.
          </p>

          <p className="leading-relaxed text-foreground/90">
            {"Основател е на \u201EЗнам.бе\u201C и Приложната академия за образование \u201EСиндео\u201C, а в момента е Sales & Training Portfolio Product Manager в ITCE, където разработва сертификационни програми за AI и enterprise технологии. Обучил е хиляди учители в България и е гост-преподавател в десетки училища."}
          </p>

          <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
            {credentials.map((c, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {c}
              </li>
            ))}
          </ul>

          <a
            href="https://www.linkedin.com/in/angeorgiev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-secondary"
          >
            <Linkedin className="size-4" />
            {"Свържете се в LinkedIn"}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
