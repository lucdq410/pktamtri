import { Link } from 'react-router-dom'
import { ArrowUpRight, CalendarDays, ChevronRight } from 'lucide-react'
import Icon from './Icon'
import Reveal from './Reveal'
import { cx, formatDate } from '../lib/utils'

export function SectionHeading({ eyebrow, title, description, align = 'center', dark = false, className = '' }) {
  return (
    <Reveal className={cx(align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl', className)}>
      {eyebrow && <p className={cx('eyebrow', dark && 'text-honey-300 before:bg-honey-300')}>{eyebrow}</p>}
      <h2 className={cx('heading mt-4', dark && 'text-cream')}>{title}</h2>
      {description && <p className={cx('mt-4 text-[1.125rem] leading-relaxed', dark ? 'text-cream/70' : 'text-muted')}>{description}</p>}
    </Reveal>
  )
}

export function ServiceCard({ service, index, detailed = false }) {
  return (
    <Link
      to={`/dich-vu/${service.slug}`}
      className="group card relative flex h-full flex-col p-7 transition duration-500 hover:-translate-y-1.5 hover:border-honey-200 hover:shadow-[0_30px_60px_-30px_rgba(181,122,18,0.35)]"
    >
      <span className="absolute top-6 right-7 font-display text-4xl font-bold text-honey-100 transition group-hover:text-honey-200">
        {String(index + 1).padStart(2, '0')}
      </span>
      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-honey-100 text-honey-600 transition duration-500 group-hover:rotate-[-6deg] group-hover:bg-honey-400 group-hover:text-ink">
        <Icon name={service.icon} className="h-7 w-7" strokeWidth={1.6} />
      </span>
      <h3 className="mt-6 text-xl font-semibold text-ink">{service.title}</h3>
      <p className="mt-2 text-base leading-relaxed text-muted">{detailed ? service.summary : service.tagline}</p>
      <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-honey-700">
        Tìm hiểu thêm
        <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  )
}

const tones = [
  'from-honey-200 via-honey-100 to-blush-100',
  'from-blush-200 via-blush-100 to-honey-100',
  'from-honey-100 via-cream-200 to-honey-200',
  'from-blush-100 via-honey-100 to-blush-200',
]

export function PostCover({ post, index = 0, className = '', large = false }) {
  return (
    <div className={cx('relative overflow-hidden bg-gradient-to-br', tones[index % tones.length], className)}>
      <div className="absolute -right-8 -bottom-10 h-40 w-40 rounded-full border-[22px] border-white/40" />
      <div className="absolute top-6 -left-6 h-20 w-20 rounded-full bg-white/30" />
      <Icon
        name={post.icon}
        className={cx('absolute text-honey-700/70', large ? 'right-10 bottom-10 h-28 w-28' : 'right-6 bottom-6 h-16 w-16')}
        strokeWidth={1.1}
      />
      <span className="absolute top-4 left-4 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-ink backdrop-blur">
        {post.category}
      </span>
    </div>
  )
}

export function PostCard({ post, index }) {
  return (
    <Link to={`/kien-thuc/${post.slug}`} className="group flex h-full flex-col">
      <PostCover post={post} index={index} className="aspect-[4/3] rounded-3xl transition duration-500 group-hover:shadow-xl group-hover:shadow-honey-600/10" />
      <p className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-muted">
        <CalendarDays className="h-3.5 w-3.5" /> {formatDate(post.date)}
      </p>
      <h3 className="mt-2 line-clamp-3 text-lg leading-snug font-semibold text-ink transition group-hover:text-honey-700">
        {post.title}
      </h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
    </Link>
  )
}

export function PageHero({ eyebrow, title, description, crumbs = [], icon, children }) {
  return (
    <section className="relative overflow-x-clip">
      <div className="pointer-events-none absolute -top-32 -right-24 -z-10 h-[28rem] w-[28rem] rounded-full bg-honey-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 -z-10 h-[24rem] w-[24rem] rounded-full bg-blush-200/50 blur-3xl" />
      <div className="pointer-events-none absolute top-10 right-[8%] hidden h-64 w-64 rounded-full border-[36px] border-white/60 lg:block" />
      <div className="container-x relative pt-8 pb-14 lg:pt-12 lg:pb-20">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
          <Link to="/" className="transition hover:text-ink">
            Trang chủ
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="inline-flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5" />
              {c.to ? (
                <Link to={c.to} className="transition hover:text-ink">
                  {c.label}
                </Link>
              ) : (
                <span className="text-ink" aria-current="page">
                  {c.label}
                </span>
              )}
            </span>
          ))}
        </nav>
        <div className="mt-8 max-w-3xl">
          {icon && (
            <span className="mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-white text-honey-600 shadow-lg shadow-honey-600/10">
              <Icon name={icon} className="h-8 w-8" strokeWidth={1.5} />
            </span>
          )}
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="mt-4 font-display text-4xl leading-[1.12] font-bold text-ink sm:text-5xl lg:text-[3.5rem]">{title}</h1>
          {description && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{description}</p>}
          {children}
        </div>
      </div>
    </section>
  )
}
