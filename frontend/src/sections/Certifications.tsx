import { motion } from 'framer-motion'

interface Certification {
  seal: string
  name: string
  org: string
  year: string
}

const CERTIFICATIONS: Certification[] = [
  {
    seal: '01',
    name: 'Full Stack Web Development',
    org: 'Issuing Organization',
    year: '2024',
  },
  {
    seal: '02',
    name: 'Software Engineering Fundamentals',
    org: 'Issuing Organization',
    year: '2023',
  },
  {
    seal: '03',
    name: 'Data Analysis with Python',
    org: 'Issuing Organization',
    year: '2023',
  },
]

function CertificationCard({ cert }: { cert: Certification }) {
  return (
    <div className="group w-[320px] flex-shrink-0 overflow-hidden rounded-lg border border-line bg-bg-1 transition-all duration-300 hover:-translate-y-1.5 hover:border-purple">
      <div className="flex h-[190px] items-center justify-center bg-gradient-to-br from-bg-2 to-bg-0">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-purple font-serif text-[13px] italic text-purple transition-shadow duration-300 group-hover:shadow-[0_0_24px_rgba(157,124,255,0.4)]">
          {cert.seal}
        </div>
      </div>
      <div className="p-5 pb-6">
        <div className="mb-1.5 font-serif text-lg">{cert.name}</div>
        <div className="mb-1 text-[13px] text-text-1">{cert.org}</div>
        <div className="font-mono text-[11px] text-text-2">{cert.year}</div>
      </div>
    </div>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 md:py-[150px]">
      <div className="mx-auto max-w-[1240px] px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-wrap items-end justify-between gap-6"
        >
          <h2 className="font-serif text-[32px] md:text-[44px]">
            Certifications
          </h2>
          <p className="max-w-[280px] text-sm leading-relaxed text-text-1">
            A few credentials worth showing, not a wall of badges.
          </p>
        </motion.div>

        <div className="flex gap-7 overflow-x-auto pb-5 [scrollbar-width:thin]">
          {CERTIFICATIONS.map((cert) => (
            <CertificationCard key={cert.name} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  )
}