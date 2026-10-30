import { Clock, MapPin, Phone } from 'lucide-react'
import Reveal from '../components/Reveal'
import BookingForm from '../components/BookingForm'
import { MessengerIcon, ZaloIcon } from '../components/BrandIcons'
import { clinic, mapLink } from '../data/site'

export default function BookingSection({ title = 'Để Tâm Trí được đồng hành cùng bạn' }) {
  return (
    <section id="dat-lich" className="container-x scroll-mt-24 py-16 sm:py-24 lg:py-32">
      <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-honey-200 via-honey-100 to-blush-100 p-5 sm:p-10 lg:p-14">
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full border-[40px] border-white/40" />
        <div className="pointer-events-none absolute right-[-4rem] bottom-[-6rem] h-80 w-80 rounded-full bg-white/30" />

        <div className="relative grid gap-10 lg:grid-cols-5 lg:gap-14">
          <div className="px-1 pt-3 sm:p-0 lg:col-span-2">
            <p className="eyebrow">Đặt lịch khám</p>
            <h2 className="heading mt-4">{title}</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Để lại thông tin, phòng khám sẽ liên hệ tư vấn miễn phí trong thời gian sớm nhất.
            </p>

            <a href={`tel:${clinic.tel}`} className="group mt-8 flex items-center gap-4 rounded-3xl bg-white/70 p-4 backdrop-blur transition hover:bg-white">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-honey-300">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs text-muted">Hotline đặt lịch</span>
                <span className="block font-display text-2xl font-bold tracking-wide">{clinic.hotline}</span>
              </span>
            </a>

            <ul className="mt-6 space-y-4 text-sm text-ink-soft">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-honey-700" />
                <a href={mapLink} target="_blank" rel="noreferrer" className="hover:text-ink">
                  {clinic.address}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-honey-700" />
                <span>
                  {clinic.hours.map((h) => (
                    <span key={h.days} className="block">
                      {h.days}: <strong className="font-semibold text-ink">{h.time}</strong>
                    </span>
                  ))}
                </span>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              <a href={clinic.social.zalo} target="_blank" rel="noreferrer" className="btn bg-[#0068FF] px-4 py-2.5 text-white hover:opacity-90">
                <ZaloIcon className="h-5 w-5" /> Chat Zalo
              </a>
              <a href={clinic.social.messenger} target="_blank" rel="noreferrer" className="btn bg-white px-4 py-2.5 text-ink hover:bg-white/80">
                <MessengerIcon className="h-4 w-4 text-[#0A7CFF]" /> Messenger
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-xl shadow-honey-700/10 sm:p-8 lg:col-span-3">
            <h3 className="font-display text-2xl font-bold">Đăng ký thông tin</h3>
            <p className="mt-1 mb-6 text-sm text-muted">Các mục có dấu * là bắt buộc.</p>
            <BookingForm />
          </div>
        </div>
      </Reveal>
    </section>
  )
}
