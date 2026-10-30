import { Link, useParams } from 'react-router-dom'
import { ArrowUpRight, CalendarCheck, Phone } from 'lucide-react'
import Icon from '../components/Icon'
import RichContent from '../components/RichContent'
import SidebarBooking from '../components/SidebarBooking'
import { useBooking } from '../components/Booking'
import { PageHero } from '../components/ui'
import NotFound from './NotFound'
import { getService, services } from '../data/services'
import { clinic } from '../data/site'
import { useTitle } from '../lib/utils'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getService(slug)
  const { openBooking } = useBooking()
  useTitle(service?.title ?? 'Không tìm thấy trang')

  if (!service) return <NotFound />

  const others = services.filter((s) => s.slug !== slug)

  return (
    <>
      <PageHero
        icon={service.icon}
        eyebrow="Dịch vụ"
        title={service.title}
        description={service.summary}
        crumbs={[{ label: 'Dịch vụ', to: '/dich-vu' }, { label: service.title }]}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <button type="button" onClick={() => openBooking(service.slug)} className="btn-primary">
            <CalendarCheck className="h-4 w-4" /> Đặt lịch dịch vụ này
          </button>
          <a href={`tel:${clinic.tel}`} className="btn-ghost">
            <Phone className="h-4 w-4" /> {clinic.hotline}
          </a>
        </div>
      </PageHero>

      <section className="container-x grid gap-14 pb-24 lg:grid-cols-12 lg:pb-32">
        <article className="min-w-0 lg:col-span-8">
          <RichContent blocks={service.content} />

          <div className="mt-14 flex flex-col justify-between gap-6 rounded-[2rem] bg-gradient-to-br from-honey-200 to-blush-100 p-8 sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-2xl font-bold">Còn điều gì băn khoăn?</p>
              <p className="mt-1 text-sm text-ink-soft">Liên hệ hotline để được bác sĩ tư vấn trực tiếp.</p>
            </div>
            <a href={`tel:${clinic.tel}`} className="btn-primary shrink-0">
              <Phone className="h-4 w-4" /> {clinic.hotline}
            </a>
          </div>
        </article>

        <aside className="lg:col-span-4">
          <div className="space-y-6 lg:sticky lg:top-28">
            <SidebarBooking service={service.slug} title={`Đặt lịch ${service.title[0].toLowerCase()}${service.title.slice(1)}`} />
            <div className="card p-6">
              <p className="text-xs font-semibold tracking-[0.18em] text-honey-600 uppercase">Dịch vụ khác</p>
              <ul className="mt-4 space-y-1">
                {others.map((s) => (
                  <li key={s.slug}>
                    <Link to={`/dich-vu/${s.slug}`} className="group flex items-center gap-3 rounded-2xl p-2.5 transition hover:bg-cream">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-honey-100 text-honey-600">
                        <Icon name={s.icon} className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <span className="flex-1 text-sm font-medium">{s.title}</span>
                      <ArrowUpRight className="h-4 w-4 text-muted transition group-hover:text-honey-600" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </section>
    </>
  )
}
