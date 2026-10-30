# Website Phòng khám Sản Phụ Khoa Tâm Trí

Phiên bản React mới của [sanphukhoatamtri.vn](https://sanphukhoatamtri.vn/), xây dựng bằng **Vite + React 19 + React Router 7 + Tailwind CSS 4**.

## Chạy thử

```bash
npm install
npm run dev      # mở http://localhost:5173
npm run build    # xuất bản vào thư mục dist/
npm run preview  # xem thử bản build
```

## Cập nhật nội dung

Toàn bộ nội dung nằm trong `src/data/`, không cần sửa giao diện:

| File | Nội dung |
| --- | --- |
| `src/data/site.js` | Tên, địa chỉ, hotline, giờ làm việc, mạng xã hội, bác sĩ, số liệu, cảm nhận khách hàng, ảnh |
| `src/data/services.js` | 6 dịch vụ và nội dung chi tiết từng trang |
| `src/data/posts.js` | Bài viết mục "Kiến thức" (thêm bài mới lên đầu danh sách) |

### Thêm ảnh thật của phòng khám

Chép ảnh vào `public/images/` rồi điền đường dẫn vào `images` trong `src/data/site.js`:

```js
export const images = {
  hero: '/images/hero.jpg',      // ảnh dọc ~4:5, đầu trang chủ
  doctor: '/images/bac-si.jpg',  // chân dung bác sĩ, ảnh dọc ~4:5
  space: '/images/phong-kham.jpg', // không gian phòng khám, ảnh ngang ~4:3
}
```

Khi chưa có ảnh, website dùng hình minh họa mặc định.

## Font chữ

Font nhận diện thương hiệu là **SVN-Aptima** (Bold cho tiêu đề, Regular cho nội dung). Aptima là font
thương mại của Linotype/Monotype nên chưa được đưa vào dự án. Trong lúc chờ, website dùng
**Ysabeau Office** (Google Fonts, giấy phép OFL, miễn phí thương mại) – kiểu chữ gần giống Aptima nhất có hỗ trợ tiếng Việt.

Khi có file webfont Aptima **đã mua bản quyền**:

1. Chép file vào `public/fonts/` với tên `SVN-Aptima.woff2` và `SVN-Aptima-Bold.woff2`.
2. Bỏ chú thích khối `@font-face` ở đầu `src/index.css`.

Website sẽ tự dùng Aptima; Ysabeau Office chỉ còn là font dự phòng.

## Form đặt lịch

Website chưa có máy chủ nhận dữ liệu. Tạo file `.env` (xem `.env.example`) và đặt
`VITE_BOOKING_ENDPOINT` là URL nhận dữ liệu JSON qua `POST` (Google Apps Script, Formspree hoặc API riêng).

- Khi chạy `npm run dev` mà chưa cấu hình: form giả lập gửi thành công và in dữ liệu ra console.
- Ở bản build mà chưa cấu hình: form báo lỗi và hướng dẫn khách gọi hotline.

Dữ liệu gửi đi: `name`, `phone`, `service`, `date`, `message`, `sentAt`.

## Triển khai

Đây là ứng dụng một trang (SPA): máy chủ cần trả về `index.html` cho mọi đường dẫn.
Đã có sẵn cấu hình cho **Vercel** (`vercel.json`) và **Netlify** (`public/_redirects`).

Các đường dẫn cũ của website Haravan (`/pages/...`, `/blogs/news/...`) tự động chuyển sang đường dẫn mới.

## Cấu trúc

```
src/
  components/   Header, Footer, form & hộp đặt lịch, thành phần dùng chung
  sections/     Các khối của trang chủ (Hero, Dịch vụ, Bác sĩ, Lịch khám thai…)
  pages/        Trang chủ, Giới thiệu, Dịch vụ, Chi tiết dịch vụ, Kiến thức, Bài viết, Liên hệ
  data/         Nội dung website
  index.css     Bảng màu, font và kiểu dáng chung
```
