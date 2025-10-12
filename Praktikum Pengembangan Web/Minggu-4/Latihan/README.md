# Author Page AJAX Demo

Aplikasi ini menampilkan daftar gambar beserta nama author menggunakan data dari API [Picsum Photos](https://picsum.photos/v2/list). Data diambil secara asynchronous (AJAX/fetch API) dan ditampilkan dalam tabel pada halaman web.

## Fitur
- Mengambil data gambar dan author dari API eksternal.
- Menampilkan gambar dan nama author dalam tabel.
- Penanganan error jika data gagal dimuat.
- Struktur kode modular menggunakan ES Module (`AuthorData.js` dan `main.js`).

## Struktur File
- `author.html` — Halaman utama yang menampilkan tabel author dan gambar.
- `main.js` — Script utama yang menginisialisasi dan menjalankan proses pengambilan serta penampilan data.
- `AuthorData.js` — Kelas yang menangani pengambilan data dan menampilkan data ke tabel.

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
   - Tabel akan terisi dengan gambar dan nama author dari API.
   - Jika terjadi error (misal koneksi internet terputus), pesan error akan muncul di console browser.

## Penjelasan Kode
- **AuthorData.js**
  - `getAuthorData()`: Mengambil data dari API menggunakan `fetch` secara asynchronous.
  - `displayAuthor(data)`: Menampilkan data ke dalam tabel HTML.
- **main.js**
  - Membuat instance `AuthorData` dan memanggil fungsi untuk mengambil serta menampilkan data.
- **author.html**
  - Menyediakan struktur tabel dan mengimpor script utama dengan `<script type="module" src="main.js"></script>`.

## Catatan
- Pastikan browser mendukung ES Module (modern browser seperti Chrome, Edge, Firefox).
- Koneksi internet diperlukan untuk mengambil data dari API.

---

Jika ada pertanyaan atau kendala, silakan hubungi instruktur atau cek console browser untuk pesan error.