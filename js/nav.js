// Navbar burger + dropdown (mobile)
// Dipakai di semua halaman yang punya struktur:
// .nav-toggle, .nav-links, .dropdown, .dropdown-toggle, .dropdown-content

(function initNav() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (!navToggle || !navLinks) return;

  // Burger menu
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Dropdown profil (mobile)
  const dropdown = document.querySelector('.dropdown');
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownContent = document.querySelector('.dropdown-content');
  if (!dropdown || !dropdownToggle || !dropdownContent) return;

  dropdownToggle.addEventListener('click', (e) => {
    // Jangan trigger toggle navbar saat klik dropdown
    e.stopPropagation();

    // Jika menu sedang tertutup, buka dulu agar dropdown muncul
    if (!navLinks.classList.contains('open')) {
      navLinks.classList.add('open');
      navToggle.setAttribute('aria-expanded', 'true');
    }

    const opened = dropdown.classList.toggle('open');
    dropdownToggle.setAttribute('aria-expanded', String(opened));
  });

  // Tutup dropdown saat klik di luar
  document.addEventListener('click', (e) => {
    const clickedInsideDropdown = dropdown.contains(e.target);
    if (!clickedInsideDropdown) {
      dropdown.classList.remove('open');
      dropdownToggle.setAttribute('aria-expanded', 'false');
    }
  });
})();


