// =========================
// DATA GALERI
// =========================
const galleryData = [
    {
        id: "musyawarah",
        title: "MUSYAWARAH BESAR ANGKATAN 11",
        cover: "/assets/img/galeri/musyawarah.webp",
        images: [
            "/assets/img/galeri/musyawarah.webp",
        ],
    },
    {
        id: "ldk",
        title: "LDK",
        cover: "/assets/img/galeri/ldk(8).webp",
        images: [
            "/assets/img/galeri/ldk(1).webp",
            "/assets/img/galeri/ldk(2).webp",
            "/assets/img/galeri/ldk(3).webp",
            "/assets/img/galeri/ldk(4).webp",
            "/assets/img/galeri/ldk(5).webp",
            "/assets/img/galeri/ldk(6).webp",
            "/assets/img/galeri/ldk(7).webp",
            "/assets/img/galeri/ldk(8).webp",
        ],
    },
    {
        id: "pelantikan",
        title: "PELANTIKAN PENGURUS",
        cover: "/assets/img/galeri/pelantikan(1).webp",
        images: [
            "/assets/img/galeri/pelantikan(1).webp",
            "/assets/img/galeri/pelantikan(2).webp",
            "/assets/img/galeri/pelantikan(3).webp",
            "/assets/img/galeri/pelantikan(4).webp",
            "/assets/img/galeri/pelantikan(5).webp",
            "/assets/img/galeri/pelantikan(6).webp",
            "/assets/img/galeri/pelantikan(7).webp",
        ],
    },
    {
        id: "makrab",
        title: "MALAM KEAKRABAN",
        cover: "/assets/img/galeri/makrab(1).webp",
        images: [
            "/assets/img/galeri/makrab(1).webp",
            "/assets/img/galeri/makrab(2).webp",
            "/assets/img/galeri/makrab(3).webp",
        ],
    },
    {
        id: "raker",
        title: "RAPAT KERJA",
        cover: "/assets/img/galeri/raker.webp",
        images: [
            "/assets/img/galeri/raker.webp",
        ],
    },
    {
        id: "bukber",
        title: "BUKBER",
        cover: "/assets/img/galeri/bukber.webp",
        images: [
            "/assets/img/galeri/bukber.webp",
        ],
    },
    {
        id: "fosran",
        title: "FOSRAN",
        cover: "/assets/img/galeri/fosran(9).webp",
        images: [
            "/assets/img/galeri/fosran(8).webp",
            "/assets/img/galeri/fosran(9).webp",
            "/assets/img/galeri/fosran(10).webp",
            "/assets/img/galeri/fosran(11).webp",
            "/assets/img/galeri/fosran(12).webp",
            "/assets/img/galeri/fosran(13).webp",
            "/assets/img/galeri/fosran(7).webp",
        ],
    },
    {
        id: "fosclass",
        title: "FOSBON CLASS",
        cover: "/assets/img/galeri/fosbonclass(2).webp",
        images: [
            "/assets/img/galeri/fosbonclass(1).webp",
            "/assets/img/galeri/fosbonclass(2).webp",
            "/assets/img/galeri/fosbonclass(3).webp",
            "/assets/img/galeri/fosbonclass(4).webp",
        ],
    },
];


// =========================
// RENDER CARD OTOMATIS
// =========================
const galleryContainer = document.getElementById("galleryContainer");

galleryData.forEach((item) => {
    const card = document.createElement("div");
    card.className = "gallery-card";

    card.innerHTML = `
        <img src="${item.cover}" alt="${item.title}">

        <div class="gallery-badge">
            <i class="fa-regular fa-image"></i>
            ${item.images.length} Foto
        </div>

        <div class="gallery-info">
            <h3>${item.title}</h3>

            <div class="gallery-link">
                LIHAT FOTO ACARA
                <i class="fa-solid fa-arrow-right"></i>
            </div>
        </div>
    `;

    card.addEventListener("click", () => bukaGallerySet(item.id));

    galleryContainer.appendChild(card);
});


// =========================
// BUKA POPUP SINGLE IMAGE
// =========================
function bukaGallery(gambar, judul = null, tanggal = null, deskripsi = null) {
    const popup = document.getElementById("galleryPopup");
    const popupContent = popup.querySelector(".popup-content");

    popup.classList.add("active");

    document.getElementById("popup-img").src = gambar;
    document.getElementById("popup-title").innerText = judul || "";
    document.getElementById("popup-date").innerText = tanggal || "";
    document.getElementById("popup-desc").innerHTML = deskripsi || "";

    if (!judul && !tanggal && !deskripsi) {
        popupContent.classList.add("single-image");
    } else {
        popupContent.classList.remove("single-image");
    }
}


// =========================
// BUKA SET GALERI
// =========================
function bukaGallerySet(id) {
    const gallery = galleryData.find((item) => item.id === id);

    if (!gallery || gallery.images.length === 0) return;

    if (gallery.images.length === 1) {
        bukaGallery(gallery.images[0]);
        return;
    }

    const popup = document.getElementById("multiGallery");
    const content = document.getElementById("multiGalleryContent");

    content.innerHTML = "";

    gallery.images.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = gallery.title;

        img.addEventListener("click", () => bukaGallery(src));

        content.appendChild(img);
    });

    popup.classList.add("active");
}


// =========================
// TUTUP POPUP
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