# Dokumentasi Task Pagination

## Deskripsi

Task Pagination adalah aplikasi web sederhana yang menampilkan data author beserta gambar secara paginasi menggunakan API dari [Picsum Photos](https://picsum.photos/). Pengguna dapat menelusuri data author satu per satu menggunakan tombol navigasi.

## Struktur File

- `author.html` : Halaman utama aplikasi.
- `main.js` : Script utama untuk logika tampilan dan interaksi.
- `AuthorData.js` : Kelas untuk mengambil data author dari API.
- `style.css` : (Jika ada) untuk styling tambahan.

## Penjelasan Fungsi Utama

### AuthorData.js
- **getAuthorData(page, limit)**
  - Mengambil data author dari API berdasarkan halaman (`page`) dan jumlah data per halaman (`limit`).
  - Menggunakan `fetch` dan mengembalikan data dalam bentuk JSON.

### main.js
- **show(page)**
  - Memanggil `getAuthorData` dan menampilkan data author pada tabel.
  - Menampilkan nama author dan gambar.
  - Menangani error jika data gagal dimuat.
- **btnPrev.onclick**
  - Navigasi ke halaman sebelumnya (jika halaman > 1).
- **btnNext.onclick**
  - Navigasi ke halaman berikutnya.

## Kemudahan Pengembangan

- **Modifikasi**
  - Kode terpisah antara logika data (`AuthorData.js`) dan tampilan/interaksi (`main.js`), sehingga mudah untuk dimodifikasi.
  - Untuk menambah fitur (misal: menampilkan lebih dari satu author per halaman), cukup ubah parameter `limit` pada pemanggilan `getAuthorData` dan sesuaikan tampilan pada fungsi `show`.
  - Styling dapat diubah langsung di file HTML pada bagian `<style>` atau dengan menambah file `style.css`.

- **Editing**
  - Semua file dapat diedit menggunakan text editor seperti VS Code.
  - Struktur kode bersih dan mudah dipahami, dengan penggunaan ES6 module.

## Proses Menjalankan

1. **Buka file `author.html` di browser**
   - Tidak memerlukan server lokal karena hanya menggunakan API publik dan file statis.
   - Jika menggunakan module ES6 dan browser tidak mendukung file lokal, jalankan server lokal (misal: dengan ekstensi Live Server di VS Code atau perintah `npx serve`).

2. **Navigasi**
   - Gunakan tombol `<<` dan `>>` untuk berpindah antar author.

## Debugging

- **Console Log**
  - Error pada pengambilan data akan muncul di konsol browser (F12 > Console).
- **Langkah Debug**
  1. Buka browser, tekan F12 untuk membuka DevTools.
  2. Pilih tab Console untuk melihat error atau log.
  3. Tambahkan `console.log` pada bagian kode yang ingin dilacak.

## Catatan

- Pastikan koneksi internet aktif karena data diambil dari API eksternal.
- Jika ingin menambah fitur, disarankan untuk tetap memisahkan logika data dan tampilan agar mudah dikembangkan.
