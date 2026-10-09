import Reveal from '../components/Reveal'
import { PageHero, ServiceCard } from '../components/ui'
import JourneySection from '../sections/JourneySection'
import BookingSection from '../sections/BookingSection'
import { services } from '../data/services'
import { useTitle } from '../lib/utils'

export default function Services() {
  useTitle('Dịch vụ')
  return (
    <>
      <PageHero
        eyebrow="Dịch vụ"
        title="Chăm sóc trọn vẹn cho mẹ và bé"
        description="Tâm Trí cung cấp đầy đủ các dịch vụ chất lượng và đa dạng – từ chăm sóc sức khỏe toàn diện khi thai kỳ bắt đầu cho đến khi bé chào đời khỏe mạnh."
        crumbs={[{ label: 'Dịch vụ' }]}
      />
      <section className="container-x pb-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 90} className="h-full">
              <ServiceCard service={s} index={i} detailed />
            </Reveal>
          ))}
        </div>
      </section>
      <JourneySection />
      <BookingSection />
    </>
  )
}
