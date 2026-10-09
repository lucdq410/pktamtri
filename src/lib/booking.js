// Gửi thông tin đặt lịch.
// Website hiện chưa có máy chủ nhận dữ liệu: hãy đặt biến môi trường VITE_BOOKING_ENDPOINT
// (ví dụ URL Google Apps Script, Formspree hoặc API riêng) trong file .env để nhận yêu cầu thật.
const endpoint = import.meta.env.VITE_BOOKING_ENDPOINT

export async function submitBooking(data) {
  if (!endpoint) {
    if (import.meta.env.DEV) {
      console.warn('[Đặt lịch] Chưa cấu hình VITE_BOOKING_ENDPOINT – dữ liệu chỉ được in ra console:', data)
      await new Promise((resolve) => setTimeout(resolve, 700))
      return
    }
    throw new Error('Chưa cấu hình nơi nhận thông tin đặt lịch.')
  }

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...data, sentAt: new Date().toISOString() }),
  })
  if (!res.ok) throw new Error(`Gửi thất bại (mã ${res.status}).`)
}

export const normalizePhone = (value) => value.replace(/[\s.-]/g, '')
export const isValidPhone = (value) => /^(0|\+84)\d{9,10}$/.test(normalizePhone(value))
