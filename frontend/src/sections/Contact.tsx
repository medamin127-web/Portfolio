import { motion } from 'framer-motion'

interface ContactLink {
  label: string
  href: string
}

const CONTACT_LINKS: ContactLink[] = [
  { label: 'Email', href: 'mailto:hello@mohamedamin.dev' },
  { label: 'GitHub', href: 'https://github.com/yourusername' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername' },
  { label: 'Resume', href: '/resume.pdf' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-[150px]">
      <div className="mx-auto max-w-[1240px] px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-[900px] font-serif text-[38px] leading-[1.05] md:text-[64px] lg:text-[88px]"
        >
          Got an idea?
          <br />
          Let's <span className="text-purple">build it.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 max-w-[440px] text-base leading-relaxed text-text-1"
        >
          Have a project, a job opening, or something interesting you're not
          sure how to build yet? Tell me about it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-14 flex flex-wrap gap-10"
        >
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="border-b border-transparent pb-1 text-sm text-text-1 transition-colors hover:border-purple hover:text-text-0"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}