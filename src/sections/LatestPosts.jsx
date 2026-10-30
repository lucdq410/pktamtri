import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import { PostCard, SectionHeading } from '../components/ui'
import { posts } from '../data/posts'

export default function LatestPosts() {
  return (
    <section className="bg-cream-200/60 py-16 sm:py-24 lg:py-32">
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
        <Reveal className="no-scrollbar -mx-4 mt-8 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:mt-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
          {posts.slice(0, 4).map((p, i) => (
            <div key={p.slug} className="w-[78%] shrink-0 snap-start sm:w-auto">
              <PostCard post={p} index={i} />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
