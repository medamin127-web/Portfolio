import { motion } from 'framer-motion'

interface Speciality {
  title: string
  description: string
  stack: string[]
}

const SPECIALITIES: Speciality[] = [
  {
    title: 'Web Development',
    description:
      'Full-stack applications, SaaS platforms, APIs and interactive websites — built to be fast, honest and easy to maintain.',
    stack: ['React', 'TypeScript', 'Flask'],
  },
  {
    title: 'Data & Automation',
    description:
      'Web scraping, data analysis and small pipelines that turn messy public data into something readable.',
    stack: ['Python', 'Pandas', 'Scrapy'],
  },
  {
    title: 'Mobile',
    description:
      'Cross-platform apps built with Flutter, usually born from a problem I ran into personally.',
    stack: ['Flutter', 'Dart'],
  },
  {
    title: 'Games',
    description:
      '2D games and interactive experiences — where engineering meets storytelling.',
    stack: ['Python', 'Pygame'],
  },
  {
    title: 'Experiments',
    description:
      'Creative coding and odd little programs built purely to see if an idea works.',
    stack: ['Curiosity'],
  },
]

function SpecialityRow({
  title,
  description,
  stack,
  index,
}: Speciality & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: 'easeOut' }}
      className="group relative border-t border-line last:border-b"
    >
      {/* Hover wash */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-purple/[0.07] via-purple/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Left accent bar — grows from top on hover */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-px origin-top scale-y-0 bg-purple transition-transform duration-500 ease-out group-hover:scale-y-100" />

      <div className="relative grid grid-cols-1 gap-4 py-10 pr-4 transition-[padding] duration-500 md:grid-cols-[56px_1fr_1.1fr_auto] md:items-start md:gap-10 md:pl-6 md:group-hover:pl-8">
        {/* Index */}
        <span className="font-mono text-[11px] tracking-[0.2em] text-text-2 transition-colors duration-300 group-hover:text-purple">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Title + stack tags */}
        <div>
          <h3 className="font-serif text-[26px] leading-[1.05] tracking-[-0.02em] text-text-0 transition-colors duration-300 group-hover:text-purple md:text-[34px]">
            {title}
          </h3>

          <div className="mt-4 flex flex-wrap gap-2">
            {stack.map((s) => (
              <span
                key={s}
                className="border border-line px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-text-2 transition-colors duration-300 group-hover:border-purple/30 group-hover:text-text-1"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="max-w-[440px] text-[14.5px] leading-[1.8] text-text-1">
          {description}
        </p>

        {/* Arrow — slides in on hover */}
        <span className="hidden self-center font-mono text-lg text-text-2 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-purple md:block">
          →
        </span>
      </div>
    </motion.div>
  )
}

export default function Specialities() {
  return (
    <section id="specialities" className="relative py-32 md:py-[150px]">
      {/* Soft ambient glow, matches hero language */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle 700px at 25% 30%, rgba(110,65,220,0.07), transparent 65%)',
        }}
      />

      <div className="relative mx-auto max-w-[1240px] px-6 md:px-12">
        {/* =====================================================
            HEADER — mirrors the hero's headline treatment
        ====================================================== */}

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-end md:gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-text-2"
            >
              <span className="h-px w-8 bg-purple" />
              <span>02 — Capabilities</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="font-serif text-[40px] leading-[1] tracking-[-0.03em] text-balance md:text-[64px] lg:text-[72px]"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40, "WONK" 1' }}
            >
              What I work
              <br />
              <span className="italic text-purple">with.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-[340px] text-[14.5px] leading-[1.8] text-text-1 md:justify-self-end"
          >
            Full stack is home base. Everything else is what happens when
            curiosity takes over on a weekend.
          </motion.p>
        </div>

        {/* =====================================================
            LIST
        ====================================================== */}

        <div className="border-b border-line/0">
          {SPECIALITIES.map((item, i) => (
            <SpecialityRow key={item.title} index={i} {...item} />
          ))}
        </div>

        {/* Bottom marker — closes the section like a code block */}
        <div className="mt-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-text-2">
          <span>05 disciplines</span>
          <span className="text-purple">02 / 09</span>
        </div>
      </div>
    </section>
  )
}