import { CalendarCheck, Clock, Phone } from 'lucide-react'
import { useBooking } from './Booking'
import { clinic } from '../data/site'

export default function SidebarBooking({ service = '', title = 'Đặt lịch khám cùng bác sĩ Tâm' }) {
  const { openBooking } = useBooking()
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-ink p-7 text-cream">
      <div className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full border-[22px] border-honey-400/20" />
      <p className="text-xs font-semibold tracking-[0.18em] text-honey-300 uppercase">Tư vấn miễn phí</p>
      <p className="mt-3 font-display text-2xl leading-snug font-semibold">{title}</p>
      <ul className="mt-5 space-y-2 text-sm text-cream/75">
        {clinic.hours.map((h) => (
          <li key={h.days} className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-honey-300" />
            {h.days}: <span className="text-cream">{h.time}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 grid gap-2">
        <button type="button" onClick={() => openBooking(service)} className="btn-honey w-full">
          <CalendarCheck className="h-4 w-4" /> Đặt lịch ngay
        </button>
        <a href={`tel:${clinic.tel}`} className="btn w-full border border-cream/20 text-cream hover:border-cream/50">
          <Phone className="h-4 w-4" /> {clinic.hotline}
        </a>
      </div>
    </div>
  )
}
