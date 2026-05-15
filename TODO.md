# TODO - Perbaikan UI (Navbar responsif + Gallery)

## 1) Navbar responsif (burger + dropdown bersarang)
- Ubah `index.html` dan `galeri.html`:
  - ganti menu Home/Profil/Galeri/Kontak jadi wrapper `.nav-links`.
  - tambahkan tombol burger untuk toggle dropdown.
  - Pastikan Profil tetap bisa buka submenu (Visi & Misi, Struktur Organisasi) dan masing-masing masih bisa diklik.
- Update CSS `css/home.css` untuk responsif navbar:
  - definisikan `.nav-toggle`, `.nav-links`, dropdown behavior pada layar kecil.

## 2) Layout responsif biar rapi saat width mengecil
- Tambahkan breakpoint di `css/home.css` dan `css/gallery.css`:
  - atur flex/grid agar elemen tidak “nempel posisi laptop”.

## 3) Redesign gallery (konsisten + maksimal 6 gambar saat popup)
- Ubah `galeri.html`:
  - setiap card cukup tampil kotak + thumbnail(s) kecil (bukan deskripsi panjang).
  - saat card diklik, buka popup yang menampilkan maksimal 6 gambar dokumentasi.
- Ubah `css/gallery.css`:
  - pastikan card pakai ukuran fixed + gambar sebagai thumbnail konsisten (object-fit cover/contain dengan tinggi tetap).
- Ubah `js/gallery.js`:
  - implementasi logic popup multi-image (maks 6) + tanpa mengharuskan deskripsi panjang.

