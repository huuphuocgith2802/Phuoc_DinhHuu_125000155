# NHẬT KÝ PROMPT ENGINEERING (VIBE CODING LOG)

- **Họ và tên:** Đinh Hữu Phước
- **MSSV:** 125000155
- **GitHub Username:** huuphuocgith2802
- **GitHub Repository:** https://github.com/huuphuocgith2802/Phuoc_DinhHuu_125000155
- **GitHub Pages Live:** https://huuphuocgith2802.github.io/Phuoc_DinhHuu_125000155/
- **Lớp / Học phần:** Thiết kế Web - Khoa Công nghệ thông tin - Trường Đại học Lạc Hồng
- **Tên đề tài Website:** NovaSound Pro - Landing Page Giới Thiệu Sản Phẩm Tai Nghe Không Dây Chống Ồn Thông Minh Thế Hệ Mới
- **Công cụ AI đã sử dụng:** Gemini 3.8 Flash / Claude 3.5 Sonnet (Antigravity AI Pair Programmer)

---

## 1. Yêu cầu ban đầu (System/Initial Prompt)

> **Prompt tổng quan ban đầu đã dùng:**
> *"Tôi cần xây dựng một Landing Page hiện đại, chuẩn Semantic HTML5 và responsive để giới thiệu sản phẩm công nghệ cao cấp: Tai nghe không dây chống ồn NovaSound Pro. Website phải tuân thủ nghiêm ngặt chuẩn W3C với tối thiểu 5 thẻ ngữ nghĩa chính (<header>, <nav>, <main>, <section>, <article>, <footer>). Toàn bộ màu sắc, typography và khoảng cách phải được quản lý tập trung bằng CSS Variables (:root). Đồng thời tích hợp thư viện Animate.css cho phần Hero và AOS (Animate On Scroll) cho các khối nội dung khi cuộn trang. Hãy thiết kế giao diện theo phong cách Dark Mode công nghệ tương lai (Cyberpunk / Audiophile) với màu chủ đạo là Cyan (#06b6d4) và Purple (#8b5cf6), hỗ trợ đầy đủ hiệu ứng :hover, :focus cho các nút bấm và thẻ sản phẩm."*

---

## 2. Quá trình tinh chỉnh & Giải quyết sự cố (Iteration Iterations)

### Lần 1: Dựng khung Semantic HTML & Hệ thống CSS Variables

- **Prompt đã dùng:**
  > *"Hãy tạo cấu trúc khung HTML5 chuẩn semantic cho trang NovaSound Pro bao gồm: Header chứa logo SVG và Navigation menu; Main chứa Hero Section, Features, Specs âm học, Sound Modes simulator, Bảng giá các phiên bản (Products), Reviews và Form đặt hàng; Footer chứa thông tin sinh viên Đinh Hữu Phước - MSSV: 125000155 Đại học Lạc Hồng. Lưu ý: Không được lạm dụng thẻ `<div>` vô nghĩa ở những nơi có thể dùng thẻ ngữ nghĩa HTML5. Thiết lập file style.css với :root định nghĩa đầy đủ biến màu sắc, font chữ và spacing."*

- **Kết quả AI tạo ra:**
  - AI khởi tạo đầy đủ các phần tử, tuy nhiên ở các thẻ tính năng (features) và đánh giá khách hàng (testimonials), AI vẫn bao bọc bằng `<div class="feature-item">` và `<div class="review-box">`.
  - Một số thuộc tính CSS sử dụng mã màu cứng (hardcoded hex color như `#00ffff`, `#111111`) thay vì tham chiếu biến `var(--primary-color)`.

