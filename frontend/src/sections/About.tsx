import { motion } from 'framer-motion'

const INTERESTS = [
  'fitness',
  'photography',
  'video editing',
  'football',
  'tinkering',
]

export default function About() {
  return (
    <section id="about" className="py-32 md:py-[150px]">
      <div className="mx-auto max-w-[1240px] px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative aspect-[4/5] overflow-hidden rounded-md border border-line bg-gradient-to-br from-bg-2 to-bg-0"
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(circle at 40% 30%, rgba(157,124,255,0.18), transparent 60%)',
              }}
            />
            <div className="absolute bottom-5 left-5 font-serif text-[13px] italic text-text-1">
              off the clock
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          >
            <p className="mb-6 max-w-[520px] text-[19px] leading-relaxed text-text-0">
              I'm a software engineer, but software isn't the only thing I'm
              interested in.
            </p>
            <p className="mb-6 max-w-[520px] text-[17px] leading-relaxed text-text-1">
              I like making things. Sometimes that's an application.
              Sometimes it's a weird idea I build just to see if it works.
              Outside development, fitness is a real part of my routine, and
              I like experimenting with photography and video — mostly for a
              football storytelling project I run on the side.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-2.5 gap-y-2 font-mono text-[11.5px] text-text-2">
              {INTERESTS.map((interest, i) => (
                <span key={interest} className="flex items-center">
                  {interest}
                  {i < INTERESTS.length - 1 && (
                    <span className="ml-2.5 text-line">·</span>
                  )}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}