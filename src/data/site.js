// Thông tin chung của phòng khám – sửa ở đây là cập nhật toàn bộ website.

export const clinic = {
  name: 'Phòng khám Sản Phụ Khoa Tâm Trí',
  shortName: 'Tâm Trí',
  slogan: 'Tận tâm đồng hành cùng bạn',
  address: '418 Nguyễn Thị Minh Khai, P. Quy Nhơn Nam, T. Gia Lai',
  hotline: '0562 888 666',
  tel: '0562888666',
  // Trang cũ đang hiển thị email mặc định của nền tảng (hi@haravan.com).
  // Điền email thật của phòng khám vào đây để hiển thị trên website.
  email: null,
  hours: [
    { days: 'Thứ 2 – Thứ 6', short: 'T2–T6', time: '11:00 – 19:00' },
    { days: 'Thứ 7 – Chủ nhật', short: 'T7–CN', time: '08:00 – 18:30' },
  ],
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=100070196273984',
    messenger: 'https://m.me/569313636611887',
    zalo: 'https://zalo.me/s/2162993144643603795',
  },
  mapQuery: '418 Nguyễn Thị Minh Khai, Quy Nhơn',
}

export const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinic.mapQuery)}`
export const mapEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(clinic.mapQuery)}&z=16&output=embed`

// Ảnh thật của phòng khám: chép ảnh vào thư mục public/images rồi điền đường dẫn,
// ví dụ hero: '/images/hero.jpg'. Để null thì website dùng hình minh họa mặc định.
export const images = {
  hero: null, // ảnh lớn ở đầu trang chủ (tỉ lệ dọc ~ 4:5)
  doctor: null, // chân dung BS CKII Đỗ Văn Tâm (tỉ lệ dọc ~ 4:5)
  space: null, // không gian phòng khám (tỉ lệ ngang ~ 4:3)
}

export const doctor = {
  name: 'Đỗ Văn Tâm',
  title: 'Bác sĩ Chuyên khoa II',
  short: 'BS CKII Đỗ Văn Tâm',
  bio: 'Hơn 20 năm kinh nghiệm chuyên khoa Phụ Sản tại Bệnh viện Đa khoa tỉnh Bình Định. Bác sĩ trực tiếp thăm khám, tư vấn và đồng hành cùng mẹ bầu trong suốt hành trình thai kỳ.',
  education: [
    { year: '1998', title: 'Tốt nghiệp Bác sĩ', place: 'Trường Đại học Y Huế' },
    { year: '2012', title: 'Chuyên khoa I', place: 'Trường Đại học Y Huế' },
    { year: '2016', title: 'Chuyên khoa II', place: 'Trường Đại học Y Huế' },
  ],
}

export const nav = [
  { label: 'Trang chủ', to: '/' },
  { label: 'Giới thiệu', to: '/gioi-thieu' },
  { label: 'Dịch vụ', to: '/dich-vu', mega: true },
  { label: 'Kiến thức', to: '/kien-thuc' },
  { label: 'Liên hệ', to: '/lien-he' },
]

export const stats = [
  { value: 25, suffix: '+', label: 'Năm kinh nghiệm', sub: 'tại bệnh viện tuyến tỉnh' },
  { value: 3000, label: 'Bệnh nhân', sub: 'đã đến thăm khám' },
  { value: 10, label: 'Tổ chức y tế', sub: 'liên kết chuyên môn' },
  { value: 6, label: 'Dịch vụ', sub: 'chăm sóc mẹ & bé' },
]

export const pillars = [
  {
    icon: 'MonitorSmartphone',
    title: 'Hệ thống máy móc hiện đại',
    text: 'Đầy đủ dịch vụ chất lượng và đa dạng, từ chăm sóc sức khỏe toàn diện khi thai kỳ bắt đầu cho đến khi bé chào đời khỏe mạnh.',
  },
  {
    icon: 'Award',
    title: 'Đội ngũ bác sĩ chuyên môn cao',
    text: 'Chuyên gia đầu ngành trong thăm khám sản phụ khoa với hơn 25 năm kinh nghiệm làm việc tại bệnh viện tuyến tỉnh.',
  },
  {
    icon: 'Flower2',
    title: 'Không gian chuẩn spa',
    text: 'Phòng chờ riêng biệt, thoáng mát, đầy đủ tiện nghi – giúp mẹ bầu thư giãn và thoải mái trong suốt quá trình thăm khám.',
  },
]

export const testimonials = [
  {
    name: 'Thùy Vân',
    role: 'Gói chăm sóc thai kỳ toàn diện',
    quote:
      'Bác sĩ chuyên môn giỏi, tư vấn nhiệt tình và chăm sóc mình rất tận tâm. Mình chọn gói chăm sóc thai kỳ toàn diện từ lúc cấn bầu tới lúc sanh bé luôn, nên từ A tới Z đều có Tâm Trí lo. Trộm vía bé nhà mình được 5 tháng rồi, mẹ và con đều khỏe mạnh. Cảm ơn bác sĩ Tâm rất nhiều!',
  },
  {
    name: 'Minh Thư',
    role: 'Tư vấn tiền hôn nhân',
    quote:
      'Biết phòng khám từ hồi đi tư vấn tiền hôn nhân, tới giờ sắp sanh bé thứ 2 rồi mình vẫn theo bác Tâm ^^. Bác tận tình lắm nha, mỗi lần tới tư vấn mình ngồi cả nửa buổi ấy. Khám bác sĩ Tâm thì yên tâm rồi, không có gì phải lăn tăn hết. Chỗ bác cũng gần trung tâm nên tiện đi lại nữa.',
  },
  {
    name: 'Mỹ Ngọc',
    role: 'Khám thai định kỳ',
    quote:
      'Chồng tui hay hỏi đi phòng khám khám thai sao thấy em chill vậy, haha. Tới Tâm Trí là tâm trí tui cũng thư giãn y vậy á, không gian thiết kế tựa tựa spa nên thoải mái dễ chịu dã man, không giống đi khám xíu nào luôn. Bác sĩ Tâm tui theo từ hồi bác còn làm ở bệnh viện đa khoa Bình Định tới giờ, cực kì hài lòng và yên tâm!',
  },
]