- **Nhận xét & Tinh chỉnh của SV:**
  - **Nhắc AI sửa đổi cấu trúc:** Chuyển toàn bộ các khối nội dung độc lập như từng tính năng, từng card sản phẩm và từng đánh giá sang thẻ `<article>` để đúng chuẩn Semantic Web và chuẩn SEO.
  - **Yêu cầu refactor CSS:** Thay thế toàn bộ mã màu cứng bằng CSS Variables (`var(--bg-main)`, `var(--bg-card)`, `var(--text-main)`, `var(--primary-glow)`). Bổ sung thêm biến `--transition-fast`, `--transition-bounce` để chuẩn hóa chuyển động.
  - Bổ sung thêm thẻ `<figure>`, `<figcaption>` cho khu vực hình ảnh minh họa màng loa và headset để tăng điểm ngữ nghĩa HTML5.

---

### Lần 2: Tích hợp thư viện Animate.css & AOS (Animate On Scroll)

- **Prompt đã dùng:**
  > *"Hãy tích hợp CDN của Animate.css (v4.1.1) và AOS (Animate On Scroll) vào dự án. Áp dụng hiệu ứng Animate.css (fadeInDown, fadeInLeft, zoomIn, pulse) cho tiêu đề, badge và hình ảnh tai nghe ở Hero Section. Áp dụng các thuộc tính data-aos (fade-up, fade-right, zoom-in, delay) cho các thẻ <article> trong Features, Specs và Reviews. Viết đoạn mã JavaScript khởi tạo AOS chuẩn xác."*

- **Thách thức gặp phải:**
  - Sau khi thêm CDN và thuộc tính `data-aos="fade-up"`, khi cuộn trang trên trình duyệt, các phần tử trong section Features bị ẩn trắng không hiển thị, hoặc giật lag khi cuộn nhanh.
  - Thư viện Animate.css ở phiên bản 4.x yêu cầu tiền tố `animate__animated animate__...`, nhưng ban đầu AI chỉ viết `class="animated fadeInUp"` theo chuẩn cũ của bản 3.x khiến hiệu ứng không chạy.

- **Cách sửa prompt (Debug prompt):**
  > *"Sự cố 1: Animate.css đang dùng CDN v4.1.1, cú pháp phải có tiền tố `animate__animated animate__fadeInDown` và `animate__delay-1s`. Hãy sửa lại class toàn bộ Hero Section.*  
  > *Sự cố 2: AOS không kích hoạt khi scroll vì chưa có script khởi tạo `AOS.init()` sau khi DOM sẵn sàng. Hãy viết file `assets/js/main.js` bọc trong sự kiện `DOMContentLoaded`, cấu hình `AOS.init({ duration: 800, once: true, offset: 80 })` và gọi `AOS.refresh()` để tránh lỗi render."*

- **Kết quả sau khi sửa:**
  - Hiệu ứng xuất hiện ở Hero Section chạy mượt mà ngay khi tải trang.
  - Các thẻ tính năng cuộn đến đâu xuất hiện so le (staggered delay 100ms, 200ms, 300ms) rất chuyên nghiệp và không bị mất nội dung.

---

### Lần 3: Tối ưu Layout Flexbox/Grid & Hiệu ứng tương tác CSS (:hover, :focus)

- **Prompt đã dùng:**
  > *"Viết CSS Layout hiện đại: Sử dụng CSS Grid cho khu vực Features Grid và Products Grid; Flexbox cho Header, Hero CTA, Testimonial meta và Footer. Viết đầy đủ hiệu ứng tương tác :hover (nâng thẻ translateY(-8px), hiệu ứng viền neon glow, phóng to icon) và hiệu ứng :focus, :focus-visible (outline rõ ràng, chống vi phạm Accessibility) cho toàn bộ nút bấm, link điều hướng và các ô input của Form đặt hàng."*

- **Kết quả AI tạo ra & Tinh chỉnh của SV:**
  - AI đã viết tốt hiệu ứng `:hover`, tuy nhiên phần form input khi click vào chỉ có viền mặc định của trình duyệt màu xanh lam nhạt, không ăn nhập với tông màu tối của website.
  - **Sinh viên chỉ đạo tinh chỉnh:** Thiết kế custom `:focus` cho `.form-input` và `.form-select` với `box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.25)` và nền sẫm hơn. Khi người dùng nhập sai, áp dụng class `.input-error` với viền đỏ hồng cảnh báo thân thiện.

