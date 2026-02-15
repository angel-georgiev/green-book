import { Linkedin, Mail } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="flex justify-center bg-secondary px-4 py-10 text-secondary-foreground">
      <div className="flex flex-col items-center gap-4 text-center text-sm">
        <p className="font-[family-name:var(--font-montserrat)] font-semibold">
          {"\u00A9 2026 Ангел Георгиев. Всички права запазени."}
        </p>

        <div className="flex items-center gap-4">
          <a
            href="mailto:angel@znam.be"
            className="inline-flex items-center gap-1.5 text-secondary-foreground/80 transition-colors hover:text-secondary-foreground"
          >
            <Mail className="size-4" />
            angel@znam.be
          </a>
          <a
            href="https://www.linkedin.com/in/angeorgiev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn на Ангел Георгиев"
            className="text-secondary-foreground/80 transition-colors hover:text-secondary-foreground"
          >
            <Linkedin className="size-5" />
          </a>
        </div>

        <p className="text-xs text-secondary-foreground/50">
          {"Политика за поверителност | Общи условия"}
        </p>
      </div>
    </footer>
  )
}
