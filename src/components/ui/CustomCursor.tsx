'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    let mouseX = 0, mouseY = 0
    let outerX = 0, outerY = 0
    let animId: number

    const move = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (innerRef.current) {
        innerRef.current.style.left = `${mouseX}px`
        innerRef.current.style.top = `${mouseY}px`
      }
    }

    const animate = () => {
      outerX += (mouseX - outerX) * 0.1
      outerY += (mouseY - outerY) * 0.1
      if (outerRef.current) {
        outerRef.current.style.left = `${outerX}px`
        outerRef.current.style.top = `${outerY}px`
      }
      animId = requestAnimationFrame(animate)
    }

    const onMouseEnter = () => setIsHovering(true)
    const onMouseLeave = () => setIsHovering(false)

    document.addEventListener('mousemove', move)

    const interactiveEls = document.querySelectorAll('a, button, [data-cursor-hover]')
    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnter)
      el.addEventListener('mouseleave', onMouseLeave)
    })

    // MutationObserver to catch dynamically added elements
    const observer = new MutationObserver(() => {
      const els = document.querySelectorAll('a, button, [data-cursor-hover]')
      els.forEach(el => {
        el.addEventListener('mouseenter', onMouseEnter)
        el.addEventListener('mouseleave', onMouseLeave)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    animId = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', move)
      cancelAnimationFrame(animId)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div
        ref={outerRef}
        className={`cursor-outer hidden md:block ${isHovering ? 'cursor-hover' : ''}`}
      />
      <div
        ref={innerRef}
        className="cursor-inner hidden md:block"
      />
    </>
  )
}
