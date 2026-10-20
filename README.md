# BÀI THI KIỂM TRA GIỮA KỲ - THIẾT KẾ WEB
### Trường Đại học Lạc Hồng (LHU) - Khoa Công nghệ thông tin

---

## 📌 THÔNG TIN SINH VIÊN & BÀI THI
- **Họ và tên:** Đinh Hữu Phước
- **Mã số sinh viên (MSSV):** 125000155
- **Tên Repository GitHub:** `Phuoc_DinhHuu_125000155`
- **Tên đề tài Website:** **NovaSound Pro** - Landing Page Giới Thiệu Tai Nghe Không Dây Chống Ồn Thông Minh Thế Hệ Mới
- **Link Live Preview (GitHub Pages):** `https://huuphuocgith2802.github.io/Phuoc_DinhHuu_125000155/`
- **Link GitHub Repository:** `https://github.com/huuphuocgith2802/Phuoc_DinhHuu_125000155`

---

## 🚀 HƯỚNG DẪN KÍCH HOẠT GITHUB PAGES
Để giảng viên có thể xem trực tiếp giao diện live trên GitHub Pages:
1. Đẩy toàn bộ mã nguồn lên repository công khai trên GitHub:
   ```bash
   git add .
   git commit -m "feat: complete website and prompt log for midterm exam"
   git remote add origin https://github.com/huuphuocgith2802/Phuoc_DinhHuu_125000155.git
   git branch -M main
   git push -u origin main --force
   ```
2. Trên giao diện GitHub của repository:
   - Vào mục **Settings** (Cài đặt) -> Chọn **Pages** ở menu bên trái.
   - Tại mục **Build and deployment** -> **Branch**:
     - Chọn nhánh: `main`.
     - Chọn thư mục: `/ (root)`.
     - Nhấn **Save**.
3. Chờ 1 - 2 phút, GitHub sẽ hiển thị đường link:  
   `https://huuphuocgith2802.github.io/Phuoc_DinhHuu_125000155/`
4. Dán đường link này vào phần **About / Description** của Repository trên GitHub (kèm dấu tích vào ô *Use your GitHub Pages website*).

---

## 📂 CẤU TRÚC REPOSITORY
```
Phuoc_DinhHuu_125000155/
├── index.html              # Mã nguồn trang chủ chuẩn Semantic HTML5
├── style.css               # Hệ thống CSS Variables, Flexbox/Grid, Responsive
├── PROMPT_LOG.md           # Nhật ký Vibe Coding & Prompt Engineering chi tiết
├── README.md               # Hướng dẫn bài thi và kích hoạt GitHub Pages
└── assets/
    ├── js/
    │   └── main.js         # Khởi tạo AOS, sound simulator, validation, menu
    └── images/
        ├── logo.svg        # Logo thương hiệu vector
        ├── favicon.svg     # Favicon website
        ├── hero-headphones.svg  # Minh họa vector tai nghe cao cấp
        └── driver-tech.svg # Sơ đồ kiến trúc màng loa Graphene 40mm
```

---

## 🛠️ CÁC TIÊU CHÍ KỸ THUẬT ĐẠT ĐƯỢC

### 1. Chuẩn Semantic HTML5 (Tối thiểu 5 thành phần chính)
- `<header>`: Chứa Logo thương hiệu, thanh điều hướng `<nav>` và nút CTA.
- `<nav>`: Danh sách các liên kết điều hướng mượt mà, hỗ trợ Hamburger menu trên mobile.
- `<main>`: Khu vực nội dung chính bao gồm các section:
  - `<section id="hero">`: Giới thiệu tổng quan ấn tượng với Animate.css.
  - `<section id="features">`: Lưới tính năng dạng thẻ `<article>` độc lập.
  - `<section id="specs">`: Bảng thông số kỹ thuật âm học `<dl>`, `<figure>`, `<figcaption>`.
  - `<section id="sound-modes">`: Bộ mô phỏng chế độ âm thanh tương tác.
  - `<section id="products">`: Danh sách các phiên bản tai nghe và bảng giá.
  - `<section id="reviews">`: Đánh giá của khách hàng sử dụng thẻ `<article>`.
  - `<section id="order">`: Form đặt hàng và thông tin ưu đãi.
- `<footer>`: Chân trang với thông tin liên hệ, bản quyền và khối thông tin sinh viên thi giữa kỳ (`<address>`).
- Tuyệt đối không lạm dụng thẻ `<div>` vô nghĩa.

### 2. Kỹ thuật CSS & CSS Variables
- Sử dụng `:root` để định nghĩa biến toàn cục:
  - Màu sắc: `--primary-color`, `--secondary-color`, `--accent-color`, `--bg-main`, `--bg-card`, `--text-main`...
  - Font chữ: `--font-heading`, `--font-body`.
  - Khoảng cách & Bo góc: `--spacing-sm`, `--spacing-md`, `--spacing-xl`, `--radius-md`, `--radius-lg`...
- Áp dụng kết hợp CSS Flexbox và CSS Grid cho bố cục responsive hoàn hảo từ màn hình máy tính đến điện thoại di động.

### 3. Tương tác & Hiệu ứng Thư viện
- **Animate.css (v4.1.1):** Tạo hiệu ứng mượt mà khi tải trang tại Hero Section (`fadeInDown`, `fadeInLeft`, `zoomIn`, `pulse`).
- **AOS (Animate On Scroll):** Tự động kích hoạt hiệu ứng xuất hiện khi cuộn trang cho từng khối nội dung (`data-aos="fade-up"`, `data-aos="fade-right"`, `data-aos-delay`).
- **Hiệu ứng CSS thuần:** Đầy đủ `:hover`, `:focus`, `:focus-visible` cho nút bấm, các thẻ card nâng cao 8px và đổ bóng neon glow khi trỏ chuột.

### 4. Tính năng Tương tác Mở rộng (Vanilla JS)
- Trình mô phỏng âm thanh (Sound Modes Simulator) với hiệu ứng sóng âm nhịp điệu động.
- Sticky Navbar với hiệu ứng kính mờ (Backdrop filter blur) khi cuộn.
- Nút cuộn lên đầu trang (Back-to-top) tự động ẩn hiện.
- Form đăng ký đặt hàng có kiểm tra dữ liệu hợp lệ (Email, Số điện thoại Việt Nam) kèm thông báo Toast Notification không tải lại trang.

---
*Bản quyền bài làm thuộc về sinh viên Đinh Hữu Phước - Khoa CNTT - Đại học Lạc Hồng.*
