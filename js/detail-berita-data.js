const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const berita = beritaData.find((item) => item.id === id);

const detailTitle = document.getElementById("detail-title");
const detailDate = document.getElementById("detail-date");
const detailImg = document.getElementById("detail-img");
const detailContent = document.getElementById("detail-content");

if (berita) {
    detailTitle.innerText = berita.judul;
    detailDate.innerText = "DITERBITKAN PADA: " + berita.tanggal;
    detailImg.src = berita.gambar;
    detailImg.alt = berita.judul;
    detailContent.innerHTML = berita.isi;
} else {
    detailTitle.innerText = "Berita tidak ditemukan";
    detailDate.style.display = "none";
    detailImg.style.display = "none";
    detailContent.innerHTML = "<p>Maaf, berita yang kamu cari tidak tersedia.</p>";
}