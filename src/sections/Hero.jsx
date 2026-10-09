import { CalendarCheck, Flower2, GraduationCap, Phone, ScanHeart } from 'lucide-react'
import Reveal from '../components/Reveal'
import { useBooking } from '../components/Booking'
import { clinic, images } from '../data/site'

function HeroIllustration() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.75)_1px,transparent_1px)] bg-[size:18px_18px] opacity-50" />
      <div className="absolute top-[44%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative grid place-items-center">
          <span className="absolute h-[23rem] w-[23rem] rounded-full border border-white/50" />
          <span className="absolute h-[17.5rem] w-[17.5rem] rounded-full border border-white/70" />
          <span className="absolute h-[12.5rem] w-[12.5rem] rounded-full bg-white/30" />
          <span className="absolute h-40 w-40 animate-pulse-ring rounded-full bg-white/50" />
          <img src="/favicon.png" alt="" className="relative h-40 w-40 rounded-full shadow-2xl ring-8 ring-white/70" />
        </div>
      </div>
      <svg className="absolute bottom-[17%] left-0 w-full text-white" viewBox="0 0 400 60" fill="none" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M0 32 H128 L140 32 L150 10 L163 54 L175 20 L184 32 H400"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        />
      </svg>
    </div>
  )
}

function Chip({ icon: IconComp, title, text, className = '' }) {
  return (
    <div className={`absolute flex animate-float items-center gap-3 rounded-2xl bg-white/90 p-3 pr-5 shadow-xl shadow-ink/10 ring-1 ring-ink/5 backdrop-blur ${className}`}>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-honey-100 text-honey-700">
        <IconComp className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <span className="leading-tight">
        <span className="block text-sm font-semibold text-ink">{title}</span>
        <span className="mt-0.5 block text-xs text-muted">{text}</span>
      </span>
    </div>
  )
}

export default function Hero() {
  const { openBooking } = useBooking()

  return (
    <section className="relative overflow-x-clip">
      <div className="pointer-events-none absolute -top-48 right-[-12%] -z-10 h-[42rem] w-[42rem] rounded-full bg-honey-200/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-14rem] left-[-12%] -z-10 h-[32rem] w-[32rem] rounded-full bg-blush-200/60 blur-3xl" />

      <div className="container-x relative grid items-center gap-16 pt-6 pb-24 lg:grid-cols-12 lg:gap-10 lg:pt-10 lg:pb-32">
        <div className="lg:col-span-7">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-honey-200 bg-white/70 px-4 py-1.5 text-xs font-semibold text-ink-soft backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-honey-400" />
              Phòng khám Sản Phụ Khoa · Quy Nhơn
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-[2.625rem] leading-[1.08] font-semibold tracking-tight text-balance text-ink sm:text-6xl xl:text-[4.25rem]">
              Không gì quý hơn <em className="text-honey-600">sức khỏe</em> và{' '}
              <em className="relative whitespace-nowrap text-honey-600">
                hạnh phúc
                <svg className="absolute -bottom-1 left-0 h-3 w-full text-honey-300" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M3 9 C 50 2, 150 2, 197 8" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </em>{' '}
              của bạn
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
              Hơn cả một phòng khám, Tâm Trí là nơi khởi đầu của những hành trình thiêng liêng. Mỗi nụ cười của mẹ, mỗi nhịp tim đầu tiên của con là động lực để chúng tôi cống hiến từng ngày.
            </p>
          </Reveal>

          <Reveal delay={240} className="mt-9 flex flex-wrap gap-3">
            <button type="button" onClick={() => openBooking()} className="btn-primary px-7 py-3.5">
              <CalendarCheck className="h-4 w-4" /> Đặt lịch khám
            </button>
            <a href={`tel:${clinic.tel}`} className="btn-ghost px-7 py-3.5">
              <Phone className="h-4 w-4" /> {clinic.hotline}
            </a>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-12 grid max-w-xl grid-cols-3 divide-x divide-ink/10 border-t border-ink/10 pt-6">
              {[
                ['BS CKII', 'trực tiếp thăm khám'],
                ['25+ năm', 'kinh nghiệm chuyên môn'],
                ['3.000', 'bệnh nhân tin chọn'],
              ].map(([value, label]) => (
                <div key={value} className="px-3 first:pl-0 sm:px-5">
                  <dt className="font-display text-xl font-semibold text-ink sm:text-2xl">{value}</dt>
                  <dd className="mt-1 text-xs leading-snug text-muted sm:text-sm">{label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative mx-auto w-full max-w-[26rem] lg:col-span-5 lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2.5rem] bg-gradient-to-b from-honey-300 via-honey-200 to-blush-100 shadow-[0_40px_80px_-40px_rgba(181,122,18,0.5)] ring-8 ring-white/70">
            {images.hero ? (
              <img src={images.hero} alt="Phòng khám Sản Phụ Khoa Tâm Trí" className="h-full w-full object-cover" />
            ) : (
              <HeroIllustration />
            )}
          </div>
          <Chip icon={GraduationCap} title="BS CKII Đỗ Văn Tâm" text="20+ năm chuyên khoa Phụ Sản" className="top-[16%] -left-3 sm:-left-12" />
          <Chip icon={ScanHeart} title="Siêu âm 3D/4D" text="Thấy rõ từng cử động của bé" className="top-[50%] -right-3 [animation-delay:1.6s] sm:-right-10" />
          <Chip icon={Flower2} title="Không gian chuẩn spa" text="Riêng tư · thư giãn" className="-bottom-5 left-3 [animation-delay:3.2s] sm:-left-6" />
        </Reveal>
      </div>
    </section>
  )
}
