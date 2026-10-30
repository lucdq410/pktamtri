import { Link } from 'react-router-dom'
import { cx } from '../lib/utils'

export default function Logo({ dark = false, className = '' }) {
  return (
    <Link to="/" className={cx('group inline-flex items-center gap-3', className)} aria-label="Tâm Trí – Trang chủ">
      <img
        src="/favicon.png"
        alt=""
        width="44"
        height="44"
        className="h-11 w-11 rounded-full shadow-sm ring-1 ring-honey-300/50 transition duration-500 group-hover:rotate-[-8deg]"
      />
      <span className="leading-none">
        <span className={cx('block font-display text-[1.375rem] font-bold tracking-wide uppercase', dark ? 'text-cream' : 'text-ink')}>
          Tâm Trí
        </span>
        <span
          className={cx(
            'mt-1 block text-[0.6875rem] font-semibold tracking-[0.22em] uppercase',
            dark ? 'text-honey-300' : 'text-honey-600',
          )}
        >
          Sản Phụ Khoa
        </span>
      </span>
    </Link>
  )
}
