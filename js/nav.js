// Navbar burger + dropdown profil
// Dipakai di semua halaman yang punya:
// .nav-toggle, .nav-links, .dropdown, .dropdown-toggle

(function initNav() {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");
    const dropdown = document.querySelector(".dropdown");
    const dropdownToggle = document.querySelector(".dropdown-toggle");

    if (!navToggle || !navLinks) return;

    // Buka/tutup burger menu
    navToggle.addEventListener("click", function (e) {
        e.stopPropagation();

        const isOpen = navLinks.classList.toggle("open");

        navToggle.setAttribute("aria-expanded", String(isOpen));

        // kalau navbar ditutup, dropdown juga ikut ditutup
        if (!isOpen && dropdown && dropdownToggle) {
            dropdown.classList.remove("open");
            dropdownToggle.setAttribute("aria-expanded", "false");
        }
    });

    // Dropdown profil
    if (dropdown && dropdownToggle) {
        dropdownToggle.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();

            const isMobile = window.matchMedia("(max-width: 768px)").matches;

            // Mobile: profil jadi parent-child
            if (isMobile) {
                const isOpen = dropdown.classList.toggle("open");
                dropdownToggle.setAttribute("aria-expanded", String(isOpen));
            }

            // Desktop: biarin CSS hover yang jalan
        });
    }

    // Klik di luar navbar = tutup menu mobile
    document.addEventListener("click", function (e) {
        const clickedInsideNavbar = e.target.closest(".navbar");

        if (!clickedInsideNavbar) {
            navLinks.classList.remove("open");
            navToggle.setAttribute("aria-expanded", "false");

            if (dropdown && dropdownToggle) {
                dropdown.classList.remove("open");
                dropdownToggle.setAttribute("aria-expanded", "false");
            }
        }
    });

    // Kalau layar dibesarkan lagi, reset mode mobile
    window.addEventListener("resize", function () {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;

        if (!isMobile) {
            navLinks.classList.remove("open");
            navToggle.setAttribute("aria-expanded", "false");

            if (dropdown && dropdownToggle) {
                dropdown.classList.remove("open");
                dropdownToggle.setAttribute("aria-expanded", "false");
            }
        }
    });
})();