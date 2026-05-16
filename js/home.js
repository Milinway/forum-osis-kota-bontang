let slides = document.querySelectorAll('.slide');

function gantiSlide(index) {
    // hapus active dari semua gambar
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // tambahkan active ke gambar yang dipilih
    if (slides[index]) slides[index].classList.add('active');

    // sync dot otomatis (kalau ada)
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// NAVBAR MOBILE & DROPDOWN MOBILE
// (dipindahkan ke js/nav.js agar konsisten di semua halaman)

// DOT otomatis mengikuti jumlah slide
(function initDots() {
    const container = document.querySelector('.dots');
    if (!container) return;

    // hapus dot lama (biar ngikut kalau slide nambah)
    container.innerHTML = '';

    const frag = document.createDocumentFragment();
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('span');
        dot.className = 'dot' + (i === 0 ? ' active' : '');
        dot.onclick = () => gantiSlide(i);
        frag.appendChild(dot);
    }
    container.appendChild(frag);
})();


let current = 0;

setInterval(() => {
    current++;

    if (current >= slides.length) {
        current = 0;
    }

    gantiSlide(current);
}, 4000);

// LIGHTBOX GALLERY
function bukaGallery(element) {
    let lightbox = document.getElementById("lightbox");
    let lightboxImg = document.getElementById("lightbox-img");
    lightbox.style.display = "flex";
    lightboxImg.src = element.src;
}

// Tutup gallery jika klik overlay hitam
function tutupGallery(event) {

    let lightbox = document.getElementById("lightbox");

    // hanya tutup kalau klik background hitam
    if (event.target.id === "lightbox") {
        lightbox.style.display = "none";
    }
}

// BUKA POPUP SEKOLAH
// HTML popup: <div class="school-popup" id="SMPN1">...
// CSS: .school-popup { display: none; } dan .school-popup.active { display: flex; }
function bukaSekolah(id) {
    const el = document.getElementById(id);
    if (!el) return;

    // Reset carousel aktif saat popup dibuka
    const viewports = el.querySelectorAll('.popup-gallery-viewport');
    viewports.forEach((vp) => {
        const imgs = vp.querySelectorAll('.popup-gallery-img');
        imgs.forEach((img, i) => img.classList.toggle('active', i === 0));

        // Disable/enable tombol sesuai jumlah gambar
        const popupGallery = vp.closest('.popup-gallery');
        if (!popupGallery) return;
        const prevBtn = popupGallery.querySelector('.popup-prev');
        const nextBtn = popupGallery.querySelector('.popup-next');
        const count = imgs.length;
        const disabled = count <= 1;
        if (prevBtn) prevBtn.disabled = disabled;
        if (nextBtn) nextBtn.disabled = disabled;
        if (prevBtn) prevBtn.style.opacity = disabled ? '0.4' : '1';
        if (nextBtn) nextBtn.style.opacity = disabled ? '0.4' : '1';
    });

    el.classList.add("active");
}

// TUTUP POPUP
function tutupSekolah(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove("active");
}

(function initSchoolCarousel() {

    function isMobile() {
        return window.matchMedia("(max-width: 768px)").matches;
    }

    function setupPopupGallery(popupGallery) {
        const imgs = popupGallery.querySelectorAll(".popup-gallery-img");
        const prevBtn = popupGallery.querySelector(".popup-prev");
        const nextBtn = popupGallery.querySelector(".popup-next");

        if (!imgs.length) return;

        const onlyOne = imgs.length <= 1;

        if (prevBtn) prevBtn.disabled = onlyOne;
        if (nextBtn) nextBtn.disabled = onlyOne;

        if (isMobile()) {
            let hasActive = Array.from(imgs).some(img => img.classList.contains("active"));

            if (!hasActive) {
                imgs[0].classList.add("active");
            }
        } else {
            imgs.forEach(img => img.classList.remove("active"));
        }
    }

    document.querySelectorAll(".popup-gallery").forEach(setupPopupGallery);

    document.addEventListener("click", function(e) {
        const btn = e.target.closest(".popup-prev, .popup-next");
        if (!btn || btn.disabled || !isMobile()) return;

        const popupGallery = btn.closest(".popup-gallery");
        const imgs = popupGallery.querySelectorAll(".popup-gallery-img");

        if (imgs.length <= 1) return;

        let currentIndex = Array.from(imgs).findIndex(img => img.classList.contains("active"));

        if (currentIndex === -1) currentIndex = 0;

        imgs[currentIndex].classList.remove("active");

        if (btn.classList.contains("popup-next")) {
            currentIndex++;
            if (currentIndex >= imgs.length) currentIndex = 0;
        } else {
            currentIndex--;
            if (currentIndex < 0) currentIndex = imgs.length - 1;
        }

        imgs[currentIndex].classList.add("active");
    });

    window.addEventListener("resize", function() {
        document.querySelectorAll(".popup-gallery").forEach(setupPopupGallery);
    });

})();

