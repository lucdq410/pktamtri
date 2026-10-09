import { useEffect, useState } from 'react'
import { ArrowUp, Phone } from 'lucide-react'
import { MessengerIcon, ZaloIcon } from './BrandIcons'
import { clinic } from '../data/site'
import { cx } from '../lib/utils'

function Action({ href, label, className, children, external }) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className={cx('group relative grid h-12 w-12 place-items-center rounded-full shadow-lg transition hover:-translate-y-0.5', className)}
      aria-label={label}
    >
      {children}
      <span className="pointer-events-none absolute right-full mr-3 hidden rounded-full bg-ink px-3 py-1.5 text-xs font-medium whitespace-nowrap text-cream opacity-0 transition group-hover:opacity-100 md:block">
        {label}
      </span>
    </a>
  )
}

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col items-center gap-3 sm:right-6 sm:bottom-6">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={cx(
          'grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-ink/10 bg-white/90 text-ink shadow-md backdrop-blur transition',
          showTop ? 'opacity-100' : 'pointer-events-none translate-y-2 opacity-0',
        )}
        aria-label="Lên đầu trang"
      >
        <ArrowUp className="h-4 w-4" />
      </button>
      <Action href={clinic.social.zalo} label="Chat Zalo" external className="bg-[#0068FF] text-white">
        <ZaloIcon className="h-7 w-7" />
      </Action>
      <Action href={clinic.social.messenger} label="Nhắn tin Messenger" external className="bg-gradient-to-br from-[#00B2FF] to-[#A033FF] text-white">
        <MessengerIcon className="h-6 w-6" />
      </Action>
      <Action href={`tel:${clinic.tel}`} label={`Gọi ${clinic.hotline}`} className="h-14 w-14 bg-honey-400 text-ink">
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-honey-400" />
        <Phone className="relative h-6 w-6" />
      </Action>
    </div>
  )
}
