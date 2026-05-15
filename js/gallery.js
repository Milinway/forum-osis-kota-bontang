// =========================
// BUKA POPUP
// =========================
function bukaGallery(gambar, judul, tanggal, deskripsi) {

    document.getElementById("galleryPopup")
        .classList.add("active");

    document.getElementById("popup-img")
        .src = gambar;

    document.getElementById("popup-title")
        .innerText = judul;

    document.getElementById("popup-date")
        .innerText = tanggal;

    document.getElementById("popup-desc")
        .innerText = deskripsi;
}

// =========================
// TUTUP POPUP
// =========================
function tutupGallery() {

    document.getElementById("galleryPopup")
        .classList.remove("active");
}

// =========================
// TUTUP SAAT KLIK OVERLAY
// =========================
window.onclick = function(event) {

    const popup = document.getElementById("galleryPopup");

    if (event.target === popup) {
        popup.classList.remove("active");
    }

}