import { CircleCheck, Flower2 } from 'lucide-react'
import Reveal from '../components/Reveal'
import { PageHero, SectionHeading } from '../components/ui'
import StatsBand from '../sections/StatsBand'
import AboutIntro from '../sections/AboutIntro'
import DoctorSection from '../sections/DoctorSection'
import ServicesSection from '../sections/ServicesSection'
import Testimonials from '../sections/Testimonials'
import BookingSection from '../sections/BookingSection'
import { images } from '../data/site'
import { useTitle } from '../lib/utils'

const spaFeatures = [
  'Thiết kế theo phong cách spa giúp mẹ bầu thư giãn',
  'Phòng chờ riêng biệt, thoáng mát, đầy đủ tiện nghi',
  'Riêng tư và thoải mái trong suốt quá trình thăm khám',
  'Xét nghiệm, siêu âm thực hiện ngay tại phòng khám',
]

export default function About() {
  useTitle('Giới thiệu')
  return (
    <>
      <PageHero
        eyebrow="Giới thiệu"
        title="Tận tâm đồng hành cùng bạn"
        description="Phòng khám Sản Phụ Khoa Tâm Trí được dẫn dắt bởi BS CKII Đỗ Văn Tâm – hơn 20 năm kinh nghiệm chuyên khoa Phụ Sản tại Bệnh viện Đa khoa tỉnh Bình Định."
        crumbs={[{ label: 'Giới thiệu' }]}
      />
      <StatsBand />
      <AboutIntro showLink={false} />
      <DoctorSection showLink={false} />

      <section className="container-x py-24 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative order-last lg:order-first">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blush-200 via-blush-100 to-honey-100">
              {images.space ? (
                <img src={images.space} alt="Không gian Phòng khám Tâm Trí" className="h-full w-full object-cover" />
              ) : (
                <div className="absolute inset-0 grid place-items-center">
                  <span className="absolute h-80 w-80 rounded-full border border-white/70" />
                  <span className="absolute h-56 w-56 rounded-full bg-white/40" />
                  <Flower2 className="relative h-24 w-24 text-blush-400" strokeWidth={1} />
                </div>
              )}
            </div>
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Không gian"
              title="Đi khám mà như đi spa"
              description="Ngoài chuyên môn, Tâm Trí chú trọng tạo nên một không gian hiện đại, thân thiện và thoải mái – để lần đầu đến thăm khám, bạn đã cảm thấy tin cậy và an tâm."
            />
            <Reveal delay={120}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {spaFeatures.map((f) => (
                  <li key={f} className="flex gap-3 rounded-2xl bg-white/70 p-4 text-sm leading-relaxed text-ink-soft ring-1 ring-ink/5">
                    <CircleCheck className="h-5 w-5 shrink-0 text-honey-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <ServicesSection detailed showAllLink={false} />
      <Testimonials />
      <BookingSection />
    </>
  )
}
