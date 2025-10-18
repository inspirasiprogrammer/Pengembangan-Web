# Dokumentasi Proyek CV Web (Minggu-5/Task)

## Deskripsi
Proyek ini adalah aplikasi web sederhana untuk menampilkan Curriculum Vitae (CV) interaktif berbasis HTML, CSS, dan JavaScript. Terdapat fitur preview sertifikat, QR code untuk verifikasi online, serta tombol download ke PDF (via print). Proyek ini juga dilengkapi server Node.js sederhana untuk kebutuhan pengujian lokal.

---

## Struktur Folder

- `index.html`  
  Halaman utama CV.
- `style.css`  
  File CSS untuk styling modern dan responsif.
- `server.js`  
  Server Node.js sederhana untuk serving file statis.
- `img/`  
  Folder gambar (foto profil, sertifikat, dll).

---

## Penjelasan Fungsi Utama

### 1. index.html
- **Preview Sertifikat**: Klik pada nama sertifikat akan menampilkan gambar sertifikat dalam modal.
- **QR Code**: Otomatis generate QR code yang mengarah ke URL halaman saat ini.
- **Animasi Fade-in**: Setiap section muncul dengan animasi saat discroll.
- **Download PDF**: Tombol di atas halaman untuk print/download ke PDF.

### 2. style.css
- Desain modern, responsif, dan siap cetak.
- Mendukung dark overlay untuk modal preview gambar.
- Media query untuk tampilan mobile.

### 3. server.js
- Menyediakan server lokal pada `http://127.0.0.1:8081`.
- Otomatis melayani file statis (HTML, CSS, JS, gambar).
- Memudahkan preview dan debugging tanpa perlu ekstensi Live Server.

---

## Kemudahan Development

- **Editing**: Semua kode terpisah dan mudah dimodifikasi. 
  - Ubah konten CV di `index.html`.
  - Modifikasi tampilan di `style.css`.
  - Tambah gambar di folder `img/`.
- **Live Preview**: Jalankan `node server.js` di folder ini, lalu buka browser ke `http://127.0.0.1:8081`.
- **Debugging**: 
  - Console log JavaScript langsung terlihat di DevTools browser.
  - Error server tampil di terminal.
- **Cetak/Export PDF**: Klik tombol "Download sebagai PDF" di halaman.
- **Mobile Friendly**: Layout otomatis menyesuaikan di layar kecil.

---

## Cara Menjalankan

1. Pastikan Node.js sudah terinstal.
2. Buka terminal di folder `Minggu-5/Task`.
3. Jalankan perintah:
   ```powershell
   node server.js
   ```
4. Buka browser ke `http://127.0.0.1:8081`.

---

## Tips Modifikasi
- Untuk menambah/mengganti sertifikat, edit bagian `<section id="sertifikasi">` di `index.html` dan tambahkan file gambar di `img/sertifikat/`.
- Untuk mengubah profil, kontak, atau pengalaman, edit langsung di `index.html`.
- Untuk menyesuaikan warna atau font, edit variabel di bagian atas `style.css`.

---

## Debugging
- Jika gambar tidak muncul, pastikan path dan nama file di `img/` sudah benar.
- Jika server error, cek terminal untuk pesan error detail.
- Untuk debugging JavaScript, gunakan DevTools (F12) di browser.

---

## Lisensi
Proyek ini untuk keperluan pembelajaran dan pengembangan web dasar.