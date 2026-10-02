import { useEffect, useState } from 'react'

export function useLiveChart(barCount: number, intervalMs = 4000) {
  const [values, setValues] = useState<number[]>(() =>
    Array.from({ length: barCount }, () => 30 + Math.random() * 160)
  )

  useEffect(() => {
    const id = setInterval(() => {
      setValues(Array.from({ length: barCount }, () => 30 + Math.random() * 160))
    }, intervalMs)

    return () => clearInterval(id)
  }, [barCount, intervalMs])

  return values
}