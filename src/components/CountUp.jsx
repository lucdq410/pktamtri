import { useEffect, useRef, useState } from 'react'

const format = (n) => n.toLocaleString('vi-VN')

export default function CountUp({ value, suffix = '', duration = 1600 }) {
  const ref = useRef(null)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const el = ref.current
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!el || reduce || !('IntersectionObserver' in window)) {
      setCurrent(value)
      return
    }
    let frame
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      const start = performance.now()
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - t, 3)
        setCurrent(Math.round(eased * value))
        if (t < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    })
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value, duration])

  return (
    <span ref={ref} aria-label={`${format(value)}${suffix}`}>
      <span aria-hidden="true">
        {format(current)}
        {suffix}
      </span>
    </span>
  )
}
