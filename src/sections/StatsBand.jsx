import CountUp from '../components/CountUp'
import Reveal from '../components/Reveal'
import { stats } from '../data/site'

export default function StatsBand() {
  return (
    <section className="container-x relative z-10">
      <Reveal className="grid grid-cols-2 gap-2 rounded-[2rem] bg-night p-2 text-cream shadow-2xl shadow-ink/20 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-[1.5rem] bg-white/[0.04] p-6 sm:p-8">
            <p className="font-display text-4xl font-semibold text-honey-300 sm:text-5xl">
              <CountUp value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-3 font-semibold">{s.label}</p>
            <p className="mt-0.5 text-sm text-cream/60">{s.sub}</p>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
