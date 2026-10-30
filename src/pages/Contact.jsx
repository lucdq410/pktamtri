import { Clock, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react'
import BookingForm from '../components/BookingForm'
import Reveal from '../components/Reveal'
import { FacebookIcon, MessengerIcon, ZaloIcon } from '../components/BrandIcons'
import { PageHero } from '../components/ui'
import { clinic, mapEmbed, mapLink } from '../data/site'
import { useTitle } from '../lib/utils'

function InfoCard({ icon: IconComp, title, children, delay }) {
  return (
    <Reveal delay={delay} className="card flex h-full flex-col p-5 sm:p-6">
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-honey-100 text-honey-700">
        <IconComp className="h-5 w-5" />
      </span>
      <p className="mt-5 text-xs font-semibold tracking-[0.18em] text-honey-600 uppercase">{title}</p>
      <div className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{children}</div>
    </Reveal>
  )
}

export default function Contact() {
  useTitle('Liên hệ')
  const pill = 'inline-flex items-center gap-1.5 rounded-full bg-cream px-3 py-1.5 text-xs font-semibold text-ink ring-1 ring-ink/10 transition hover:ring-ink/30'

  return (
    <>
      <PageHero
        eyebrow="Liên hệ"
        title="Tâm Trí luôn sẵn sàng lắng nghe bạn"
        description="Gọi hotline, nhắn tin hoặc để lại thông tin – phòng khám sẽ liên hệ tư vấn miễn phí trong thời gian sớm nhất."
        crumbs={[{ label: 'Liên hệ' }]}
      />

      <section className="container-x">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <InfoCard icon={MapPin} title="Địa chỉ" delay={0}>
            <p>{clinic.address}</p>
            <a href={mapLink} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1.5 font-semibold text-honey-700 hover:text-honey-600">
              <Navigation className="h-3.5 w-3.5" /> Chỉ đường
            </a>
          </InfoCard>
          <InfoCard icon={Phone} title="Hotline" delay={80}>
            <a href={`tel:${clinic.tel}`} className="font-display text-2xl font-bold text-ink hover:text-honey-700">
              {clinic.hotline}
            </a>
            <p className="mt-1">Đặt lịch & tư vấn miễn phí</p>
          </InfoCard>
          <InfoCard icon={Clock} title="Giờ làm việc" delay={160}>
            {clinic.hours.map((h) => (
              <p key={h.days}>
                {h.days}
                <br />
                <strong className="font-semibold text-ink">{h.time}</strong>
              </p>
            ))}
          </InfoCard>
          <InfoCard icon={MessageCircle} title="Nhắn tin" delay={240}>
            <p>Chat trực tiếp với phòng khám qua:</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <a href={clinic.social.zalo} target="_blank" rel="noreferrer" className={pill}>
                <ZaloIcon className="h-4 w-4 text-[#0068FF]" /> Zalo
              </a>
              <a href={clinic.social.messenger} target="_blank" rel="noreferrer" className={pill}>
                <MessengerIcon className="h-3.5 w-3.5 text-[#0A7CFF]" /> Messenger
              </a>
              <a href={clinic.social.facebook} target="_blank" rel="noreferrer" className={pill}>
                <FacebookIcon className="h-3.5 w-3.5 text-[#1877F2]" /> Facebook
              </a>
            </div>
          </InfoCard>
        </div>
      </section>

      <section className="container-x grid gap-6 py-10 sm:py-16 lg:grid-cols-2 lg:pb-28">
        <Reveal className="card p-6 sm:p-10">
          <p className="eyebrow">Để lại lời nhắn</p>
          <h2 className="mt-3 font-display text-3xl font-bold">Đăng ký tư vấn</h2>
          <p className="mt-2 mb-8 text-sm text-muted">Các mục có dấu * là bắt buộc.</p>
          <BookingForm />
        </Reveal>
        <Reveal delay={120} className="overflow-hidden rounded-3xl bg-cream-200 ring-1 ring-ink/5">
          <iframe
            title={`Bản đồ ${clinic.name}`}
            src={mapEmbed}
            className="h-full min-h-[20rem] w-full border-0 grayscale-[30%] sm:min-h-[26rem]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </section>
    </>
  )
}
