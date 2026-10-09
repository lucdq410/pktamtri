import { useEffect } from 'react'

const SITE_TITLE = 'Phòng khám Sản Phụ Khoa Tâm Trí'

export function useTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_TITLE}` : `${SITE_TITLE} – Tận tâm đồng hành cùng bạn`
  }, [title])
}

export function formatDate(iso) {
  const [y, m, d] = iso.split('-').map(Number)
  return `${d} tháng ${m}, ${y}`
}

export const cx = (...classes) => classes.filter(Boolean).join(' ')
