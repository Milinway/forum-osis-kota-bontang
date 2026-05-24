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
      foto: "../assets/img/smanda_najwa.png"
    },
    {
      nama: "Khumaira Ulvia Aqila",
      jabatan: "Wakil Ketua Umum 1",
      foto: "../assets/img/smanda_khumaira.png"
    },
    {
      nama: "Andi Muhammad Nauval",
      jabatan: "Wakil Ketua Umum 2",
      foto: "../assets/img/smaken_nauval.png"
    },
    {
      nama: "Ahmad Zahran",
      jabatan: "Sekretaris Umum",
      foto: "../assets/img/smkn3_zahran.png"
    },
    {
      nama: "Rasya Surya Rosnandi",
      jabatan: "Bendahara Umum",
      foto: "../assets/img/smaken_rasya.png"
    }
  ],

  medinfoContainer: [
    {
      nama: "Syamil Hilmi Abdillah",
      jabatan: "Kepala Departemen MEDINFO",
      foto: "../assets/img/dhbs_syamil.png"
    },
    {
      nama: "Amirah Athiyah Syam Anas",
      jabatan: "Anggota Departemen MEDINFO",
      foto: "../assets/img/smantig_mira.png"
    },
    {
      nama: "Muhammad Rasya Putra",
      jabatan: "Anggota Departemen MEDINFO",
      foto: "../assets/img/spansa_rasya.png"
    },
    {
      nama: "Qiano Yudhistyra Hadi Trianto",
      jabatan: "Anggota Departemen MEDINFO",
      foto: "../assets/img/smp_yabis_qiano.png"
    }
  ],

  mibagaContainer: [
    {
      nama: "Muhammad Arifin",
      jabatan: "Kepala Departemen MIBAGA",
      foto: "../assets/img/sma_yabis_arifin.png"
    },
    {
      nama: "Adinda Komarlia Sari",
      jabatan: "Anggota Departemen MIBAGA",
      foto: "../assets/img/ykpp_adinda.png"
    },
    {
      nama: "Najma Raihana",
      jabatan: "Anggota Departemen MIBAGA",
      foto: "../assets/img/smpn8_najma.png"
    },
    {
      nama: "Ravil Zidan Al Khalify Jacob",
      jabatan: "Anggota Departemen MIBAGA",
      foto: "../assets/img/smp_ypk_ravil.png"
    }
  ],

    kwuContainer: [
    {
      nama: "Annisa Khaira Salsabila",
      jabatan: "Kepala Departemen KWU",
      foto: "../assets/img/spansa_annisa.png"
    },
    {
      nama: "Ajeng Nur Cahyani",
      jabatan: "Anggota Departemen KWU",
      foto: "../assets/img/spansa_ajeng.png"
    },
    {
      nama: "Andika Septian Pratama",
      jabatan: "Anggota Departemen KWU",
      foto: "../assets/img/smks_andika.png"
    },
    {
      nama: "Pastika Fayyadh Gaviota",
      jabatan: "Anggota Departemen KWU",
      foto: "../assets/img/dhbs_vio.png"
    }
  ],

    kestariContainer: [
    {
      nama: "Salsabil Alera Dzakiyyah",
      jabatan: "Kepala Departemen KESTARI",
      foto: "../assets/img/smansa_sabil.png"
    },
    {
      nama: "Ananda Dwilya Pertiwi",
      jabatan: "Anggota Departemen KESTARI",
      foto: "../assets/img/spansa_dwilya.png"
    },
    {
      nama: "Asyifa Nur Qhumayroh",
      jabatan: "Anggota Departemen KESTARI",
      foto: "../assets/img/smpn5_asyifa.png"
    },
    {
      nama: "Iffah Ragidha",
      jabatan: "Anggota Departemen KESTARI",
      foto: "../assets/img/sma_yabis_iffah.png"
    },
    {
      nama: "Nadine Valeria Ishana Kemat",
      jabatan: "Anggota Departemen KESTARI",
      foto: "../assets/img/smp_ypk_nadine.png"
    },
  ],

      kaderContainer: [
    {
      nama: "Lutfha Al Karimah",
      jabatan: "Kepala Departemen KADER",
      foto: "../assets/img/smaken_lutfha.png"
    },
    {
      nama: "Fadillah Azka Amalia",
      jabatan: "Anggota Departemen KADER",
      foto: "../assets/img/smansa_azka.png"
    },
    {
      nama: "Muhammad Naufal",
      jabatan: "Anggota Departemen KADER",
      foto: "../assets/img/spansa_nopal.png"
    },
    {
      nama: "Rafie Tegar Pangestu",
      jabatan: "Anggota Departemen KADER",
      foto: "../assets/img/sma_ypk_rafie.png"
    }
  ],

        kegmanContainer: [
    {
      nama: "Muhammad Aldi Hamzah",
      jabatan: "Kepala Departemen KEGMAN",
      foto: "../assets/img/bu_aldi.png"
    },
    {
      nama: "Revina Gracesia Putri",
      jabatan: "Anggota Departemen KEGMAN",
      foto: "../assets/img/smantig_vina.png"
    },
    {
      nama: "Firyal Syahla Aqilah Lukman",
      jabatan: "Anggota Departemen KEGMAN",
      foto: "../assets/img/smp_ypk_firyal.png"
    },
    {
      nama: "Muhammad Rasya Aji Pratama Putra",
      jabatan: "Anggota Departemen KEGMAN",
      foto: "../assets/img/smantig_aji.png"
    },
    {
      nama: "Tiara Aulia Putri",
      jabatan: "Anggota Departemen KEGMAN",
      foto: "../assets/img/bu_tiara.png"
    },
    {
      nama: "Vebry Valencia",
      jabatan: "Anggota Departemen KEGMAN",
      foto: "../assets/img/smanda_vebry.png"
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