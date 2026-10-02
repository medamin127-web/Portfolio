import { motion } from 'framer-motion'

interface Project {
  index: string
  title: string
  description: string
  techTags: string[]
  liveFlag: string
  glyph: string
  reverse?: boolean
}

const PROJECTS: Project[] = [
  {
    index: '01',
    title: 'Industrial Robot Reservation Platform',
    description:
      'A SaaS platform that lets companies manage and reserve industrial robots — scheduling, availability and usage tracking in one place.',
    techTags: ['React', 'TypeScript', 'Flask', 'PostgreSQL', 'Tailwind'],
    liveFlag: 'LIVE DEMO AVAILABLE',
    glyph: 'R',
  },
  {
    index: '02',
    title: 'Tech Job Market Analyzer',
    description:
      'A scraping and analysis pipeline that collects job postings across platforms and tracks technology demand over time.',
    techTags: ['Python', 'Web Scraping', 'Django', 'Data Analysis'],
    liveFlag: 'SCRAPER RUNNING — SEE SECTION 08',
    glyph: 'J',
    reverse: true,
  },
  {
    index: '03',
    title: 'The Melancholical Adventure of a Nobleman',
    description:
      "A narrative 2D game built with Python and Pygame — my attempt at proving engineering and storytelling aren't separate skills.",
    techTags: ['Python', 'Pygame', 'Game Design'],
    liveFlag: 'GAMEPLAY PREVIEW',
    glyph: 'N',
  },
  {
    index: '04',
    title: 'SidaFighter',
    description:
      'A Flutter mobile app built around anonymous, judgment-free communication on a sensitive health topic.',
    techTags: ['Flutter', 'Dart', 'Mobile'],
    liveFlag: 'MOBILE APP',
    glyph: 'S',
    reverse: true,
  },
]

function ProjectVisual({ glyph, liveFlag }: Pick<Project, 'glyph' | 'liveFlag'>) {
  return (
    <div className="group/visual relative aspect-[16/10] overflow-hidden rounded-md border border-line bg-gradient-to-br from-bg-2 to-bg-0">
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/visual:opacity-100"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(157,124,255,0.45), transparent 60%)',
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center font-serif text-[15vw] text-white/[0.04] transition-all duration-500 group-hover/visual:scale-105 group-hover/visual:text-purple/15">
        {glyph}
      </div>
      <div className="absolute left-4 top-4 -translate-y-1.5 font-mono text-[10.5px] text-text-2 opacity-0 transition-all duration-400 group-hover/visual:translate-y-0 group-hover/visual:opacity-100">
        {liveFlag}
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="group grid grid-cols-1 items-center gap-10 border-t border-line py-14 last:border-b md:grid-cols-2 md:gap-14"
    >
      <div className={project.reverse ? 'md:order-2' : ''}>
        <span className="mb-3.5 block font-mono text-xs text-purple">
          {project.index}
        </span>
        <h3 className="mb-4 font-serif text-2xl md:text-[34px]">
          {project.title}
        </h3>
        <p className="mb-5 max-w-[420px] text-[15px] leading-relaxed text-text-1">
          {project.description}
        </p>
        <div className="mb-5 flex flex-wrap gap-2.5">
          {project.techTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line px-3 py-1.5 font-mono text-[11px] text-text-1"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href="#"
          className="border-b border-purple pb-1 text-sm text-text-0"
        >
          View project →
        </a>
      </div>

      <div className={project.reverse ? 'md:order-1' : ''}>
        <ProjectVisual glyph={project.glyph} liveFlag={project.liveFlag} />
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="work" className="py-32 md:py-[150px]">
      <div className="mx-auto max-w-[1240px] px-6 md:px-12">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-serif text-[32px] md:text-[44px]">
            Things I've built.
          </h2>
          <p className="max-w-[280px] text-sm leading-relaxed text-text-1">
            Four projects, four different problems — hover to see a preview
            of each.
          </p>
        </div>

        <div>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}