---

### Lần 4: Thiết kế Responsive & Trình giả lập âm thanh tương tác JavaScript

- **Prompt đã dùng:**
  > *"Xây dựng một tính năng tương tác độc đáo cho Landing Page: 'Bộ mô phỏng chế độ âm thanh' (Sound Modes Simulator) với 3 chế độ: Chống ồn ANC, Xuyên âm Ambient Sound, và Spatial Audio 3D. Khi người dùng nhấn vào các nút chế độ, giao diện sẽ thay đổi mô tả và các thanh sóng âm SVG/CSS (wave bars) sẽ đổi nhịp độ xung nhịp khác nhau. Đồng thời kiểm tra responsive toàn diện cho Tablet (max-width: 1024px) và Mobile (max-width: 768px), biến thanh navigation thành Hamburger Menu trượt mượt mà."*

- **Kết quả đạt được:**
  - Giao diện có tính năng tương tác thực tế cao, gây ấn tượng mạnh mẽ cho người xem và ban giám khảo.
  - Menu mobile hoạt động trơn tru, tự động đóng khi người dùng nhấp vào mục liên kết.
  - Layout trên điện thoại tự động chuyển từ Grid 3 cột thành 1 cột cân đối, không bị tràn ngang màn hình (`overflow-x: hidden`).

---

## 3. Đánh giá cá nhân về quá trình Vibe Coding

### 1. AI đã giúp bạn tiết kiệm thời gian ở phần nào nhất?
- **Khởi tạo bộ khung CSS Variables và Reset CSS:** Thay vì phải gõ thủ công từng biến màu sắc, khoảng cách, kích thước font và cấu trúc media query, AI giúp sinh ra một hệ thống thiết kế (Design System) chuẩn chỉ trong vài giây.
- **Viết mã SVG phức tạp:** AI hỗ trợ dựng hình ảnh minh họa vector (tai nghe công nghệ cao và cấu trúc màng loa Graphene) trực tiếp bằng mã SVG mà không cần dùng Photoshop/Illustrator hay tìm hình ảnh nặng bên ngoài.
- **Tạo nội dung mẫu (Copywriting) thực tế:** Nội dung giới thiệu sản phẩm, thông số kỹ thuật, đánh giá của chuyên gia đều được AI tạo ra một cách tự nhiên, chuyên nghiệp bằng tiếng Việt chuẩn ngữ cảnh công nghệ âm thanh.

### 2. Bài học rút ra khi đặt câu hỏi (Prompt) cho AI trong thiết kế web?
- **Cần cụ thể hóa chuẩn kỹ thuật ngay từ đầu:** Nếu chỉ yêu cầu *"Làm cho tôi một website đẹp"*, AI thường lạm dụng thẻ `<div>` bừa bãi và dùng CSS inline hoặc viết thiếu responsive. Khi đặt prompt có chỉ định rõ *"Chuẩn Semantic HTML5, dùng `<article>`, `<section>`, sử dụng CSS Variables `:root`"*, chất lượng code sinh ra sẽ đạt chuẩn tối đa ngay lập tức.
- **Kiểm soát phiên bản thư viện:** Các thư viện như Animate.css hay AOS có sự thay đổi giữa các phiên bản (ví dụ Animate.css v3 dùng `class="animated bounce"`, trong khi v4 dùng `class="animate__animated animate__bounce"`). Lập trình viên phải hiểu bản chất để kịp thời hướng dẫn AI debug chính xác.
- **Tư duy Vibe Coding không phải là phó mặc hoàn toàn cho AI:** Người học phải đóng vai trò là **"Kiến trúc sư trưởng" (Tech Lead)**: biết đề xuất ý tưởng, phân rã công việc thành từng lần lặp (iterations), phát hiện điểm AI làm chưa tốt để nắn chỉnh, từ đó tạo ra sản phẩm hoàn thiện nhất cả về mặt thẩm mỹ lẫn chất lượng mã nguồn.
