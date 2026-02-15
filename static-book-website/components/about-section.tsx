"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const paragraphs = [
  "В епохата на AI и бързите промени, едно умение остава незаменимо — способността да учиш. Това е мета-умението, което прави всички останали умения по-лесни за усвояване. Докато технологиите се променят всеки ден, умението да се учиш ефективно остава вашето конкурентно предимство.",
  "Всеки ден сме заобиколени от информация, но никой не ни е показвал как да учим. Тази книга запълва този пропуск — тя не е поредният наръчник с общи съвети, а научно обоснован ръководител, базиран на най-новите открития в когнитивната наука, неврологията и психологията на ученето.",
  "Тази книга е за вас, ако сте професионалист, преквалифициращ се в нова област, студент, който търси по-ефективни методи за учене, родител, желаещ да помогне на детето си, или учител, търсещ научно доказани подходи. Ако искате да овладеете умението, което ще ви прави незаменими независимо от промените в бъдещето — тази книга е за вас.",
]

export function AboutSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="za-knigata"
      ref={ref}
      className="flex justify-center bg-background px-4 py-20 lg:py-28"
    >
      <div className="w-full max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center font-[family-name:var(--font-montserrat)] text-3xl font-bold text-secondary sm:text-4xl"
        >
          За какво е тази книга
        </motion.h2>

        <div className="flex flex-col gap-6">
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * (i + 1) }}
              className="text-base leading-relaxed text-foreground/90 sm:text-lg"
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}
