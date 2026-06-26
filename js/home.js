const sliderData = [
    "/assets/img/bg-home(1).png",
    "/assets/img/bg-home(2).png",
    "/assets/img/bg-home(3).png",
    "/assets/img/bg-home(4).png",
    "/assets/img/bg-home(5).png",
    "/assets/img/bg-home(6).png"
];

let currentSlide = 0;
let slideTimer;

function renderSlider() {
    const slidesContainer = document.getElementById("slidesContainer");
    const dotsContainer = document.getElementById("sliderDots");

    if (!slidesContainer || !dotsContainer) return;

    slidesContainer.innerHTML = "";
    dotsContainer.innerHTML = "";

    sliderData.forEach((src, index) => {
        slidesContainer.innerHTML += `
            <img src="${src}" class="slide ${index === 0 ? "active" : ""}" alt="Slide ${index + 1}">
        `;

        dotsContainer.innerHTML += `
            <span class="dot ${index === 0 ? "active" : ""}" data-index="${index}"></span>
        `;
    });

    document.querySelectorAll(".dot").forEach(dot => {
        dot.addEventListener("click", () => {
            gantiSlide(Number(dot.dataset.index));
            startAutoSlide();
        });
    });
}

function gantiSlide(index) {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    if (!slides.length) return;

    currentSlide = index;

    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % sliderData.length;
    gantiSlide(currentSlide);
}

function prevSlide() {
    currentSlide = currentSlide - 1;

    if (currentSlide < 0) {
        currentSlide = sliderData.length - 1;
    }

    gantiSlide(currentSlide);
}

function startAutoSlide() {
    clearInterval(slideTimer);
    slideTimer = setInterval(nextSlide, 4000);
}

