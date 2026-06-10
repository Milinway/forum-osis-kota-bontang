// =========================
// DATA GALERI
// =========================
const galleryData = [
    {
        id: "musyawarah",
        title: "MUSYAWARAH BESAR ANGKATAN 11",
        cover: "/assets/img/gallery-fosbon(6).jpg",
        images: [
            "/assets/img/galeri/musyawarah.png",
        ],
    },
    {
        id: "ldk",
        title: "LDK",
        cover: "/assets/img/gallery-fosbon(7).png",
        images: [
            "/assets/img/galeri/ldk(1).png",
            "/assets/img/galeri/ldk(2).png",
            "/assets/img/galeri/ldk(3).png",
            "/assets/img/galeri/ldk(4).png",
            "/assets/img/galeri/ldk(5).png",
            "/assets/img/galeri/ldk(6).png",
            "/assets/img/galeri/ldk(7).png",
            "/assets/img/galeri/ldk(8).png",
        ],
    },
    {
        id: "pelantikan",
        title: "PELANTIKAN PENGURUS",
        cover: "/assets/img/gallery-fosbon(3).png",
        images: [
            "/assets/img/galeri/pelantikan(1).png",
            "/assets/img/galeri/pelantikan(2).png",
            "/assets/img/galeri/pelantikan(3).png",
            "/assets/img/galeri/pelantikan(4).png",
            "/assets/img/galeri/pelantikan(5).png",
            "/assets/img/galeri/pelantikan(6).png",
            "/assets/img/galeri/pelantikan(7).png",
        ],
    },
    {
        id: "makrab",
        title: "MALAM KEAKRABAN",
        cover: "/assets/img/gallery-fosbon(5).png",
        images: [
            "/assets/img/galeri/makrab(1).png",
            "/assets/img/galeri/makrab(2).png",
            "/assets/img/galeri/makrab(3).png",
        ],
    },
    {
        id: "raker",
        title: "RAPAT KERJA",
        cover: "/assets/img/gallery-fosbon(1).png",
        images: [
            "/assets/img/galeri/raker.png",
        ],
    },
    {
        id: "bukber",
        title: "BUKBER",
        cover: "/assets/img/gallery-fosbon(3).jpeg",
        images: [
            "/assets/img/galeri/bukber.png",
        ],
    },
    {
        id: "fosran",
        title: "FOSRAN",
        cover: "/assets/img/gallery-fosbon(4).png",
        images: [
            "/assets/img/galeri/fosran(8).png",
            "/assets/img/galeri/fosran(9).png",
            "/assets/img/galeri/fosran(10).png",
            "/assets/img/galeri/fosran(11).png",
            "/assets/img/galeri/fosran(12).png",
            "/assets/img/galeri/fosran(13).png",
            "/assets/img/galeri/fosran(7).png",
        ],
    },
    {
        id: "fosclass",
        title: "FOSBON CLASS",
        cover: "/assets/img/gallery-fosbon(2).png",
        images: [
            "/assets/img/galeri/fosbonclass(1).png",
            "/assets/img/galeri/fosbonclass(2).png",
            "/assets/img/galeri/fosbonclass(3).png",
            "/assets/img/galeri/fosbonclass(4).png",
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