import { Link, useParams } from 'react-router-dom'
import { CalendarDays, Stethoscope, Tag } from 'lucide-react'
import RichContent from '../components/RichContent'
import SidebarBooking from '../components/SidebarBooking'
import Reveal from '../components/Reveal'
import { PageHero, PostCard, PostCover } from '../components/ui'
import NotFound from './NotFound'
import { getPost, posts } from '../data/posts'
import { formatDate, useTitle } from '../lib/utils'

export default function Article() {
  const { slug } = useParams()
  const post = getPost(slug)
  useTitle(post?.title ?? 'Không tìm thấy trang')

  if (!post) return <NotFound />

  const index = posts.indexOf(post)
  const others = posts.filter((p) => p !== post).slice(0, 3)

  return (
    <>
      <PageHero eyebrow={post.category} title={post.title} crumbs={[{ label: 'Kiến thức', to: '/kien-thuc' }, { label: post.category }]}>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="h-4 w-4" /> {formatDate(post.date)}
          </span>
          <span className="inline-flex items-center gap-2">
            <Stethoscope className="h-4 w-4" /> Phòng khám Sản Phụ Khoa Tâm Trí
          </span>
        </div>
      </PageHero>

      <section className="container-x grid gap-10 pb-16 sm:pb-24 lg:gap-14 lg:grid-cols-12">
        <article className="min-w-0 lg:col-span-8">
          <figure className="mb-8 sm:mb-12">
            <PostCover post={post} index={index} large className="aspect-[16/8] rounded-[2rem]" />
            {post.image && (
              <figcaption className="mt-2 text-right text-xs text-muted">
                Ảnh minh họa: {post.image.author} /{' '}
                <a href={post.image.source} target="_blank" rel="noreferrer" className="underline hover:text-ink">
                  Wikimedia Commons
                </a>
                , {post.image.license}
              </figcaption>
            )}
          </figure>
          <RichContent blocks={post.content} />

          <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-ink/10 pt-8">
            <Tag className="h-4 w-4 text-muted" />
            {post.tags.map((t) => (
              <span key={t} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-ink-soft ring-1 ring-ink/10">
                {t}
              </span>
            ))}
          </div>
        </article>

        <aside className="lg:col-span-4">
          <div className="space-y-6 lg:sticky lg:top-28">
            <SidebarBooking title="Cần bác sĩ tư vấn thêm?" />
            <div className="card p-6">
              <p className="text-xs font-semibold tracking-[0.18em] text-honey-600 uppercase">Bài viết mới</p>
              <ul className="mt-4 divide-y divide-ink/5">
                {posts
                  .filter((p) => p !== post)
                  .map((p) => (
                    <li key={p.slug}>
                      <Link to={`/kien-thuc/${p.slug}`} className="group block py-3.5">
                        <span className="line-clamp-2 text-sm leading-snug font-medium transition group-hover:text-honey-700">{p.title}</span>
                        <span className="mt-1 block text-xs text-muted">{formatDate(p.date)}</span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </aside>
      </section>

      <section className="bg-cream-200/60 py-14 sm:py-20">
        <div className="container-x">
          <h2 className="heading">Bài viết khác</h2>
          <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80} className="h-full">
                <PostCard post={p} index={posts.indexOf(p)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
