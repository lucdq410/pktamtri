import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import { PostCard, SectionHeading } from '../components/ui'
import { posts } from '../data/posts'

export default function LatestPosts() {
  return (
    <section className="bg-cream-200/60 py-24 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Kiến thức"
            title="Cẩm nang cho mẹ bầu"
            description="Bác sĩ Tâm giải đáp những thắc mắc thường gặp trong thai kỳ."
          />
          <Reveal className="shrink-0">
            <Link to="/kien-thuc" className="btn-ghost">
              Xem tất cả bài viết <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {posts.slice(0, 4).map((p, i) => (
            <Reveal key={p.slug} delay={i * 80} className="h-full">
              <PostCard post={p} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
