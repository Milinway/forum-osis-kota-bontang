let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');

function gantiSlide(index) {

    // hapus active dari semua gambar
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // hapus active dari semua dot
    dots.forEach(dot => {
        dot.classList.remove('active');
    });

    // tambahkan active ke gambar yang dipilih
    slides[index].classList.add('active');

    // tambahkan active ke dot yang dipilih
    dots[index].classList.add('active');
}

let current = 0;

setInterval(() => {

    current++;

    if(current >= slides.length) {
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

// Tutup gallery
function tutupGallery() {
    document.getElementById("lightbox").style.display = "none";
}

// BUKA POPUP SEKOLAH
function bukaSekolah(id) {

    document.getElementById("popup-" + id)
    .style.display = "block";
}

// TUTUP POPUP
function tutupSekolah(id) {

    document.getElementById("popup-" + id)
    .style.display = "none";
}

function bukaSekolah(id) {
    document.getElementById(id).classList.add("active");
}

function tutupSekolah(id) {
    document.getElementById(id).classList.remove("active");
}