function initSliderSwipe() {
    const slider = document.getElementById("heroSlider");
    if (!slider) return;

    let startX = 0;

    slider.addEventListener("touchstart", function(e) {
        startX = e.touches[0].clientX;
        clearInterval(slideTimer);
    }, { passive: true });

    slider.addEventListener("touchend", function(e) {
        const endX = e.changedTouches[0].clientX;
        const distance = startX - endX;

        if (Math.abs(distance) > 50) {
            if (distance > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }

        startAutoSlide();
    }, { passive: true });
}

renderSlider();
initSliderSwipe();
startAutoSlide();

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
const schoolData = [
    {
        id: "SMPN1",
        logo: "/assets/img/logo-spansa.png",
        nama: "SMPN 1 BTG",
        jumlah: 5,
        anggota: [
            "/assets/img/spansa_ajeng.png",
            "/assets/img/spansa_annisa.png",
            "/assets/img/spansa_dwilya.png",
            "/assets/img/spansa_nopal.png",
            "/assets/img/spansa_rasya.png"
        ]
    },
    {
        id: "SMPN5",
        logo: "/assets/img/logo-smpn5.png",
        nama: "SMPN 5 BTG",
        jumlah: 1,
        anggota: [
            "/assets/img/smpn5_asyifa.png"
        ]
    },
    {
        id: "SMPN8",
        logo: "/assets/img/logo-smpn8.png",
        nama: "SMPN 8 BTG",
        jumlah: 1,
        anggota: [
            "/assets/img/smpn8_najma.png"
        ]
    },
    {
        id: "YABIS_SMP",
        logo: "/assets/img/logo-yabis.png",
        nama: "SMP IT YABIS",
        jumlah: 1,
        anggota: [
            "/assets/img/smp_yabis_qiano.png"
        ]
    },
    {
        id: "YPK",
        logo: "/assets/img/logo-ypk.png",
        nama: "SMP YPK",
        jumlah: 3,
        anggota: [
            "/assets/img/smp_ypk_firyal.png",
            "/assets/img/smp_ypk_nadine.png",
            "/assets/img/smp_ypk_ravil.png"
        ]
    },
    {
        id: "SMANSA",
        logo: "/assets/img/logo-smansa.png",
        nama: "SMAN 1 BTG",
        jumlah: 2,
        anggota: [
            "/assets/img/smansa_azka.png",
            "/assets/img/smansa_sabil.png",
        ]
    },
    {
        id: "SMANDA",
        logo: "/assets/img/logo-smanda.png",
        nama: "SMAN 2 BTG",
        jumlah: 3,
        anggota: [
            "/assets/img/smanda_khumaira.png",
            "/assets/img/smanda_najwa.png",
            "/assets/img/smanda_vebry.png"
        ]
    },
    {
        id: "SMANTIG",
        logo: "/assets/img/logo-smantig.png",
        nama: "SMAN 3 BTG",
        jumlah: 3,
        anggota: [
            "/assets/img/smantig_mira.png",
            "/assets/img/smantig_aji.png",
            "/assets/img/smantig_vina.png"
        ]
    },
    {
        id: "SMAKEN",
        logo: "/assets/img/logo-smaken.png",
        nama: "SMKN 1 BTG",
        jumlah: 3,
        anggota: [
            "/assets/img/smaken_lutfha.png",
            "/assets/img/smaken_nauval.png",
            "/assets/img/smaken_rasya.png"
        ]
    },
    {
        id: "SMKN3",
        logo: "/assets/img/logo-smkn3.png",
        nama: "SMKN 3 BTG",
        jumlah: 1,
        anggota: [
            "/assets/img/smkn3_zahran.png",
        ]
    },
    {
        id: "YABIS_SMA",
        logo: "/assets/img/logo-yabis.png",
        nama: "SMA IT YABIS ",
        jumlah: 2,
        anggota: [
            "/assets/img/sma_yabis_arifin.png",
            "/assets/img/sma_yabis_iffah.png",
        ]
    },
    {
        id: "BU",
        logo: "/assets/img/logo-bu.png",
        nama: "SMA BU BTG",
        jumlah: 2,
        anggota: [
            "/assets/img/bu_aldi.png",
            "/assets/img/bu_tiara.png",
        ]
    },
    {
        id: "DHBS",
        logo: "/assets/img/logo-dhbs.png",
        nama: "SMA IT DHBS",
        jumlah: 2,
        anggota: [
            "/assets/img/dhbs_syamil.png",
            "/assets/img/dhbs_vio.png",
        ]
    },
    {
        id: "YPK_SMA",
        logo: "/assets/img/logo-ypk.png",
        nama: "SMA YPK",
        jumlah: 1,
        anggota: [
            "/assets/img/sma_ypk_rafie.png",
        ]
    },
    {
        id: "SMKS",
        logo: "/assets/img/logo-smkn.png",
        nama: "SMKS NUSMAN",
        jumlah: 1,
        anggota: [
            "/assets/img/smks_andika.png"
        ]
    },
    {
        id: "YKPP",
        logo: "/assets/img/logo-ykpp.png",
        nama: "SMKS YKPP",
        jumlah: 1,
        anggota: [
            "/assets/img/ykpp_adinda.png",
        ]
    },
];

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

function renderSchools() {
    const container = document.getElementById("schoolContainer");
    if (!container) return;

    container.innerHTML = "";

    schoolData.forEach((school) => {
        const anggotaHTML = school.anggota.map((foto, index) => {
            return `
                <img 
                    class="popup-gallery-img ${index === 0 ? "active" : ""}" 
                    src="${foto}" 
                    alt="${school.nama} ${index + 1}">
            `;
        }).join("");

        const isSingle = school.anggota.length <= 1;

        container.innerHTML += `
            <div class="school-card" onclick="bukaSekolah('${school.id}')">
                <img src="${school.logo}" alt="${school.nama}">
                <h3>${school.nama}</h3>
                <p>${school.jumlah}</p>
            </div>
            <div class="school-popup" id="${school.id}">
                <span class="close-popup" onclick="tutupSekolah('${school.id}')">
                    &times;
                </span>
                <div class="popup-header">
                    <img src="${school.logo}" alt="${school.nama}">
                    <h2>${school.nama}</h2>
                </div>
                <div class="popup-gallery">
                    <button class="popup-nav popup-prev" type="button" ${isSingle ? "disabled" : ""}>‹</button>
                    <div class="popup-gallery-viewport">
                        ${anggotaHTML}
                    </div>
                    <button class="popup-nav popup-next" type="button" ${isSingle ? "disabled" : ""}>›</button>
                </div>
            </div>
        `;
    });
}

const galleryData = [
        {
            judul: "MUSYAWARAH BESAR ANGKATAN 11",
            tanggal: "14 Desember 2025",
            gambar: "/assets/img/gallery-fosbon(6).jpg"
        },
        {
            judul: "LDK",
            tanggal: "11 Januari 2026",
            gambar: "/assets/img/gallery-fosbon(7).png"
        },
        {
            judul: "PELANTIKAN PENGURUS",
            tanggal: "14 Februari 2026",
            gambar: "/assets/img/gallery-fosbon(3).png"
        },
        {
            judul: "MALAM KEAKRABAN",
            tanggal: "15 Februari 2026",
            gambar: "/assets/img/gallery-fosbon(5).png"
        },
        {
            judul: "RAPAT KERJA",
            tanggal: "28 Februari 2026",
            gambar: "/assets/img/gallery-fosbon(1).png"
        },
        {
            judul: "BUKBER",
            tanggal: "14 Maret 2026",
            gambar: "/assets/img/gallery-fosbon(2).jpeg"
        },
        {
            judul: "FOSRAN",
            tanggal: "14 Maret 2026",
            gambar: "/assets/img/gallery-fosbon(4).png"
        },
        {
            judul: "FOSBON CLASS",
            tanggal: "2 Mei 2026",
            gambar: "/assets/img/gallery-fosbon(2).png"
        }
    ];

function renderGallery() {
    const container = document.getElementById("galleryContainer");
    if (!container) return;
    container.innerHTML = "";
    galleryData.forEach(item => {
        container.innerHTML += `
            <div class="gallery-card">
                <img
                    src="${item.gambar}"
                    alt="${item.judul}"
                    onclick="bukaGallery(this)"
                >
                <div class="gallery-info">
                    <h3>${item.judul}</h3>
                    <p>${item.tanggal}</p>
                </div>
            </div>
        `;
    });
}
renderGallery();

renderSchools();
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

function initSchoolToggle() {
    const container = document.getElementById("schoolContainer");
    const toggleBtn = document.getElementById("schoolToggle");

    if (!container || !toggleBtn) return;

    let isExpanded = false;

    function getPreviewConfig() {
        const width = window.innerWidth;

        if (width > 768) {
            return {
                mobile: false,
                visible: Infinity,
                preview: Infinity,
                maxHeight: "none"
            };
        }

        // HP agak lebar / tablet kecil
        if (width >= 600) {
            return {
                mobile: true,
                visible: 4,
                preview: 8,
                maxHeight: "430px"
            };
        }

        // HP kecil
        return {
            mobile: true,
            visible: 3,
            preview: 6,
            maxHeight: "640px"
        };
    }

    function applyPreview() {
        const cards = container.querySelectorAll(".school-card");
        const config = getPreviewConfig();

        cards.forEach((card, index) => {
            card.classList.remove("is-blur");
            card.style.display = "";
            card.style.pointerEvents = "";
        });

        if (!config.mobile) {
            container.classList.remove("school-collapsed");
            toggleBtn.style.display = "none";
            return;
        }

        toggleBtn.style.display = "block";

        if (isExpanded) {
            container.classList.remove("school-collapsed");
            toggleBtn.textContent = "Tutup";
            return;
        }

        container.classList.add("school-collapsed");
        container.style.setProperty("--school-preview-height", config.maxHeight);
        toggleBtn.textContent = "Lihat Selengkapnya";

        cards.forEach((card, index) => {
            if (index >= config.preview) {
                card.style.display = "none";
            } else if (index >= config.visible) {
                card.classList.add("is-blur");
            }
        });
    }

    toggleBtn.addEventListener("click", function () {
        isExpanded = !isExpanded;
        applyPreview();
    });

    window.addEventListener("resize", applyPreview);

    applyPreview();
}

initSchoolToggle();
