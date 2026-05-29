// =========================
// BUKA POPUP
// =========================
function bukaGallery(gambar, judul, tanggal, deskripsi) {

    const popup = document.getElementById("galleryPopup");
    const popupContent = popup.querySelector(".popup-content");

    popup.classList.add("active");

    document.getElementById("popup-img").src = gambar;
    document.getElementById("popup-title").innerText = judul;
    document.getElementById("popup-date").innerText = tanggal;
    document.getElementById("popup-desc").innerHTML = deskripsi;

    // cek apakah popup cuma preview gambar
    if (!judul && !tanggal && !deskripsi) {
        popupContent.classList.add("single-image");
    } else {
        popupContent.classList.remove("single-image");
    }
}

// =========================
// TUTUP POPUP
// =========================

function bukaGallerySet(setName) {
    const images = gallerySets[setName];

    if (!images || images.length === 0) return;

    // Kalau cuma 1 gambar, langsung buka preview
    if (images.length === 1) {
        bukaGallery(images[0], null, null, null);
        return;
    }

    const popup = document.getElementById("multiGallery");
    const content = document.getElementById("multiGalleryContent");

    content.innerHTML = "";

    images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;

        img.onclick = () => bukaGallery(src, null, null, null);

        content.appendChild(img);
    });

    popup.classList.add("active");
}

// =========================
// TUTUP SAAT KLIK OVERLAY
// =========================
function tutupGallery() {
    const popup = document.getElementById("galleryPopup");
    const popupContent = popup.querySelector(".popup-content");

    popup.classList.remove("active");
    popupContent.classList.remove("single-image");
}

function tutupMultiGallery() {
    document.getElementById("multiGallery").classList.remove("active");
}

const gallerySets = {

  musyawarah: [
        "/assets/img/galeri/musyawarah.png",
    ],

  ldk: [
        "/assets/img/galeri/ldk(1).png",
        "/assets/img/galeri/ldk(2).png",
        "/assets/img/galeri/ldk(3).png",
        "/assets/img/galeri/ldk(4).png",
        "/assets/img/galeri/ldk(5).png",
        "/assets/img/galeri/ldk(6).png",
        "/assets/img/galeri/ldk(7).png",
        "/assets/img/galeri/ldk(8).png",
    ],

    fosran: [
        "/assets/img/galeri/fosran(8).png",
        "/assets/img/galeri/fosran(9).png",
        "/assets/img/galeri/fosran(10).png",
        "/assets/img/galeri/fosran(11).png",
        "/assets/img/galeri/fosran(12).png",
        "/assets/img/galeri/fosran(13).png",
        "/assets/img/galeri/fosran(7).png",
    ],

    pelantikan: [
        "/assets/img/galeri/pelantikan(1).png",
        "/assets/img/galeri/pelantikan(2).png",
        "/assets/img/galeri/pelantikan(3).png",
        "/assets/img/galeri/pelantikan(4).png",
        "/assets/img/galeri/pelantikan(5).png",
        "/assets/img/galeri/pelantikan(6).png",
        "/assets/img/galeri/pelantikan(7).png",
    ],

    makrab: [
        "/assets/img/galeri/makrab(1).png",
        "/assets/img/galeri/makrab(2).png",
        "/assets/img/galeri/makrab(3).png",
    ],

    raker: [
        "/assets/img/galeri/raker.png",
    ],

    bukber: [
        "/assets/img/galeri/bukber.png",
    ],

    fosclass: [
        "/assets/img/galeri/fosbonclass(1).png",
        "/assets/img/galeri/fosbonclass(2).png",
        "/assets/img/galeri/fosbonclass(3).png",
        "/assets/img/galeri/fosbonclass(4).png",
    ],

};