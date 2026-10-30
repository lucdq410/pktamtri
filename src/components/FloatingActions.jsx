import { useEffect, useState } from 'react'
import { ArrowUp, CalendarCheck, Phone } from 'lucide-react'
import { MessengerIcon, ZaloIcon } from './BrandIcons'
import { useBooking } from './Booking'
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
      <span className="pointer-events-none absolute right-full mr-3 rounded-full bg-ink px-3 py-1.5 text-xs font-medium whitespace-nowrap text-cream opacity-0 transition group-hover:opacity-100">
        {label}
      </span>
    </a>
  )
}

// Điện thoại: thanh liên hệ cố định dưới đáy màn hình, không che nội dung
function MobileBar() {
  const { openBooking } = useBooking()
  const item = 'flex flex-col items-center justify-center gap-1 py-2 text-xs font-semibold'
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-ink/10 bg-cream/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_30px_-12px_rgba(43,36,32,0.25)] backdrop-blur-xl md:hidden"
      aria-label="Liên hệ nhanh"
    >
      <a href={`tel:${clinic.tel}`} className={cx(item, 'text-ink')}>
        <span className="relative grid h-8 w-8 place-items-center rounded-full bg-honey-400">
          <span className="absolute inset-0 animate-pulse-ring rounded-full bg-honey-400" />
          <Phone className="relative h-4 w-4" />
        </span>
        Gọi ngay
      </a>
      <a href={clinic.social.zalo} target="_blank" rel="noreferrer" className={cx(item, 'text-ink')}>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-[#0068FF] text-white">
          <ZaloIcon className="h-5 w-5" />
        </span>
        Chat Zalo
      </a>
      <button type="button" onClick={() => openBooking()} className={cx(item, 'm-1.5 cursor-pointer rounded-2xl bg-ink text-cream')}>
        <CalendarCheck className="h-5 w-5 text-honey-300" />
        Đặt lịch
      </button>
    </nav>
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
    <>
      <div className="fixed right-4 bottom-20 z-40 flex flex-col items-center gap-3 sm:right-6 md:bottom-6">
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
        <div className="hidden flex-col items-center gap-3 md:flex">
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
      </div>
      <MobileBar />
    </>
  )
}
