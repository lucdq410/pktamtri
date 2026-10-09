import { useId, useState } from 'react'
import { CircleCheck, LoaderCircle, Phone, Send } from 'lucide-react'
import { services } from '../data/services'
import { clinic } from '../data/site'
import { isValidPhone, normalizePhone, submitBooking } from '../lib/booking'

const today = () => {
  const d = new Date()
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
  return d.toISOString().slice(0, 10)
}

export default function BookingForm({ defaultService = '', autoFocus = false }) {
  const id = useId()
  const [values, setValues] = useState({ name: '', phone: '', service: defaultService, date: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState('')

  const update = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }))
    if (errors[field]) setErrors((err) => ({ ...err, [field]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!values.name.trim()) next.name = 'Vui lòng nhập họ tên.'
    if (!values.phone.trim()) next.phone = 'Vui lòng nhập số điện thoại.'
    else if (!isValidPhone(values.phone)) next.phone = 'Số điện thoại chưa đúng định dạng.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')
    try {
      const service = services.find((s) => s.slug === values.service)
      await submitBooking({
        ...values,
        name: values.name.trim(),
        phone: normalizePhone(values.phone),
        service: service?.title ?? 'Chưa chọn',
      })
      setStatus('success')
    } catch (err) {
      setErrorMessage(err.message)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center py-8 text-center" role="status">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-honey-100 text-honey-600">
          <CircleCheck className="h-8 w-8" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-semibold">Đăng ký thành công!</h3>
        <p className="mt-2 max-w-sm text-muted">
          Cảm ơn {values.name.trim()} đã tin tưởng Tâm Trí. Phòng khám sẽ liên hệ với bạn trong thời gian sớm nhất.
        </p>
        <button
          type="button"
          className="btn-ghost mt-6"
          onClick={() => {
            setValues({ name: '', phone: '', service: defaultService, date: '', message: '' })
            setStatus('idle')
          }}
        >
          Gửi yêu cầu khác
        </button>
      </div>
    )
  }

  const label = 'mb-1.5 block text-sm font-medium text-ink'
  const errorText = 'mt-1.5 text-xs font-medium text-red-700'

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
      <div>
        <label htmlFor={`${id}-name`} className={label}>
          Họ và tên <span className="text-honey-600">*</span>
        </label>
        <input
          id={`${id}-name`}
          className="field"
          placeholder="Nguyễn Thị A"
          autoComplete="name"
          autoFocus={autoFocus}
          value={values.name}
          onChange={update('name')}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? `${id}-name-err` : undefined}
        />
        {errors.name && (
          <p id={`${id}-name-err`} className={errorText}>
            {errors.name}
          </p>
        )}
      </div>
      <div>
        <label htmlFor={`${id}-phone`} className={label}>
          Số điện thoại <span className="text-honey-600">*</span>
        </label>
        <input
          id={`${id}-phone`}
          className="field"
          placeholder="09xx xxx xxx"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={update('phone')}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? `${id}-phone-err` : undefined}
        />
        {errors.phone && (
          <p id={`${id}-phone-err`} className={errorText}>
            {errors.phone}
          </p>
        )}
      </div>
      <div>
        <label htmlFor={`${id}-service`} className={label}>
          Dịch vụ quan tâm
        </label>
        <select id={`${id}-service`} className="field appearance-none" value={values.service} onChange={update('service')}>
          <option value="">— Chọn dịch vụ —</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor={`${id}-date`} className={label}>
          Ngày mong muốn
        </label>
        <input
          id={`${id}-date`}
          className="field"
          type="date"
          min={today()}
          value={values.date}
          onChange={update('date')}
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor={`${id}-message`} className={label}>
          Lời nhắn
        </label>
        <textarea
          id={`${id}-message`}
          className="field min-h-24 resize-y"
          placeholder="Tuần thai hiện tại, triệu chứng hoặc điều bạn muốn hỏi bác sĩ…"
          value={values.message}
          onChange={update('message')}
        />
      </div>

      {status === 'error' && (
        <div className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-800 sm:col-span-2" role="alert">
          {errorMessage} Vui lòng gọi hotline{' '}
          <a href={`tel:${clinic.tel}`} className="font-semibold underline">
            {clinic.hotline}
          </a>{' '}
          để được hỗ trợ ngay.
        </div>
      )}

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">Tư vấn miễn phí · Bảo mật thông tin của bạn</p>
        <div className="flex gap-2">
          <a href={`tel:${clinic.tel}`} className="btn-ghost px-4 sm:hidden" aria-label="Gọi hotline">
            <Phone className="h-4 w-4" />
          </a>
          <button type="submit" className="btn-primary flex-1 sm:flex-none" disabled={status === 'sending'}>
            {status === 'sending' ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            {status === 'sending' ? 'Đang gửi…' : 'Gửi yêu cầu đặt lịch'}
          </button>
        </div>
      </div>
    </form>
  )
}
