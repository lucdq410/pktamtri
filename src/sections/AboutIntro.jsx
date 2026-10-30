import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import { SectionHeading } from '../components/ui'
import { pillars } from '../data/site'

export default function AboutIntro({ showLink = true }) {
  return (
    <section className="container-x py-24 lg:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading align="left" eyebrow="Về Tâm Trí" title="Hơn cả một phòng khám – nơi khởi đầu những hành trình thiêng liêng" />
          <Reveal delay={100} className="mt-6 space-y-4 text-[1.125rem] leading-relaxed text-muted">
            <p>
              Chúng tôi không chỉ chữa lành, mà còn đồng hành để mang đến sức khỏe và niềm vui trọn vẹn nhất. Với trái tim tận tâm và trí tuệ vượt trội, Tâm Trí cam kết mang đến sự an tâm trọn vẹn trong từng khoảnh khắc của bạn.
            </p>
            <p>
              Hạnh phúc của gia đình bạn là đích đến cho mọi nỗ lực của chúng tôi. Với tâm huyết của người thầy thuốc, chúng tôi chăm sóc bạn bằng tất cả sự tận tụy và chuyên môn cao nhất.
            </p>
          </Reveal>
          {showLink && (
            <Reveal delay={180}>
              <Link to="/gioi-thieu" className="btn-ghost mt-8">
                Câu chuyện của Tâm Trí <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Reveal className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-honey-100 to-white p-8 ring-1 ring-honey-200/70">
            <span className="font-display text-7xl leading-none font-bold text-honey-400">Tâm</span>
            <p className="mt-6 text-lg font-semibold">Trái tim tận tâm</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Lắng nghe, chia sẻ và giải đáp từng lo âu – đảm bảo sự an tâm tuyệt đối cho mỗi mẹ bầu.
            </p>
          </Reveal>
          <Reveal delay={120} className="relative overflow-hidden rounded-[2rem] bg-ink p-8 text-cream sm:mt-14">
            <div className="absolute -right-10 -bottom-10 h-36 w-36 rounded-full border-[20px] border-honey-400/15" />
            <span className="font-display text-7xl leading-none font-bold text-honey-300">Trí</span>
            <p className="mt-6 text-lg font-semibold">Trí tuệ vượt trội</p>
            <p className="mt-2 text-sm leading-relaxed text-cream/70">
              Chuyên môn cao cùng hệ thống máy móc hiện đại cho kết quả chính xác, an toàn cho mẹ và bé.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-20 grid gap-5 md:grid-cols-3">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 100} className="group rounded-[2rem] border border-ink/5 bg-white/60 p-7 transition hover:bg-white">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-honey-100 text-honey-700 transition group-hover:bg-honey-400 group-hover:text-ink">
              <Icon name={p.icon} className="h-6 w-6" strokeWidth={1.6} />
            </span>
            <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
