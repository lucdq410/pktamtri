import { Quote } from 'lucide-react'
import Reveal from '../components/Reveal'
import { SectionHeading } from '../components/ui'
import { testimonials } from '../data/site'
import { cx } from '../lib/utils'

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute top-20 left-1/2 h-[26rem] w-[50rem] -translate-x-1/2 rounded-full bg-blush-100/80 blur-3xl" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Chia sẻ từ khách hàng"
          title="Niềm tin của các mẹ là món quà lớn nhất"
          description="Những lời chia sẻ chân thành từ các gia đình đã đồng hành cùng Tâm Trí."
        />
        <Reveal className="no-scrollbar -mx-4 mt-10 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-6 sm:-mx-6 sm:px-6 md:mx-0 md:mt-16 md:grid md:grid-cols-3 md:items-start md:gap-5 md:overflow-visible md:px-0 md:pb-0">
          {testimonials.map((t, i) => {
            const dark = i === 1
            return (
              <div key={t.name} className={cx('w-[86%] shrink-0 snap-start md:w-auto', dark && 'md:mt-10')}>
                <figure
                  className={cx(
                    'flex h-full flex-col rounded-[2rem] p-6 sm:p-8',
                    dark ? 'bg-ink text-cream shadow-2xl shadow-ink/20' : 'card',
                  )}
                >
                  <Quote className={cx('h-9 w-9', dark ? 'text-honey-300' : 'text-honey-400')} strokeWidth={1.5} />
                  <blockquote className={cx('mt-4 mb-6 text-base leading-relaxed sm:mt-5 sm:mb-8 sm:text-[1.0625rem]', dark ? 'text-cream/85' : 'text-ink-soft')}>
                    “{t.quote}”
                  </blockquote>
                  <figcaption className={cx('mt-auto flex items-center gap-3 border-t pt-5 sm:pt-6', dark ? 'border-cream/10' : 'border-ink/5')}>
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
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
