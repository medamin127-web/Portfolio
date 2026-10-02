import { motion } from 'framer-motion'
import { useLiveChart } from '../hooks/useLiveChart'

const TECH_LABELS = ['React', 'Python', 'SQL', 'Flutter', 'Node', 'Go']

const TERMINAL_LINES = [
  { text: '> scraper.start()', className: 'text-text-1' },
  { text: 'LinkedIn ........ ✓', className: 'text-text-1' },
  { text: 'Upwork .......... ✓', className: 'text-text-1' },
  { text: 'Bayt ............ ✓', className: 'text-text-1' },
  { text: 'analysing data...', className: 'text-purple' },
  { text: 'pipeline active', className: 'text-text-1' },
]

function LiveChart() {
  const values = useLiveChart(TECH_LABELS.length)

  return (
    <div>
      <div className="flex h-[200px] items-end gap-3.5 border-b border-line pb-2.5">
        {values.map((height, i) => (
          <motion.div
            key={TECH_LABELS[i]}
            animate={{ height }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="flex-1 rounded-t-sm bg-gradient-to-t from-purple-deep to-purple"
          />
        ))}
      </div>
      <div className="mt-2.5 flex gap-3.5">
        {TECH_LABELS.map((label) => (
          <span
            key={label}
            className="flex-1 text-center font-mono text-[10px] text-text-2"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Scraper() {
  return (
    <section id="scraper" className="py-32 md:py-[150px]">
      <div className="mx-auto max-w-[1240px] px-6 md:px-12">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-serif text-[32px] leading-tight md:text-[44px]">
            I built a scraper.
            <br />
            So I let it run.
          </h2>
          <p className="max-w-[280px] text-sm leading-relaxed text-text-1">
            A live look at the pipeline behind the Tech Job Market Analyzer.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-12 rounded-xl border border-line bg-bg-1 p-10 md:grid-cols-[1fr_1.2fr]"
        >
          <div>
            <div className="mb-5 flex items-center gap-2 font-mono text-[11.5px] text-text-1">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
              PIPELINE ACTIVE
            </div>
            <div className="font-mono text-[12.5px] leading-loose text-text-1">
              {TERMINAL_LINES.map((line, i) => (
                <div key={i} className={line.className}>
                  {line.text}
                </div>
              ))}
            </div>
          </div>

          <LiveChart />
        </motion.div>
      </div>
    </section>
  )
}