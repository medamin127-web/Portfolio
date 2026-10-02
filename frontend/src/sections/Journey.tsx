import { motion } from 'framer-motion'

type EntryType = 'work' | 'study'

interface JourneyEntry {
  year: string
  period: string
  type: EntryType
  title: string
  org: string
  location: string
  description: string
  tags?: string[]
  current?: boolean
}

const JOURNEY: JourneyEntry[] = [
  {
    year: '2025',
    period: 'Jul 2025 — Present',
    type: 'work',
    title: 'Full Stack Developer',
    org: 'IBACONSEIL',
    location: 'Sousse · Hybrid',
    description:
      'Shipping features on a real product with a real team. Learning what "done" actually means outside of school.',
    tags: ['React', 'TypeScript', 'Flask'],
    current: true,
  },
  {
    year: '2025',
    period: 'Feb 2025 — Jun 2025',
    type: 'work',
    title: 'Full Stack Developer Intern',
    org: 'IBACONSEIL',
    location: 'Sousse · On-site',
    description:
      'Five months that turned into a full-time offer. Built internal tools and got my first taste of production code.',
    tags: ['React', 'Node', 'PostgreSQL'],
  },
  {
    year: '2024',
    period: 'Jun 2024 — Aug 2024',
    type: 'work',
    title: 'Full Stack Developer Intern',
    org: 'ENVAST',
    location: 'On-site',
    description:
      'Summer internship building end-to-end features — from database schemas to the UI that talks to them.',
    tags: ['Web', 'APIs'],
  },
  {
    year: '2023',
    period: 'Jun 2023 — Aug 2023',
    type: 'work',
    title: 'Web Development Intern',
    org: 'dmcom company',
    location: 'Sousse · On-site',
    description:
      'First real exposure to a professional codebase. Learned how much of the job is reading, not writing.',
    tags: ['JavaScript', 'PHP'],
  },
  {
    year: '2022',
    period: 'Sep 2022 — Jun 2025',
    type: 'study',
    title: "Diplôme d'Ingénieur — Génie Logiciel",
    org: 'École Polytechnique de Sousse',
    location: 'Sousse, Tunisia',
    description:
      'Three years going deep into architecture, larger systems, and the projects that became my first real portfolio pieces.',
    tags: ['Engineering', 'Bac+6'],
  },
  {
    year: '2021',
    period: 'Mar 2021 — Oct 2021',
    type: 'work',
    title: 'Stagiaire Développeur Full Stack',
    org: 'GoStaff',
    location: 'Monastir · On-site',
    description:
      'Eight months — my longest internship before IBACONSEIL. Where full-stack stopped being an abstract term.',
    tags: ['Full Stack'],
  },
  {
    year: '2020',
    period: 'Jan 2020 — Mar 2020',
    type: 'work',
    title: 'Stage Développement Web',
    org: 'Ste Expert Computer Tunisia',
    location: 'Monastir · On-site',
    description:
      'My very first internship. Three months that convinced me this was the thing I wanted to keep doing.',
    tags: ['Web'],
  },
  {
    year: '2018',
    period: 'Sep 2018 — Jun 2021',
    type: 'study',
    title: "Licence — Technologies de l'Information",
    org: 'ISET Sousse',
    location: 'Sousse, Tunisia',
    description:
      'Three years building the base: programming logic, systems, databases — the stuff everything else stands on.',
    tags: ['Fundamentals'],
  },
]

/* ============================================================
   NODE — the dot sitting on the spine
   ============================================================ */

function Node({
  type,
  current,
}: {
  type: EntryType
  current?: boolean
}) {
  const isWork = type === 'work'

  return (
    <span className="relative flex h-[14px] w-[14px] items-center justify-center">
      {current && (
        <span className="absolute inset-0 animate-ping rounded-full bg-purple opacity-50" />
      )}
      <span
        className={`relative h-[14px] w-[14px] rounded-full transition-all duration-300 ${
          isWork
            ? 'bg-purple shadow-[0_0_12px_rgba(157,124,255,0.6)]'
            : 'border-2 border-text-2 bg-bg-0'
        }`}
      />
    </span>
  )
}

/* ============================================================
   CARD — the content block on either side of the spine
   ============================================================ */

