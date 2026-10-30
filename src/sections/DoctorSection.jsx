import { Link } from 'react-router-dom'
import { ArrowRight, CalendarCheck, Quote, Stethoscope } from 'lucide-react'
import Reveal from '../components/Reveal'
import { useBooking } from '../components/Booking'
import { SectionHeading } from '../components/ui'
import { doctor, images } from '../data/site'

export default function DoctorSection({ showLink = true }) {
  const { openBooking } = useBooking()

  return (
    <section className="relative overflow-hidden bg-night py-24 text-cream lg:py-32">
      <div className="pointer-events-none absolute top-1/3 -left-40 h-[30rem] w-[30rem] rounded-full bg-honey-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -top-24 right-[-6rem] h-80 w-80 rounded-full border border-honey-300/15" />
      <div className="pointer-events-none absolute -top-10 right-[-2rem] h-56 w-56 rounded-full border border-honey-300/10" />

      <div className="container-x relative grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2.5rem] bg-gradient-to-b from-honey-400/35 via-honey-300/10 to-white/[0.02] ring-1 ring-honey-300/25">
            {images.doctor ? (
              <img src={images.doctor} alt={`${doctor.title} ${doctor.name}`} className="h-full w-full object-cover" />
            ) : (
              <div className="absolute inset-0 grid place-items-center">
                <span className="absolute h-72 w-72 rounded-full border border-honey-300/20" />
                <span className="absolute h-52 w-52 rounded-full border border-honey-300/25" />
                <span className="absolute h-36 w-36 rounded-full bg-honey-300/10" />
                <Stethoscope className="relative h-24 w-24 text-honey-300" strokeWidth={1} />
                <p className="absolute inset-x-0 bottom-10 text-center font-display text-2xl text-cream/90">{doctor.short}</p>
              </div>
            )}
          </div>
          <div className="absolute top-[38%] -right-2 rounded-3xl bg-honey-400 p-5 text-ink shadow-2xl shadow-black/30 sm:-right-8">
            <p className="font-display text-4xl leading-none font-bold">20+</p>
            <p className="mt-1.5 max-w-[8rem] text-xs leading-snug font-medium">năm kinh nghiệm chuyên khoa Phụ Sản</p>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            dark
            align="left"
            eyebrow="Bác sĩ phụ trách"
            title={
              <>
                BS CKII <span className="text-honey-300">{doctor.name}</span>
              </>
            }
            description={doctor.bio}
          />

          <Reveal delay={100} className="mt-10 grid gap-3 sm:grid-cols-3">
            {doctor.education.map((e) => (
              <div key={e.year} className="rounded-2xl border border-cream/10 bg-white/[0.03] p-5">
                <p className="font-display text-2xl font-bold text-honey-300">{e.year}</p>
                <p className="mt-2 text-sm font-semibold">{e.title}</p>
                <p className="mt-0.5 text-xs text-cream/60">{e.place}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={180} className="mt-10 flex gap-4 border-l-2 border-honey-400 pl-5">
            <Quote className="h-6 w-6 shrink-0 text-honey-400" />
            <p className="font-display text-lg leading-relaxed text-cream/90 italic">
              Hạnh phúc của gia đình bạn là đích đến cho mọi nỗ lực của chúng tôi.
            </p>
          </Reveal>

          <Reveal delay={240} className="mt-10 flex flex-wrap gap-3">
            <button type="button" onClick={() => openBooking()} className="btn-honey">
              <CalendarCheck className="h-4 w-4" /> Đặt lịch với bác sĩ
            </button>
            {showLink && (
              <Link to="/gioi-thieu" className="btn border border-cream/20 text-cream hover:border-cream/50">
                Về phòng khám <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
