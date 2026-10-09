import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import { SectionHeading, ServiceCard } from '../components/ui'
import { services } from '../data/services'

export default function ServicesSection({ detailed = false, showAllLink = true }) {
  return (
    <section className="relative bg-cream-200/60 py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Dịch vụ"
          title="Dịch vụ nổi bật"
          description="Đầy đủ các dịch vụ chất lượng và đa dạng – chăm sóc sức khỏe toàn diện từ khi thai kỳ bắt đầu cho đến khi bé chào đời khỏe mạnh."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 90} className="h-full">
              <ServiceCard service={s} index={i} detailed={detailed} />
            </Reveal>
          ))}
        </div>
        {showAllLink && (
          <Reveal className="mt-12 text-center">
            <Link to="/dich-vu" className="btn-ghost">
              Xem tất cả dịch vụ <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  )
}
