'use client'
import { useEffect } from 'react'
export default function ScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed')
          io.unobserve(e.target)
        }
      }),
      { threshold: 0.18 }
    );
    document.querySelectorAll<HTMLElement>('.scroll-reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
  return null
}
