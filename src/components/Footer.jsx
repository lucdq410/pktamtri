import { Link } from 'react-router-dom'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import Logo from './Logo'
import { FacebookIcon, MessengerIcon, ZaloIcon } from './BrandIcons'
import { clinic, mapLink } from '../data/site'
import { services } from '../data/services'

export default function Footer() {
  const heading = 'text-xs font-semibold tracking-[0.18em] text-honey-300 uppercase'
  const link = 'text-sm text-cream/70 transition hover:text-honey-300'
  const social = 'grid h-10 w-10 place-items-center rounded-full border border-cream/15 text-cream/80 transition hover:border-honey-300 hover:bg-honey-300 hover:text-night'

  return (
    <footer className="relative overflow-hidden bg-night text-cream">
      <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-honey-500/10 blur-3xl" />
      <div className="container-x relative grid grid-cols-2 gap-x-6 gap-y-10 py-14 sm:gap-12 sm:py-16 lg:grid-cols-12 lg:py-20">
        <div className="col-span-2 lg:col-span-4">
          <Logo dark />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/70">
            {clinic.name} – {clinic.slogan.toLowerCase()}. Nơi mỗi nụ cười của mẹ, mỗi nhịp tim đầu tiên của con được chăm sóc bằng cả trái tim.
          </p>
          <div className="mt-6 flex gap-2">
            <a href={clinic.social.facebook} target="_blank" rel="noreferrer" className={social} aria-label="Facebook">
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a href={clinic.social.messenger} target="_blank" rel="noreferrer" className={social} aria-label="Messenger">
              <MessengerIcon className="h-4 w-4" />
            </a>
            <a href={clinic.social.zalo} target="_blank" rel="noreferrer" className={social} aria-label="Zalo">
              <ZaloIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-3">
          <p className={heading}>Dịch vụ</p>
          <ul className="mt-5 space-y-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/dich-vu/${s.slug}`} className={link}>
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <p className={heading}>Khám phá</p>
          <ul className="mt-5 space-y-3">
            <li><Link to="/gioi-thieu" className={link}>Giới thiệu</Link></li>
            <li><Link to="/dich-vu" className={link}>Tất cả dịch vụ</Link></li>
            <li><Link to="/kien-thuc" className={link}>Kiến thức</Link></li>
            <li><Link to="/lien-he" className={link}>Liên hệ</Link></li>
          </ul>
        </div>

        <div className="col-span-2 lg:col-span-3">
          <p className={heading}>Liên hệ</p>
          <ul className="mt-5 space-y-4 text-sm text-cream/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-honey-300" />
              <a href={mapLink} target="_blank" rel="noreferrer" className="transition hover:text-honey-300">
                {clinic.address}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-honey-300" />
              <a href={`tel:${clinic.tel}`} className="font-semibold text-cream transition hover:text-honey-300">
                {clinic.hotline}
              </a>
            </li>
            {clinic.email && (
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-honey-300" />
                <a href={`mailto:${clinic.email}`} className="transition hover:text-honey-300">
                  {clinic.email}
                </a>
              </li>
            )}
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-honey-300" />
              <span>
                {clinic.hours.map((h) => (
                  <span key={h.days} className="block">
                    {h.days}: <span className="text-cream">{h.time}</span>
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-x flex flex-col gap-2 pt-6 pb-24 text-xs text-cream/50 md:flex-row md:items-center md:justify-between md:pb-6">
          <p>© {new Date().getFullYear()} {clinic.name}. Bảo lưu mọi quyền.</p>
          <p>Thông tin trên website chỉ mang tính tham khảo, không thay thế cho chẩn đoán của bác sĩ.</p>
        </div>
      </div>
    </footer>
  )
}
