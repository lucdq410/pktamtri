import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowRight, ChevronDown, Clock, MapPin, Menu, Phone, X } from 'lucide-react'
import Logo from './Logo'
import Icon from './Icon'
import { FacebookIcon, MessengerIcon, ZaloIcon } from './BrandIcons'
import { useBooking } from './Booking'
import { clinic, nav } from '../data/site'
import { services } from '../data/services'
import { cx } from '../lib/utils'

function TopBar() {
  return (
    <div className="hidden bg-night text-[0.8125rem] text-cream/75 md:block">
      <div className="container-x flex h-10 items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-honey-300" /> {clinic.address}
          </span>
          <span className="hidden items-center gap-2 lg:inline-flex">
            <Clock className="h-3.5 w-3.5 text-honey-300" />
            {clinic.hours.map((h) => `${h.short}: ${h.time}`).join('  ·  ')}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <a href={clinic.social.facebook} target="_blank" rel="noreferrer" className="rounded-full p-1.5 transition hover:text-honey-300" aria-label="Facebook">
            <FacebookIcon className="h-4 w-4" />
          </a>
          <a href={clinic.social.messenger} target="_blank" rel="noreferrer" className="rounded-full p-1.5 transition hover:text-honey-300" aria-label="Messenger">
            <MessengerIcon className="h-4 w-4" />
          </a>
          <a href={clinic.social.zalo} target="_blank" rel="noreferrer" className="rounded-full p-1.5 transition hover:text-honey-300" aria-label="Zalo">
            <ZaloIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  )
}

function MegaMenu() {
  return (
    <div className="invisible absolute top-full left-1/2 w-[min(860px,calc(100vw-3rem))] -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition duration-300 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
      <div className="grid grid-cols-[1fr_15rem] overflow-hidden rounded-3xl border border-ink/5 bg-white shadow-2xl shadow-ink/10">
        <ul className="grid grid-cols-2 gap-1 p-4">
          {services.map((s) => (
            <li key={s.slug}>
              <Link to={`/dich-vu/${s.slug}`} className="group/item flex gap-3 rounded-2xl p-3 transition hover:bg-cream">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-honey-100 text-honey-600 transition group-hover/item:bg-honey-400 group-hover/item:text-ink">
                  <Icon name={s.icon} className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink">{s.title}</span>
                  <span className="mt-0.5 line-clamp-2 block text-xs leading-relaxed text-muted">{s.tagline}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="relative flex flex-col justify-end overflow-hidden bg-gradient-to-br from-honey-200 to-blush-100 p-6">
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full border-[24px] border-white/50" />
          <p className="text-xs font-semibold tracking-[0.18em] text-honey-700 uppercase">Được chọn nhiều nhất</p>
          <p className="mt-2 font-display text-xl leading-snug font-semibold">Gói chăm sóc thai kỳ toàn diện</p>
          <p className="mt-2 text-xs leading-relaxed text-ink-soft">Từ A đến Z – từ khi mang thai đến khi bé chào đời.</p>
          <Link to="/dich-vu/goi-cham-soc-thai-ky-toan-dien" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:gap-2.5 transition-all">
            Xem chi tiết <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const { pathname } = useLocation()
  const { openBooking } = useBooking()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const linkClass = ({ isActive }) =>
    cx(
      'relative inline-flex items-center gap-1 px-1 py-2 text-[0.9375rem] font-medium transition',
      'after:absolute after:inset-x-1 after:-bottom-0.5 after:h-0.5 after:origin-left after:rounded-full after:bg-honey-400 after:transition after:duration-300',
      isActive ? 'text-ink after:scale-x-100' : 'text-ink-soft after:scale-x-0 hover:text-ink hover:after:scale-x-100',
    )

  return (
    <>
      <TopBar />
      <header
        className={cx(
          'sticky top-0 z-40 transition duration-300',
          scrolled || open ? 'bg-cream/90 shadow-[0_8px_30px_-12px_rgba(43,36,32,0.18)] backdrop-blur-xl' : 'bg-transparent',
        )}
      >
        <div className="container-x flex h-[4.5rem] items-center justify-between gap-6 lg:h-20">
          <Logo />

          <nav className="hidden lg:block" aria-label="Điều hướng chính">
            <ul className="flex items-center gap-7">
              {nav.map((item) =>
                item.mega ? (
                  <li key={item.to} className="group relative">
                    <NavLink to={item.to} className={linkClass}>
                      {item.label}
                      <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
                    </NavLink>
                    <MegaMenu />
                  </li>
                ) : (
                  <li key={item.to}>
                    <NavLink to={item.to} end={item.to === '/'} className={linkClass}>
                      {item.label}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a href={`tel:${clinic.tel}`} className="hidden items-center gap-3 rounded-full py-1.5 pr-4 pl-1.5 transition hover:bg-white/70 xl:inline-flex">
              <span className="relative grid h-9 w-9 place-items-center rounded-full bg-honey-100 text-honey-700">
                <Phone className="h-4 w-4" />
              </span>
              <span className="leading-tight">
                <span className="block text-[0.6875rem] text-muted">Hotline đặt lịch</span>
                <span className="block text-sm font-bold tracking-wide text-ink">{clinic.hotline}</span>
              </span>
            </a>
            <button type="button" onClick={() => openBooking()} className="btn-primary hidden sm:inline-flex">
              Đặt lịch khám
            </button>
            <button
              type="button"
              className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-ink/10 bg-white/70 lg:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Đóng menu' : 'Mở menu'}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Menu di động */}
        <div
          id="mobile-menu"
          className={cx(
            'overflow-y-auto border-t border-ink/5 bg-cream transition-[max-height,opacity] duration-500 lg:hidden',
            open ? 'max-h-[calc(100dvh-4.5rem)] opacity-100' : 'pointer-events-none max-h-0 opacity-0',
          )}
        >
          <nav className="container-x py-4" aria-label="Điều hướng di động">
            <ul className="divide-y divide-ink/5">
              {nav.map((item) => (
                <li key={item.to}>
                  {item.mega ? (
                    <>
                      <div className="flex items-center justify-between">
                        <NavLink to={item.to} className="block py-4 text-lg font-medium">
                          {item.label}
                        </NavLink>
                        <button
                          type="button"
                          onClick={() => setServicesOpen((o) => !o)}
                          className="grid h-10 w-10 cursor-pointer place-items-center rounded-full bg-white"
                          aria-expanded={servicesOpen}
                          aria-label="Xem danh sách dịch vụ"
                        >
                          <ChevronDown className={cx('h-5 w-5 transition', servicesOpen && 'rotate-180')} />
                        </button>
                      </div>
                      {servicesOpen && (
                        <ul className="mb-4 grid gap-1">
                          {services.map((s) => (
                            <li key={s.slug}>
                              <Link to={`/dich-vu/${s.slug}`} className="flex items-center gap-3 rounded-2xl bg-white px-3 py-2.5 text-sm font-medium">
                                <Icon name={s.icon} className="h-4 w-4 text-honey-600" />
                                {s.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <NavLink to={item.to} end={item.to === '/'} className={({ isActive }) => cx('block py-4 text-lg font-medium', isActive && 'text-honey-700')}>
                      {item.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-4 grid gap-3 pb-4 sm:grid-cols-2">
              <a href={`tel:${clinic.tel}`} className="btn-ghost">
                <Phone className="h-4 w-4" /> {clinic.hotline}
              </a>
              <button
                type="button"
                onClick={() => {
                  setOpen(false)
                  openBooking()
                }}
                className="btn-primary"
              >
                Đặt lịch khám
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
