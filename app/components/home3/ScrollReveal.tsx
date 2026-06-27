'use client'

import { useEffect } from 'react'

/**
 * Attaches an IntersectionObserver to every `.rv` element on the page
 * and adds the `.in` class when they enter the viewport.
 * Drop this component once anywhere in the layout (e.g. inside a Client wrapper).
 */
export default function ScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.16 }
    )

    // Stagger delay for sibling groups of .rv elements
    document.querySelectorAll('.rv').forEach((el, i) => {
      if (!(el as HTMLElement).style.transitionDelay) {
        ;(el as HTMLElement).style.transitionDelay = `${(i % 3) * 0.08}s`
      }
      io.observe(el)
    })

    return () => io.disconnect()
  }, [])

  return null
}