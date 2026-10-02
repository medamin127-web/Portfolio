import { motion } from 'framer-motion'
import { useTypewriter } from '../hooks/useTypewriter'
import portraitImg from '../assets/Portraits.png'

const CODE_LINES = [
  'const Mohamed = {',
  '  role: "Software Engineer",',
  '  focus: "Full Stack",',
  '  mindset: "Builder",',
  '  status: "making things"',
  '};',
]

const KEYWORDS = ['const', 'role', 'focus', 'mindset', 'status']

function highlightLine(line: string) {
  const parts = line.split(/(\b(?:const|role|focus|mindset|status)\b|"[^"]*")/g)

  return parts.map((part, i) => {
    if (part === 'const') {
      return (
        <span key={i} className="text-purple">
          {part}
        </span>
      )
    }

    if (KEYWORDS.includes(part)) {
      return (
        <span key={i} className="text-[#b98cff]">
          {part}
        </span>
      )
    }

    if (part.startsWith('"') && part.endsWith('"')) {
      return (
        <span key={i} className="text-[#d8c5ff]">
          {part}
        </span>
      )
    }

    return <span key={i}>{part}</span>
  })
}

export default function Hero() {
  const { output } = useTypewriter({
    lines: CODE_LINES,
  })

  const lines = output.split('\n')

  return (
    <section
      id="hero"
      className="relative flex min-h-svh items-center overflow-hidden pt-24"
    >
      {/* =====================================================
          BACKGROUND — AMBIENT PURPLE LIGHT
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle 650px at 72% 42%, rgba(110,65,220,0.15), transparent 65%)',
        }}
      />

      {/* Very subtle technical grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-20 px-6 md:grid-cols-[1fr_0.9fr] md:px-12 lg:gap-24">

        {/* ===================================================
            LEFT — INTRODUCTION
        ==================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10"
        >
          {/* Small identity label */}

          <div className="mb-7 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-text-2">
            <span className="h-px w-8 bg-purple" />
            <span>Software Engineer</span>
          </div>

          {/* Main headline */}

          <h1
            className="font-serif text-[clamp(2.9rem,6.2vw,6rem)] leading-[0.94] tracking-[-0.03em] text-balance"
            style={{
              fontVariationSettings:
                '"opsz" 144, "SOFT" 40, "WONK" 1',
            }}
          >
            I build things
            <br />
            from{' '}
            <span className="relative inline-block italic text-purple">
              ideas.
              <svg
                className="absolute -bottom-1 left-0 w-full text-purple/40"
                height="6"
                viewBox="0 0 200 6"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 4 Q 100 -1 198 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Role */}

          <div className="mt-10 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <p className="text-[15px] font-medium text-text-0">
              Full Stack Developer
            </p>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-2">
              Remote / Worldwide
            </span>
          </div>

          {/* Body */}

          <p className="mt-5 max-w-[46ch] text-pretty text-[16px] leading-[1.8] text-text-1">
            I turn problems, curiosity and half-formed ideas into working
            software — from full-stack platforms to games, data projects
            and experiments nobody asked for.
          </p>

          {/* Actions */}

          <div className="mt-10 flex items-center gap-7">
            <a
              href="#work"
              className="group rounded-full bg-purple px-6 py-3.5 text-sm font-semibold text-bg-0 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_35px_rgba(110,65,220,0.35)]"
            >
              Explore my work
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-y-1">
                ↓
              </span>
            </a>

            <a
              href="#about"
              className="border-b border-line pb-1 text-sm text-text-1 transition-colors hover:border-text-0 hover:text-text-0"
            >
              About me
            </a>
          </div>

          {/* Currently */}

          <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[10px] uppercase tracking-[0.16em] text-text-2">
            <span className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-purple" />
              </span>
              Currently building
              <span className="text-text-1 normal-case tracking-normal">
                a habit tracker
              </span>
            </span>
          </div>
        </motion.div>

        {/* ===================================================
            RIGHT — PORTRAIT + CODE
        ==================================================== */}

        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
          className="relative mx-auto w-full max-w-[470px]"
        >
          {/* =================================================
              PORTRAIT
          ================================================== */}

          <div className="group relative aspect-[0.82] overflow-hidden border border-line bg-bg-1">

            {/* Base image — grayscale, slightly darkened */}
            <img
              src={portraitImg}
              alt="Mohamed Amin Hawala"
              className="h-full w-full object-cover object-top grayscale brightness-[0.95] contrast-[1.08] will-change-transform transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
            />

            {/* Duotone — hue from gradient, luminosity from photo */}
            <div
              className="pointer-events-none absolute inset-0 mix-blend-color"
              style={{
                background:
                  'linear-gradient(155deg, rgba(91,58,199,0.85) 0%, rgba(157,124,255,0.35) 55%, rgba(157,124,255,0.1) 100%)',
              }}
            />

            {/* Specular highlight */}
            <div
              className="pointer-events-none absolute inset-0 mix-blend-screen"
              style={{
                background:
                  'radial-gradient(circle at 74% 14%, rgba(157,124,255,0.30), transparent 46%)',
              }}
            />

            {/* Film grain */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.09] mix-blend-overlay"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
              }}
            />

            {/* Bottom fade */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'linear-gradient(to top, rgba(5,5,7,0.8), transparent 45%)',
              }}
            />

            {/* Corner brackets */}
            <span className="pointer-events-none absolute -top-px -left-px h-4 w-4 border-t border-l border-purple/60" />
            <span className="pointer-events-none absolute -top-px -right-px h-4 w-4 border-t border-r border-purple/60" />
            <span className="pointer-events-none absolute -bottom-px -left-px h-4 w-4 border-b border-l border-purple/60" />
            <span className="pointer-events-none absolute -bottom-px -right-px h-4 w-4 border-b border-r border-purple/60" />

            {/* Availability badge */}
            <div className="absolute left-5 top-5 z-10 flex items-center gap-2 border border-white/10 bg-black/50 px-3 py-1.5 backdrop-blur-md">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-purple" />
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-text-1">
                Available
              </span>
            </div>
          </div>

          {/* =================================================
              CODE WINDOW — BACKING PLATE
          ================================================== */}

          <div
            className="
              absolute
              -bottom-14
              -left-6
              h-[210px]
              w-[300px]
              border
              border-purple/10
              bg-purple/[0.025]
              md:-left-14
              md:w-[380px]
            "
          />

          {/* =================================================
              CODE WINDOW
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -1 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
            className="
              absolute
              -bottom-12
              -left-6
              z-20
              w-[300px]
              overflow-hidden
              border
              border-white/[0.10]
              bg-[#0b0b0f]/[0.96]
              shadow-[0_30px_80px_rgba(0,0,0,0.55)]
              backdrop-blur-xl
              md:-left-16
              md:w-[380px]
            "
          >
            {/* Ambient glow inside editor */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-purple/20 blur-3xl" />

            {/* =================================================
                EDITOR HEADER
            ================================================== */}

            <div className="relative flex h-11 items-center border-b border-white/[0.07] px-4">
              {/* Traffic lights */}
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
              </div>

              {/* File name */}
              <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2">
                <span className="font-mono text-[9px] font-semibold text-purple">
                  TS
                </span>
                <span className="font-mono text-[10px] text-text-2">
                  whoami.ts
                </span>
              </div>

              {/* File number */}
              <span className="ml-auto font-mono text-[9px] tracking-widest text-text-2">
                01
              </span>
            </div>

            {/* =================================================
                CODE AREA
            ================================================== */}

            <div className="relative px-4 py-5">
              <div className="flex font-mono text-[11px] leading-[1.9] md:text-[12px] [font-variant-ligatures:none]">
                {/* Line numbers */}
                <div className="mr-5 select-none text-right text-white/20">
                  {lines.map((_, i) => (
                    <div key={i}>{String(i + 1).padStart(2, '0')}</div>
                  ))}
                </div>

                {/* Purple active line */}
                <div className="mr-3 w-px bg-purple/30" />

                {/* Code */}
                <pre className="min-w-0 whitespace-pre-wrap text-text-1">
                  {lines.map((line, i) => (
                    <div key={i} className="min-h-[23px]">
                      {highlightLine(line)}

                      {/* Typing cursor */}
                      {i === lines.length - 1 && (
                        <span className="ml-1 inline-block h-[14px] w-[6px] animate-pulse bg-purple align-middle shadow-[0_0_10px_rgba(124,58,237,0.7)]" />
                      )}
                    </div>
                  ))}
                </pre>
              </div>
            </div>

            {/* =================================================
                EDITOR FOOTER
            ================================================== */}

            <div className="flex h-8 items-center justify-between border-t border-white/[0.07] px-4">
              {/* Status */}
              <div className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.15em] text-text-2">
                <span className="h-1.5 w-1.5 rounded-full bg-purple shadow-[0_0_8px_rgba(124,58,237,0.8)]" />
                typing
              </div>

              {/* File information */}
              <div className="flex gap-4 font-mono text-[8px] uppercase tracking-[0.12em] text-white/20">
                <span>UTF-8</span>
                <span>TS</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <div className="absolute bottom-9 left-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-text-2 md:left-12">
        <span className="h-8 w-px bg-gradient-to-b from-purple to-transparent" />
        <span>Scroll</span>
        <span className="text-purple">01 / 09</span>
      </div>
    </section>
  )
}