import { motion } from 'framer-motion'

interface Language {
  name: string
  level: string
}

const LANGUAGES: Language[] = [
  { name: 'Arabic', level: 'Native' },
  { name: 'French', level: 'Advanced' },
  { name: 'English', level: 'Professional' },
]

export default function Languages() {
  return (
    <section id="languages" className="py-32 md:py-[150px]">
      <div className="mx-auto max-w-[1240px] px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 font-serif text-[32px] md:text-[44px]"
        >
          Languages
        </motion.h2>

        <div className="flex flex-wrap gap-16">
          {LANGUAGES.map((lang) => (
            <div key={lang.name}>
              <div className="mb-1.5 font-serif text-[22px]">{lang.name}</div>
              <div className="font-mono text-[13px] text-text-1">
                {lang.level}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}