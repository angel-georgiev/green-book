"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-muted px-4 pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Subtle decorative background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--accent)_0%,_transparent_60%)]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16"
      >
        {/* Book image */}
        <motion.div variants={itemVariants} className="flex shrink-0 justify-center lg:order-2">
          <div className="rounded-2xl bg-white p-6 sm:p-8 md:p-10">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zelenata-kniga-angel-georgiev-isbn-9789547834453-3d-ZTRsTlCvJNHLRGZV6gVwe8JjgKMsxg.webp"
              alt="Зелената книга за ученето - 3D изглед на корицата"
              width={420}
              height={500}
              className="h-auto w-64 sm:w-72 md:w-80 lg:w-[420px]"
            />
          </div>
        </motion.div>

        {/* Text content */}
        <div className="flex flex-col items-center gap-6 text-center lg:order-1 lg:items-start lg:text-left">
          <motion.p
            variants={itemVariants}
            className="text-sm font-semibold tracking-widest uppercase text-primary"
          >
            Ангел Георгиев
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="max-w-xl font-[family-name:var(--font-montserrat)] text-4xl font-bold leading-tight tracking-tight text-secondary sm:text-5xl lg:text-6xl text-balance"
          >
            Зелената книга за ученето
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="max-w-lg text-lg font-medium text-foreground/80 sm:text-xl text-pretty"
          >
            7-те принципа, които ще променят начина ви на учене
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="max-w-lg leading-relaxed text-muted-foreground"
          >
            Научно обоснована система за овладяване на умението да учиш — базирана
            на когнитивна наука, неврология и 20 години практически опит в
            обучението на хиляди професионалисти на три континента.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4 lg:items-start">
            <Button
              asChild
              size="lg"
              className="bg-primary px-8 py-6 text-base font-semibold text-primary-foreground transition-transform duration-200 hover:scale-105 hover:bg-secondary"
            >
              <a
                href="https://buy.stripe.com/dRm8wOagJ9tQfYEcQ61ZS00"
                target="_blank"
                rel="noopener noreferrer"
              >
                Поръчай книгата
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="text-muted-foreground hover:text-primary"
            >
              <a href="#za-knigata">
                <ArrowDown className="mr-2 size-4" />
                Научи повече
              </a>
            </Button>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm italic text-muted-foreground/70"
          >
            Първите 50 поръчки включват подписано копие от автора
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}
