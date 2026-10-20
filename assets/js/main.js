/**
 * NovaSound Pro - Main Interactive Script
 * Sinh viên thực hiện: Đinh Hữu Phước - MSSV: 125000155
 * Trường Đại học Lạc Hồng - Khoa CNTT
 */

document.addEventListener('DOMContentLoaded', () => {

  // ------------------------------------------------------------------------
  // 1. KHỞI TẠO THƯ VIỆN AOS (ANIMATE ON SCROLL)
  // ------------------------------------------------------------------------
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 850,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
      delay: 50
    });
  }

  // ------------------------------------------------------------------------
  // 2. STICKY NAVBAR KHI CUỘN TRANG
  // ------------------------------------------------------------------------
  const siteHeader = document.getElementById('siteHeader');
  const backToTopBtn = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    // Header background blur khi scroll quá 50px
    if (currentScroll > 50) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }

    // Hiển thị nút Back to top khi cuộn quá 450px
    if (currentScroll > 450) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }

    // Cập nhật active navigation theo vị trí cuộn
    highlightNavOnScroll();
  }, { passive: true });

  // Nút Back to top cuộn mượt lên đỉnh
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ------------------------------------------------------------------------
  // 3. MENU TOGGLE (MOBILE HAMBURGER)
  // ------------------------------------------------------------------------
  const menuToggle = document.getElementById('menuToggle');
  const siteNav = document.getElementById('siteNav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      menuToggle.classList.toggle('active');
      siteNav.classList.toggle('open');
    });

    // Tự động đóng menu khi nhấp vào link chuyển section
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.classList.remove('active');
        siteNav.classList.remove('open');
      });
    });
  }

  // ------------------------------------------------------------------------
  // 4. HIGHLIGHT ACTIVE LINK TRÊN THANH NAVIGATION THEO SCROLL
  // ------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');

  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const matchingLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (matchingLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          matchingLink.classList.add('active');
        } else {
          matchingLink.classList.remove('active');
        }
      }
    });
  }

  // ------------------------------------------------------------------------
  // 5. MÔ PHỎNG CHẾ ĐỘ ÂM THANH (SOUND MODES SIMULATOR)
  // ------------------------------------------------------------------------
  const modeTabs = document.querySelectorAll('.mode-tab-btn');
  const modeTitle = document.getElementById('modeTitle');
  const modeDesc = document.getElementById('modeDesc');
  const modeStatus = document.getElementById('modeStatus');
  const soundwaveContainer = document.getElementById('soundwaveContainer');

  const modeData = {
    anc: {
      title: "Chế Độ Chống Ồn Chủ Động (Active Noise Cancelling)",
      desc: "Triệt tiêu hoàn toàn tiếng còi xe, động cơ máy bay và tiếng ồn văn phòng. Trả lại không gian tĩnh lặng tuyệt đối để bạn tập trung làm việc và đắm chìm vào âm nhạc sâu lắng.",
      status: "Giảm thiểu tạp âm bên ngoài: 99.4% (-48dB)",
      class: "anc-mode"
    },
    transparency: {
      title: "Chế Độ Xuyên Âm Thông Minh (Smart Ambient Sound)",
      desc: "Hệ thống micro khuếch đại tự nhiên giọng nói xung quanh và âm báo ga tàu, giúp bạn đàm thoại trực tiếp với đồng nghiệp mà không cần tháo tai nghe.",
      status: "Thu âm môi trường trực tiếp thời gian thực: Độ trễ 0.2ms",
      class: "transparency-mode"
    },
    spatial: {
      title: "Không Gian Âm Thanh Vòm 3D (Spatial Audio with Head Tracking)",
      desc: "Tái tạo trường âm vòm 360 độ sống động. Cảm biến gyroscope theo dõi chính xác từng chuyển động xoay đầu, mang lại trải nghiệm như đang ngồi giữa khán phòng hòa nhạc.",
      status: "Âm trường 360° đa chiều kích hoạt (Dolby Atmos Support)",
      class: "spatial-mode"
    }
  };

  modeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Bỏ active cũ
      modeTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });

      // Kích hoạt tab mới
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const selectedMode = tab.getAttribute('data-mode');
      const data = modeData[selectedMode];

      if (data) {
        // Cập nhật nội dung với hiệu ứng fade nhẹ
        modeTitle.textContent = data.title;
        modeDesc.textContent = data.desc;
        modeStatus.textContent = data.status;

        // Cập nhật class mô phỏng sóng âm
        soundwaveContainer.className = 'soundwave-container ' + data.class;
      }
    });
  });

  // ------------------------------------------------------------------------
  // 6. NÚT CHỌN PHIÊN BẢN (TỰ ĐỘNG CHỌN VÀO FORM ĐẶT HÀNG)
  // ------------------------------------------------------------------------
  const selectEditionBtns = document.querySelectorAll('.select-edition-btn');
  const editionSelect = document.getElementById('editionSelect');
  const orderSection = document.getElementById('order');

  selectEditionBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const edition = btn.getAttribute('data-edition');
      if (editionSelect && edition) {
        editionSelect.value = edition;
      }

      // Cuộn mượt đến form đặt hàng
      if (orderSection) {
        orderSection.scrollIntoView({ behavior: 'smooth' });

        // Highlight nhẹ dropdown để gây chú ý
        editionSelect.focus();
        editionSelect.style.borderColor = 'var(--primary-color)';
        setTimeout(() => {
          editionSelect.style.borderColor = '';
        }, 1500);
      }
    });
  });

  // ------------------------------------------------------------------------
  // 7. XỬ LÝ FORM ĐẶT HÀNG & THÔNG BÁO TOAST
  // ------------------------------------------------------------------------
  const preOrderForm = document.getElementById('preOrderForm');
  const fullNameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const toastNotification = document.getElementById('toastNotification');
  const toastTitle = document.getElementById('toastTitle');
  const toastMessage = document.getElementById('toastMessage');

  // Regex kiểm tra email và số điện thoại VN
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

  if (preOrderForm) {
    preOrderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Kiểm tra họ tên
      const nameVal = fullNameInput.value.trim();
      const nameError = document.getElementById('nameError');
      if (!nameVal || nameVal.length < 2) {
        fullNameInput.classList.add('input-error');
        nameError.classList.add('visible');
        isValid = false;
      } else {
        fullNameInput.classList.remove('input-error');
        nameError.classList.remove('visible');
      }

      // Kiểm tra Email
      const emailVal = emailInput.value.trim();
      const emailError = document.getElementById('emailError');
      if (!emailRegex.test(emailVal)) {
        emailInput.classList.add('input-error');
        emailError.classList.add('visible');
        isValid = false;
      } else {
        emailInput.classList.remove('input-error');
        emailError.classList.remove('visible');
      }

      // Kiểm tra Số điện thoại
      const phoneVal = phoneInput.value.trim();
      const phoneError = document.getElementById('phoneError');
      if (!phoneRegex.test(phoneVal)) {
        phoneInput.classList.add('input-error');
        phoneError.classList.add('visible');
        isValid = false;
      } else {
        phoneInput.classList.remove('input-error');
        phoneError.classList.remove('visible');
      }

      // Nếu hợp lệ -> Hiển thị Toast thành công
      if (isValid) {
        const selectedEdition = editionSelect.value;
        showToast(
          "Đặt Hàng Thành Công!",
          `Cảm ơn ${nameVal}! Bạn đã đặt phiên bản "${selectedEdition}". CSKH NovaSound sẽ gọi đến ${phoneVal} trong 15 phút!`
        );

        // Reset form
        preOrderForm.reset();
      }
    });

    // Xóa lỗi khi người dùng bắt đầu gõ lại
    [fullNameInput, emailInput, phoneInput].forEach(input => {
      input.addEventListener('input', () => {
        input.classList.remove('input-error');
        const err = input.parentElement.querySelector('.error-msg');
        if (err) err.classList.remove('visible');
      });
    });
  }

  // Hàm hiển thị Toast thông báo
  let toastTimer = null;
  function showToast(title, message) {
    if (!toastNotification) return;

    toastTitle.textContent = title;
    toastMessage.textContent = message;
    toastNotification.classList.add('active');

    if (toastTimer) clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
      toastNotification.classList.remove('active');
    }, 5000);
  }

});
