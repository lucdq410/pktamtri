import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import { SectionHeading } from '../components/ui'
import { getService } from '../data/services'

const visits = getService('kham-thai-dinh-ky').content.find((b) => b.type === 'timeline').items

const trimesters = [
  {
    name: '3 tháng đầu',
    range: 'Tuần 1 – 13',
    text: 'Kiểm tra sức khỏe mẹ, xét nghiệm cơ bản và siêu âm đầu tiên.',
    visits: visits.slice(0, 3),
    tone: 'bg-honey-200',
  },
  {
    name: '3 tháng giữa',
    range: 'Tuần 14 – 27',
    text: 'Siêu âm 3D, tầm soát dị tật, kiểm tra chỉ số sức khỏe thai nhi.',
    visits: visits.slice(3, 6),
    tone: 'bg-honey-300',
  },
  {
    name: '3 tháng cuối',
    range: 'Tuần 28 – 40',
    text: 'Đánh giá sự phát triển của bé, chuẩn bị cho việc sinh nở.',
    visits: visits.slice(6),
    tone: 'bg-honey-400',
  },
]

export default function JourneySection() {
  return (
    <section className="container-x py-24 lg:py-32">
      <SectionHeading
        eyebrow="Lịch khám thai"
        title="Hành trình 40 tuần, Tâm Trí luôn bên mẹ"
        description="9 lần khám thai định kỳ theo chuẩn y khoa – ở mỗi cột mốc, bác sĩ đều đồng hành để mẹ an tâm và bé phát triển toàn diện."
      />

      <Reveal className="mx-auto mt-14 flex max-w-4xl items-center gap-2" aria-hidden="true">
        {trimesters.map((t, i) => (
          <div key={t.name} className="flex flex-1 items-center gap-2">
            <span className={`h-2 flex-1 rounded-full ${t.tone}`} />
            {i === trimesters.length - 1 && <span className="font-display text-sm font-bold text-honey-700 italic">Bé chào đời</span>}
          </div>
        ))}
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {trimesters.map((t, i) => (
          <Reveal key={t.name} delay={i * 110} className="card flex flex-col p-7">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-display text-2xl font-bold">{t.name}</h3>
              <span className="text-xs font-semibold tracking-wide whitespace-nowrap text-honey-700">{t.range}</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted">{t.text}</p>
            <ol className="mt-6 space-y-4 border-t border-ink/5 pt-6">
              {t.visits.map((v) => (
                <li key={v.label} className="flex gap-4">
                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-sm font-bold text-ink ${t.tone}`}>
                    {visits.indexOf(v) + 1}
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-honey-700">{v.label}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-ink-soft">{v.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 text-center">
        <Link to="/dich-vu/kham-thai-dinh-ky" className="inline-flex items-center gap-2 text-sm font-semibold text-honey-700 transition-all hover:gap-3">
          Xem chi tiết lịch khám thai định kỳ <ArrowRight className="h-4 w-4" />
        </Link>
      </Reveal>
    </section>
  )
}
