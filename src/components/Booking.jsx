import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { Clock, Phone, X } from 'lucide-react'
import BookingForm from './BookingForm'
import { clinic } from '../data/site'

const BookingContext = createContext({ openBooking: () => {} })

export const useBooking = () => useContext(BookingContext)

export function BookingProvider({ children }) {
  const [state, setState] = useState({ open: false, service: '', key: 0 })

  const openBooking = useCallback((service = '') => {
    setState((s) => ({ open: true, service: typeof service === 'string' ? service : '', key: s.key + 1 }))
  }, [])
  const close = useCallback(() => setState((s) => ({ ...s, open: false })), [])

  return (
    <BookingContext.Provider value={{ openBooking }}>
      {children}
      {state.open && <BookingModal key={state.key} service={state.service} onClose={close} />}
    </BookingContext.Provider>
  )
}

function BookingModal({ service, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-labelledby="booking-title">
      <div className="absolute inset-0 bg-night/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-[2rem] bg-cream shadow-2xl sm:rounded-[2rem]">
        <div className="relative overflow-hidden bg-gradient-to-br from-honey-200 via-honey-100 to-blush-100 px-6 pt-7 pb-6 sm:px-8">
          <div className="absolute -top-16 -right-10 h-48 w-48 rounded-full border-[28px] border-white/40" />
          <p className="eyebrow">Đặt lịch khám</p>
          <h2 id="booking-title" className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
            Tâm Trí luôn sẵn sàng lắng nghe bạn
          </h2>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-ink-soft">
            <a href={`tel:${clinic.tel}`} className="inline-flex items-center gap-1.5 font-semibold hover:text-honey-700">
              <Phone className="h-4 w-4" /> {clinic.hotline}
            </a>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> {clinic.hours.map((h) => `${h.short} ${h.time}`).join(' · ')}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 grid h-10 w-10 cursor-pointer place-items-center rounded-full bg-white/70 text-ink transition hover:bg-white"
            aria-label="Đóng"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="px-6 py-6 sm:px-8 sm:py-7">
          <BookingForm defaultService={service} autoFocus />
        </div>
      </div>
    </div>
  )
}
