import { Link } from 'react-router-dom'
import { useTitle } from '../lib/utils'

export default function NotFound() {
  useTitle('Không tìm thấy trang')
  return (
    <section className="container-x grid min-h-[65vh] place-items-center py-24 text-center">
      <div>
        <p className="font-display text-8xl font-bold text-honey-300 italic">404</p>
        <h1 className="heading mt-4">Không tìm thấy trang</h1>
        <p className="mx-auto mt-3 max-w-md text-muted">Trang bạn tìm có thể đã được chuyển hoặc không còn tồn tại.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-primary">
            Về trang chủ
          </Link>
          <Link to="/dich-vu" className="btn-ghost">
            Xem dịch vụ
          </Link>
        </div>
      </div>
    </section>
  )
}
