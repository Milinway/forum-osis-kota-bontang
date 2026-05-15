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
    el.classList.add("active");
}

// TUTUP POPUP
function tutupSekolah(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove("active");
}

