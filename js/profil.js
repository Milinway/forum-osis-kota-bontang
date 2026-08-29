// FAQ ACCORDION
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  if (!question) return;

  question.addEventListener("click", () => {
    faqItems.forEach((faq) => {
      if (faq !== item) faq.classList.remove("active");
    });

    item.classList.toggle("active");
  });
});

// DATA ANGGOTA
const anggotaData = {
  pengurusIntiContainer: [
    {
      nama: "Najwa Almagfira",
      jabatan: "Ketua Umum",
      foto: "../assets/img/smanda_najwa.webp"
    },
    {
      nama: "Khumaira Ulvia Aqila",
      jabatan: "Wakil Ketua Umum 1",
      foto: "../assets/img/smanda_khumaira.webp"
    },
    {
      nama: "Andi Muhammad Nauval",
      jabatan: "Wakil Ketua Umum 2",
      foto: "../assets/img/smaken_nauval.webp"
    },
    {
      nama: "Ahmad Zahran",
      jabatan: "Sekretaris Umum",
      foto: "../assets/img/smkn3_zahran.webp"
    },
    {
      nama: "Rasya Surya Rosnandi",
      jabatan: "Bendahara Umum",
      foto: "../assets/img/smaken_rasya.webp"
    }
  ],

  medinfoContainer: [
    {
      nama: "Syamil Hilmi Abdillah",
      jabatan: "Kepala Departemen MEDINFO",
      foto: "../assets/img/dhbs_syamil.webp"
    },
    {
      nama: "Amirah Athiyah Syam Anas",
      jabatan: "Anggota Departemen MEDINFO",
      foto: "../assets/img/smantig_mira.webp"
    },
    {
      nama: "Muhammad Rasya Putra",
      jabatan: "Anggota Departemen MEDINFO",
      foto: "../assets/img/spansa_rasya.webp"
    },
    {
      nama: "Qiano Yudhistyra Hadi Trianto",
      jabatan: "Anggota Departemen MEDINFO",
      foto: "../assets/img/smp_yabis_qiano.webp"
    }
  ],

  mibagaContainer: [
    {
      nama: "Muhammad Arifin",
      jabatan: "Kepala Departemen MIBAGA",
      foto: "../assets/img/sma_yabis_arifin.webp"
    },
    {
      nama: "Adinda Komarlia Sari",
      jabatan: "Anggota Departemen MIBAGA",
      foto: "../assets/img/ykpp_adinda.webp"
    },
    {
      nama: "Najma Raihana",
      jabatan: "Anggota Departemen MIBAGA",
      foto: "../assets/img/smpn8_najma.webp"
    },
    {
      nama: "Ravil Zidan Al Khalify Jacob",
      jabatan: "Anggota Departemen MIBAGA",
      foto: "../assets/img/smp_ypk_ravil.webp"
    }
  ],

    kwuContainer: [
    {
      nama: "Annisa Khaira Salsabila",
      jabatan: "Kepala Departemen KWU",
      foto: "../assets/img/spansa_annisa.webp"
    },
    {
      nama: "Ajeng Nur Cahyani",
      jabatan: "Anggota Departemen KWU",
      foto: "../assets/img/spansa_ajeng.webp"
    },
    {
      nama: "Andika Septian Pratama",
      jabatan: "Anggota Departemen KWU",
      foto: "../assets/img/smks_andika.webp"
    },
    {
      nama: "Pastika Fayyadh Gaviota",
      jabatan: "Anggota Departemen KWU",
      foto: "../assets/img/dhbs_vio.webp"
    }
  ],

    kestariContainer: [
    {
      nama: "Salsabil Alera Dzakiyyah",
      jabatan: "Kepala Departemen KESTARI",
      foto: "../assets/img/smansa_sabil.webp"
    },
    {
      nama: "Ananda Dwilya Pertiwi",
      jabatan: "Anggota Departemen KESTARI",
      foto: "../assets/img/spansa_dwilya.webp"
    },
    {
      nama: "Asyifa Nur Qhumayroh",
      jabatan: "Anggota Departemen KESTARI",
      foto: "../assets/img/smpn5_asyifa.webp"
    },
    {
      nama: "Iffah Ragidha",
      jabatan: "Anggota Departemen KESTARI",
      foto: "../assets/img/sma_yabis_iffah.webp"
    },
    {
      nama: "Nadine Valeria Ishana Kemat",
      jabatan: "Anggota Departemen KESTARI",
      foto: "../assets/img/smp_ypk_nadine.webp"
    },
  ],

      kaderContainer: [
    {
      nama: "Lutfha Al Karimah",
      jabatan: "Kepala Departemen KADER",
      foto: "../assets/img/smaken_lutfha.webp"
    },
    {
      nama: "Fadillah Azka Amalia",
      jabatan: "Anggota Departemen KADER",
      foto: "../assets/img/smansa_azka.webp"
    },
    {
      nama: "Muhammad Naufal",
      jabatan: "Anggota Departemen KADER",
      foto: "../assets/img/spansa_nopal.webp"
    },
    {
      nama: "Rafie Tegar Pangestu",
      jabatan: "Anggota Departemen KADER",
      foto: "../assets/img/sma_ypk_rafie.webp"
    }
  ],

        kegmanContainer: [
    {
      nama: "Muhammad Aldi Hamzah",
      jabatan: "Kepala Departemen KEGMAN",
      foto: "../assets/img/bu_aldi.webp"
    },
    {
      nama: "Revina Gracesia Putri",
      jabatan: "Anggota Departemen KEGMAN",
      foto: "../assets/img/smantig_vina.webp"
    },
    {
      nama: "Firyal Syahla Aqilah Lukman",
      jabatan: "Anggota Departemen KEGMAN",
      foto: "../assets/img/smp_ypk_firyal.webp"
    },
    {
      nama: "Muhammad Rasya Aji Pratama Putra",
      jabatan: "Anggota Departemen KEGMAN",
      foto: "../assets/img/smantig_aji.webp"
    },
    {
      nama: "Tiara Aulia Putri",
      jabatan: "Anggota Departemen KEGMAN",
      foto: "../assets/img/bu_tiara.webp"
    },
    {
      nama: "Vebry Valencia",
      jabatan: "Anggota Departemen KEGMAN",
      foto: "../assets/img/smanda_vebry.webp"
    },
  ],
};

// FUNCTION RENDER CARD
function renderAnggota(containerId, data) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = data.map((anggota) => `
    <div class="anggota-card">
      <img src="${anggota.foto}" alt="${anggota.nama}">
      <h4>${anggota.nama}</h4>
      <p>${anggota.jabatan}</p>
    </div>
  `).join("");
}

// JALANKAN SEMUA DATA
Object.keys(anggotaData).forEach((containerId) => {
  renderAnggota(containerId, anggotaData[containerId]);
});