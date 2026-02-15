"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { BookOpen, Truck, Pen, Clock } from "lucide-react"

const details = [
  { icon: BookOpen, text: "Физическа книга, 300+ страници" },
  { icon: Truck, text: "Безплатна доставка в България" },
  { icon: Pen, text: "Първите 50 поръчки включват подписано копие" },
  { icon: Clock, text: "Изпраща се в рамките на 24 часа" },

]

export function OrderSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      id="poruchai"
      ref={ref}
      className="flex justify-center bg-accent px-4 py-20 lg:py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex w-full max-w-4xl flex-col items-center gap-10 md:flex-row md:items-center md:gap-12"
      >
        {/* Book cover image */}
        <div className="shrink-0">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zelenata-kniga-za-ucheneto-30-8DdzRJeIvE46CSjgeaC3BzqMYPOja5.jpg"
            alt="Зелената книга за ученето корица"
            width={280}
            height={380}
            className="h-auto w-48 rounded-lg shadow-xl sm:w-56 md:w-64"
          />
        </div>

        {/* Order details */}
        <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-secondary sm:text-4xl">
            Поръчай книгата
          </h2>

          <p className="font-[family-name:var(--font-montserrat)] text-4xl font-bold text-primary">
            {"16.87 \u20AC"}
          </p>

          <ul className="flex flex-col gap-3">
            {details.map((d, i) => (
              <li key={i} className="flex items-center gap-3 text-foreground/90">
                <d.icon className="size-5 shrink-0 text-primary" />
                <span className="text-sm">{d.text}</span>
              </li>
            ))}
          </ul>

          <Button
            asChild
            size="lg"
            className="bg-primary px-10 py-6 text-lg font-semibold text-primary-foreground transition-transform duration-200 hover:scale-105 hover:bg-secondary"
          >
            <a
              href="https://buy.stripe.com/dRm8wOagJ9tQfYEcQ61ZS00"
              target="_blank"
              rel="noopener noreferrer"
            >
              Поръчай книгата
            </a>
          </Button>

          <p className="text-xs text-muted-foreground">
            Сигурно плащане чрез Stripe
          </p>
        </div>
      </motion.div>
    </section>
  )
}
