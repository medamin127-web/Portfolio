// src/components/layout/Footer.tsx


const FOOTER_LINKS = [
  { label: 'GitHub', href: 'https://github.com/yourusername' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername' },
  { label: 'Email', href: 'mailto:hello@mohamedamin.dev' },
] as const

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center
        justify-between gap-4 px-6 md:px-12">
        <div>
          <div className="font-serif text-[15px]">Mohamed Amin Hawala</div>
          <div className="mt-1 text-[12.5px] text-text-2">
            Software Engineer · Full Stack Developer · Sousse, Tunisia
          </div>
        </div>

        <div className="flex gap-6">
          {FOOTER_LINKS.map((link) => (
             <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-text-2 transition-colors hover:text-text-0"
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}