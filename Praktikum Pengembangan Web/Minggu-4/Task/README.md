
# Author Page AJAX Demo

Aplikasi ini menampilkan gambar dan nama author dari API [Picsum Photos](https://picsum.photos/v2/list) secara asinkron (AJAX/fetch API) dan memungkinkan navigasi antar author satu per satu menggunakan tombol.

## Fitur
- Mengambil data gambar dan nama author dari API eksternal.
- Menampilkan satu gambar dan nama author pada halaman web.
- Navigasi data author menggunakan tombol "<<" (sebelumnya) dan ">>" (berikutnya).
- Penanganan error jika data gagal dimuat (pesan error muncul di console browser).
- Struktur kode modular menggunakan ES Module (`AuthorData.js` dan `main.js`).

## Struktur File
- `author.html` — Halaman utama yang menampilkan gambar dan nama author beserta tombol navigasi.
- `main.js` — Script utama yang menginisialisasi, menangani navigasi, dan menampilkan data author.
- `AuthorData.js` — Kelas yang menangani pengambilan data dari API dan menampilkan data ke halaman.

## Cara Menjalankan
1. **Pastikan semua file (`author.html`, `main.js`, `AuthorData.js`) berada dalam satu folder.**
2. **Jalankan server lokal:**
   - Jika menggunakan Python, buka terminal di folder aplikasi dan jalankan:
     ```powershell
     python -m http.server 8000
     ```
   - Atau gunakan ekstensi Live Server di VS Code.
3. **Buka browser dan akses** `http://localhost:8000/author.html` (atau sesuaikan dengan port dan path folder Anda).
4. **Hasil:**
   - Gambar dan nama author akan tampil satu per satu sesuai navigasi tombol.
   - Jika terjadi error (misal koneksi internet terputus), pesan error akan muncul di console browser.

## Penjelasan Kode
- **AuthorData.js**
  - `getAuthorData(page, limit)`: Mengambil data author dari API menggunakan `fetch` secara asynchronous, berdasarkan halaman dan limit.
  - `displayAuthor(author)`: Menampilkan data author (gambar dan nama) ke elemen HTML.
- **main.js**
  - Membuat instance `AuthorData` dan mengatur navigasi tombol untuk menampilkan author berikutnya/sebelumnya.
  - Memanggil fungsi untuk mengambil dan menampilkan data author sesuai halaman.
- **author.html**
  - Menyediakan struktur tampilan gambar, nama author, dan tombol navigasi. Script utama diimpor dengan `<script type="module" src="main.js"></script>`.

## Catatan
- Pastikan browser mendukung ES Module (browser modern seperti Chrome, Edge, Firefox).
- Koneksi internet diperlukan untuk mengambil data dari API.

---

Jika ada pertanyaan atau kendala, silakan hubungi instruktur atau cek console browser untuk pesan error.