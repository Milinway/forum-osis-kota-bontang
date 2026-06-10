const beritaContainer = document.getElementById("beritaContainer");

if (beritaContainer) {
    beritaData.forEach((berita) => {
        const card = document.createElement("article");
        card.className = "berita-card";

        card.innerHTML = `
            <img src="${berita.gambar}" alt="${berita.judul}">

            <div class="berita-info">
                <p class="berita-date">${berita.tanggal}</p>

                <h2>${berita.judul}</h2>

                <p class="berita-excerpt">
                    ${berita.excerpt}
                </p>

                <a href="/berita/detail/?id=${berita.id}" class="berita-link">
                    Baca Selengkapnya
                    <i class="fa-solid fa-arrow-right"></i>
                </a>
            </div>
        `;

        beritaContainer.appendChild(card);
    });
}