// hooks/useScrollReveal.ts
'use client'
import { useState, useEffect, useRef } from 'react'

export default function useScrollReveal() {
  const [isRevealed, setIsRevealed] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsRevealed(entry.isIntersecting),
      {
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1,
      }
    )
    if (domRef.current) observer.observe(domRef.current)

    return () => observer.disconnect()
  }, [])

  return { domRef, isRevealed }
}
