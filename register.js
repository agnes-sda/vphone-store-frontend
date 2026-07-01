// register.js
document.addEventListener('DOMContentLoaded', () => {
  /* ---------- 1.  FORM VALIDATION ---------- */
  const form = document.querySelector('.register-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const fullname = form.elements['fullname'].value.trim();
      const email = form.elements['email'].value.trim();
      const password = form.elements['password'].value;
      const confirmPassword = form.elements['confirm-password'].value;

      if (!fullname || !email || !password || !confirmPassword) {
        alert('Please fill in all fields.');
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
      }

      if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
      }

      alert('Registration successful!');
      // form.submit();   // ← aktifkan bila sudah ada backend
      // form.reset();    // ← hapus nilai input setelah sukses
    });
  }

  /* ---------- 2.  HEADER BG ON SCROLL ---------- */
  const headerBg = document.querySelector('.header-bg');
  const toggleHeaderBg = () => {
    if (window.scrollY > 40) headerBg.classList.add('show');
    else headerBg.classList.remove('show');
  };
  toggleHeaderBg();
  window.addEventListener('scroll', toggleHeaderBg);

  /* ---------- 3.  HAMBURGER NAV TOGGLE ---------- */
  const navToggle = document.querySelector('.nav-toggle');   // tombol ☰
  const navLinks = document.querySelector('.nav-links');    // <ul> menu

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active'); // (jika ingin animasi X)
      navLinks.classList.toggle('show');    // tampil/sembunyi menu
    });
  }
});

// Initial load all products
displayProducts('all');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    headerBg.classList.add('show');
  } else {
    headerBg.classList.remove('show');
  }
});
// Responsive navigation toggle (hamburger menu)
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const headerBg = document.querySelector('.header-bg');

  // Hamburger menu toggle
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  // Show header background on scroll
  const toggleHeaderBg = () => {
    if (window.scrollY > 40) {
      headerBg.classList.add('show');
    } else {
      headerBg.classList.remove('show');
    }
  };

  toggleHeaderBg();
  window.addEventListener('scroll', toggleHeaderBg);
});

const headerBg = document.querySelector('.header-bg');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

document.addEventListener('DOMContentLoaded', () => {
  function toggleHeaderBg() {
    if (window.scrollY > 100) {
      headerBg.classList.add('show');
    } else {
      headerBg.classList.remove('show');
    }
  }

  toggleHeaderBg();
  window.addEventListener('scroll', toggleHeaderBg);

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    navToggle.classList.toggle('active');
  });
});