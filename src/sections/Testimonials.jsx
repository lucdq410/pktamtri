import { Quote } from 'lucide-react'
import Reveal from '../components/Reveal'
import { SectionHeading } from '../components/ui'
import { testimonials } from '../data/site'
import { cx } from '../lib/utils'

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute top-20 left-1/2 h-[26rem] w-[50rem] -translate-x-1/2 rounded-full bg-blush-100/80 blur-3xl" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Chia sẻ từ khách hàng"
          title="Niềm tin của các mẹ là món quà lớn nhất"
          description="Những lời chia sẻ chân thành từ các gia đình đã đồng hành cùng Tâm Trí."
        />
        <div className="mt-16 grid items-start gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => {
            const dark = i === 1
            return (
              <Reveal key={t.name} delay={i * 110} className={cx(dark && 'md:mt-10')}>
                <figure
                  className={cx(
                    'flex h-full flex-col rounded-[2rem] p-8',
                    dark ? 'bg-ink text-cream shadow-2xl shadow-ink/20' : 'card',
                  )}
                >
                  <Quote className={cx('h-9 w-9', dark ? 'text-honey-300' : 'text-honey-400')} strokeWidth={1.5} />
                  <blockquote className={cx('mt-5 text-[1.0625rem] leading-relaxed', dark ? 'text-cream/85' : 'text-ink-soft')}>
                    “{t.quote}”
                  </blockquote>
                  <figcaption className={cx('mt-8 flex items-center gap-3 border-t pt-6', dark ? 'border-cream/10' : 'border-ink/5')}>
                    <span
                      className={cx(
                        'grid h-11 w-11 place-items-center rounded-full font-display text-lg font-bold',
                        dark ? 'bg-honey-400 text-ink' : 'bg-honey-100 text-honey-700',
                      )}
                    >
                      {t.name.split(' ').pop()[0]}
                    </span>
                    <span>
                      <span className="block font-semibold">{t.name}</span>
                      <span className={cx('block text-xs', dark ? 'text-cream/60' : 'text-muted')}>{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