function Card({
  entry,
  side,
}: {
  entry: JourneyEntry
  side: 'left' | 'right'
}) {
  const isWork = entry.type === 'work'
  const alignEnd = side === 'left'

  return (
    <div className="group max-w-[440px]">
      {/* Year + Now badge */}
      <div
        className={`mb-3 flex flex-wrap items-center gap-x-3 gap-y-2 ${
          alignEnd ? 'md:justify-end' : ''
        }`}
      >
        <span
          className={`font-serif text-[26px] leading-none tracking-[-0.02em] transition-colors duration-300 md:text-[30px] ${
            entry.current
              ? 'text-purple'
              : 'text-text-0 group-hover:text-purple'
          }`}
        >
          {entry.year}
        </span>

        {entry.current && (
          <span className="inline-flex items-center gap-1.5 border border-purple/40 bg-purple/[0.06] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-purple">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-purple" />
            </span>
            Now
          </span>
        )}
      </div>

      {/* Type badge + period */}
      <div
        className={`mb-4 flex flex-wrap items-center gap-2.5 ${
          alignEnd ? 'md:justify-end' : ''
        }`}
      >
        <span
          className={`inline-flex items-center border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] ${
            isWork
              ? 'border-purple/30 bg-purple/10 text-purple'
              : 'border-line bg-transparent text-text-2'
          }`}
        >
          {isWork ? 'Work' : 'Study'}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-2">
          {entry.period}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-serif text-[19px] leading-[1.2] tracking-[-0.015em] text-text-0 transition-colors duration-300 group-hover:text-purple md:text-[22px]">
        {entry.title}
      </h3>

      {/* Org */}
      <div className="mt-2 text-[13.5px] text-text-1">{entry.org}</div>

      {/* Location */}
      <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-text-2">
        {entry.location}
      </div>

      {/* Description */}
      <p className="mt-3.5 text-[13.5px] leading-[1.75] text-text-2">
        {entry.description}
      </p>

      {/* Tags */}
      {entry.tags && entry.tags.length > 0 && (
        <div
          className={`mt-4 flex flex-wrap gap-1.5 ${
            alignEnd ? 'md:justify-end' : ''
          }`}
        >
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="border border-line px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-text-2 transition-colors duration-300 group-hover:border-purple/30 group-hover:text-text-1"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

/* ============================================================
   ROW — one entry, positioned on the left or right of the spine
   ============================================================ */

function TimelineRow({
  entry,
  index,
  side,
  isLast,
}: {
  entry: JourneyEntry
  index: number
  side: 'left' | 'right'
  isLast: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: 'easeOut' }}
      className={`relative grid grid-cols-[32px_1fr] gap-x-5 md:grid-cols-[1fr_72px_1fr] md:gap-x-0 ${
        isLast ? 'pb-0' : 'pb-14 md:pb-16'
      }`}
    >
      {/* ---------------------------------------------
          NODE COLUMN — left on mobile, center on desktop
      --------------------------------------------- */}

      <div className="col-start-1 md:col-start-2 flex justify-center">
        <div className="flex h-[30px] items-center md:mt-1">
          <Node type={entry.type} current={entry.current} />
        </div>
      </div>

      {/* ---------------------------------------------
          CARD COLUMN — right on mobile, side-dependent on desktop
      --------------------------------------------- */}

      <div
        className={
          side === 'left'
            ? 'col-start-2 pt-0.5 md:col-start-1 md:flex md:justify-end md:pr-8 md:pt-0.5 md:text-left'
            : 'col-start-2 pt-0.5 md:col-start-3 md:pl-8 md:pt-0.5'
        }
      >
        <Card entry={entry} side={side} />
      </div>
    </motion.div>
  )
}

/* ============================================================
   SECTION
   ============================================================ */

export default function Journey() {
  return (
    <section id="journey" className="relative py-32 md:py-[150px]">
      {/* Ambient glow — matches hero language */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle 700px at 78% 40%, rgba(110,65,220,0.07), transparent 65%)',
        }}
      />

      <div className="relative mx-auto max-w-[1240px] px-6 md:px-12">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-end md:gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-text-2"
            >
              <span className="h-px w-8 bg-purple" />
              <span>03 — Journey</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="font-serif text-[40px] leading-[1] tracking-[-0.03em] text-balance md:text-[64px] lg:text-[72px]"
              style={{
                fontVariationSettings: '"opsz" 144, "SOFT" 40, "WONK" 1',
              }}
            >
              The path
              <br />
              <span className="italic text-purple">so far.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:max-w-[340px] md:justify-self-end"
          >
            <p className="text-[14.5px] leading-[1.8] text-text-1">
              School and work, woven onto one line — most internships ran
              during my studies. Told newest first.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.16em] text-text-2">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple shadow-[0_0_8px_rgba(157,124,255,0.6)]" />
                Work
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full border border-text-2" />
                Study
              </span>
              <span className="h-1 w-1 rounded-full bg-line" />
              <span>2018 → Now</span>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            TIMELINE — single spine, branching left / right
        ====================================================== */}

        <div className="relative">
          {/* Desktop spine — center */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 md:block"
            style={{
              background:
                'linear-gradient(to bottom, rgba(157,124,255,0.55) 0%, rgba(35,35,41,1) 12%, rgba(35,35,41,1) 92%, rgba(35,35,41,0.15) 100%)',
            }}
          />

          {/* Mobile spine — left */}
          <div
            className="pointer-events-none absolute left-4 top-0 bottom-0 w-px md:hidden"
            style={{
              background:
                'linear-gradient(to bottom, rgba(157,124,255,0.55) 0%, rgba(35,35,41,1) 12%, rgba(35,35,41,1) 92%, rgba(35,35,41,0.15) 100%)',
            }}
          />

          {JOURNEY.map((entry, i) => (
            <TimelineRow
              key={`${entry.title}-${entry.period}`}
              entry={entry}
              index={i}
              side={i % 2 === 0 ? 'right' : 'left'}
              isLast={i === JOURNEY.length - 1}
            />
          ))}
        </div>

        {/* =====================================================
            BOTTOM MARKER
        ====================================================== */}

        <div className="mt-20 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-text-2">
          <span>End of log</span>
          <span className="text-purple">03 / 09</span>
        </div>
      </div>
    </section>
  )
}