"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "Тази книга само за ученици ли е?",
    a: "Не. Книгата е създадена специално за възрастни обучаващи се със зает живот. Принципите работят за всеки, независимо от възрастта — от студенти до професионалисти и учители.",
  },
  {
    q: "Нужна ли ми е специална подготовка, за да разбера книгата?",
    a: "Не. Книгата обяснява сложни концепции от неврологията и когнитивната наука на прост, достъпен език с практически примери.",
  },
  {
    q: "Откъде мога да закупя книгата?",
    a: "Директно от автора на тази страница или от книжарници в България. При поръчка директно от сайта получавате безплатна доставка.",
  },
  {
    q: "Колко време отнема доставката?",
    a: "Доставката в България обикновено отнема 3-5 работни дни. Книгата се изпраща в рамките на 24 часа след поръчката.",
  },
  {
    q: "Има ли дигитална версия?",
    a: "В момента е налична само физическата книга. Тактилното изживяване на четене е част от процеса на учене.",
  },
  {
    q: "Каква е политиката за връщане?",
    a: "Ако не сте доволни от книгата в рамките на 14 дни след получаване, можете да я върнете за пълно възстановяване на сумата.",
  },
]

export function FaqSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
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
          Често задавани въпроси
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-base font-medium text-foreground">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
