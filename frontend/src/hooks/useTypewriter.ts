import { useEffect, useState } from 'react'

interface UseTypewriterOptions {
  lines: string[]
  charDelay?: number
  lineDelay?: number
  startDelay?: number
}

export function useTypewriter({
  lines,
  charDelay = 22,
  lineDelay = 120,
  startDelay = 500,
}: UseTypewriterOptions) {
  const [output, setOutput] = useState('')
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    let lineIndex = 0
    let charIndex = 0
    let cancelled = false
    const timers: ReturnType<typeof setTimeout>[] = []

    function typeNextChar() {
      if (cancelled) return

      if (lineIndex >= lines.length) {
        setIsDone(true)
        return
      }

      const currentLine = lines[lineIndex]

      if (charIndex <= currentLine.length) {
        const linesShown = lines.slice(0, lineIndex).join('\n')
        const partialLine = currentLine.slice(0, charIndex)
        setOutput(linesShown + (lineIndex > 0 ? '\n' : '') + partialLine)
        charIndex++
        timers.push(setTimeout(typeNextChar, charDelay))
      } else {
        lineIndex++
        charIndex = 0
        timers.push(setTimeout(typeNextChar, lineDelay))
      }
    }

    timers.push(setTimeout(typeNextChar, startDelay))

    return () => {
      cancelled = true
      timers.forEach(clearTimeout)
    }
  }, [lines, charDelay, lineDelay, startDelay])

  return { output, isDone }
}