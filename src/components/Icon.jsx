import {
  Award,
  Baby,
  FlaskConical,
  Flower2,
  HeartHandshake,
  HeartPulse,
  MonitorSmartphone,
  Salad,
  ScanHeart,
  ShieldCheck,
  Sparkles,
  Sprout,
  Stethoscope,
} from 'lucide-react'

// Ánh xạ tên icon dùng trong file dữ liệu sang component lucide-react
const icons = {
  Award,
  Baby,
  FlaskConical,
  Flower2,
  HeartHandshake,
  HeartPulse,
  MonitorSmartphone,
  Salad,
  ScanHeart,
  ShieldCheck,
  Sprout,
  Stethoscope,
}

export default function Icon({ name, ...props }) {
  const Component = icons[name] ?? Sparkles
  return <Component {...props} />
}
