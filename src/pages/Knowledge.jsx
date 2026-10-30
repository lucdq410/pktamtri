import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CalendarDays } from 'lucide-react'
import Reveal from '../components/Reveal'
import { PageHero, PostCard, PostCover } from '../components/ui'
import BookingSection from '../sections/BookingSection'
import { posts } from '../data/posts'
import { cx, formatDate, useTitle } from '../lib/utils'

const ALL = 'Tất cả'
const categories = [ALL, ...new Set(posts.map((p) => p.category))]

export default function Knowledge() {
  useTitle('Kiến thức')
  const [category, setCategory] = useState(ALL)
  const list = category === ALL ? posts : posts.filter((p) => p.category === category)
  const [featured, ...rest] = list

  return (
    <>
      <PageHero
        eyebrow="Kiến thức"
        title="Cẩm nang thai kỳ & sức khỏe phụ nữ"
        description="Những chia sẻ hữu ích từ BS CKII Đỗ Văn Tâm, giúp mẹ an tâm hơn trên hành trình làm mẹ."
        crumbs={[{ label: 'Kiến thức' }]}
      />

      <section className="container-x pb-8">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Chủ đề">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={c === category}
              onClick={() => setCategory(c)}
              className={cx(
                'cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition',
                c === category ? 'bg-ink text-cream' : 'bg-white text-ink-soft ring-1 ring-ink/10 hover:ring-ink/30',
              )}
            >
              {c}
            </button>
          ))}
        </div>

        {featured && (
          <Reveal key={featured.slug} className="mt-10">
            <Link to={`/kien-thuc/${featured.slug}`} className="group card grid overflow-hidden lg:grid-cols-2">
              <PostCover post={featured} index={posts.indexOf(featured)} large className="min-h-64 lg:min-h-[22rem]" />
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
                <p className="inline-flex items-center gap-2 text-xs font-medium text-muted">
                  <CalendarDays className="h-3.5 w-3.5" /> {formatDate(featured.date)}
                </p>
                <h2 className="mt-3 font-display text-2xl leading-snug font-bold transition group-hover:text-honey-700 sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-4 leading-relaxed text-muted">{featured.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-honey-700 transition-all group-hover:gap-3">
                  Đọc bài viết <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </Reveal>
        )}

        {rest.length > 0 && (
          <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 80} className="h-full">
                <PostCard post={p} index={posts.indexOf(p)} />
              </Reveal>
            ))}
          </div>
        )}
      </section>

      <BookingSection title="Có thắc mắc? Hỏi bác sĩ Tâm" />
    </>
  )
}
