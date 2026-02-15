"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const principles = [
  {
    number: "01",
    title: "Нагласа",
    quote: "Всички хора искат да учат. Потребността от учене е една от основните човешки потребности.",
    quoteAuthor: "Стивън Кови",
    description:
      "Потребността от познание и как да развием правилната мотивация за учене. Разглеждаме защо губим естественото си любопитство и как да го възвърнем, за да превърнем ученето в удоволствие.",
  },
  {
    number: "02",
    title: "Метод",
    quote: "Обучението трябва да бъде този процес, който помага на всеки да намери своята уникалност.",
    quoteAuthor: "Лео Бускалия",
    description:
      "Кога и как да учим най-ефективно. Благоприятните условия за учене, саморегулацията и справянето с прокрастинацията. Историята като отправна точка и обучението чрез разказване.",
  },
  {
    number: "03",
    title: "Форма",
    quote: "Ключът към по-доброто образование е по-доброто преподаване, а ключът към по-доброто преподаване е установяването на това кой може да преподава и кой — не.",
    quoteAuthor: "Джонатан Алтър",
    description:
      "Различните форми на обучение — от взаимно учене до активно и адаптивно обучение. Как да изберем подхода, който работи най-добре за нашите цели и начин на живот.",
  },
  {
    number: "04",
    title: "Запомняне и практика",
    quote: "Голямата трудност в обучението е да извлечеш опит от идеите.",
    quoteAuthor: "Джордж Сантаяна",
    description:
      "Техники за трайно усвояване на знанията — методът на интервално повторение, обяснението на други като начин за учене и методът на \u201Eгуменото пате\u201C. Как да прилагаме знанията на практика.",
  },
  {
    number: "05",
    title: "Проверка",
    quote: "Училището е работилница, в която се формира мисълта на подрастващото поколение, и трябва да го държите много здраво, ако не искате да изпуснете бъдещето от ръцете си.",
    quoteAuthor: "Анри Барбюс",
    description:
      "Формиращо оценяване и тестове, практика \u201Eизвличане\u201C и справяне с блокажи по време на представяне. Как да оценяваме напредъка си ефективно.",
  },
  {
    number: "06",
    title: "Памет",
    quote: "Нищо така не укрепва от старания и нищо така не отслабва от нехайство, както паметта.",
    quoteAuthor: "Квинтилиан",
    description:
      "Как работи мозъкът ни — видовете памет, работната памет и ученето, когнитивното натоварване. Техники и упражнения за запаметяване, които можете да приложите веднага.",
  },
  {
    number: "07",
    title: "Учене през целия живот",
    quote: "Тайната на вечната младост е да се учи всеки ден нещо ново.",
    quoteAuthor: "Солон",
    description:
      "Принципите на андрагогиката и хютагогиката. Как да превърнем ученето в навик и да го практикуваме през целия живот. Ползите от непрекъснатото учене за личностното и професионалното развитие.",
  },
]

export function ContentsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      id="sadarzanie"
      ref={ref}
      className="flex justify-center bg-muted px-4 py-20 lg:py-28"
    >
      <div className="w-full max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center font-[family-name:var(--font-montserrat)] text-3xl font-bold text-secondary sm:text-4xl"
        >
          Седемте части на книгата
        </motion.h2>

        <div className="flex flex-col">
          {principles.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              className={`flex gap-5 py-8 sm:gap-6 ${
                i < principles.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <span className="shrink-0 font-[family-name:var(--font-montserrat)] text-3xl font-bold text-primary/60 sm:text-4xl">
                {p.number}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-bold text-foreground sm:text-xl">
                  {p.title}
                </h3>
                <blockquote className="text-sm italic text-primary/80">
                  {`\u201E${p.quote}\u201C`}
                  <span className="ml-1 not-italic text-muted-foreground">
                    {`\u2014 ${p.quoteAuthor}`}
                  </span>
                </blockquote>
                <p className="leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 text-center text-sm text-muted-foreground"
        >
          Книгата включва библиография с над 50 научни изследвания,
          терминологичен справочник и десетки практически упражнения за всеки
          принцип.
        </motion.p>
      </div>
    </section>
  )
}
