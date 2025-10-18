# Dokumentasi Latihan Author Page (Minggu-5)

## Deskripsi

Aplikasi ini adalah contoh sederhana server Node.js yang menyajikan file HTML statis (`author.html`) melalui HTTP. Halaman web menampilkan tabel author, dan dapat dikembangkan lebih lanjut untuk menampilkan data dinamis.

## Struktur File

- `index.js` : Script Node.js untuk menjalankan server HTTP.
- `author.html` : Halaman web statis yang ditampilkan ke user.

## Penjelasan Fungsi Utama

### index.js
- Membuat server HTTP menggunakan modul `http` dan `fs`.
- Setiap request akan membalas dengan file `author.html`.
- Server berjalan di `127.0.0.1:3000`.

### author.html
- Halaman HTML statis dengan tabel author.
- Dapat dikembangkan untuk menampilkan data dinamis menggunakan JavaScript.

## Kemudahan Pengembangan

- **Editing & Modifikasi**
  - Kode server sangat sederhana, mudah dimodifikasi untuk menyajikan file lain atau menambah routing.
  - File HTML dapat diedit langsung untuk mengubah tampilan atau menambah fitur.
  - Untuk menambah data dinamis, bisa menambahkan script JavaScript di `author.html` atau mengembangkan server agar mengirim data JSON.

- **Struktur Jelas**
  - Pemisahan antara server (`index.js`) dan tampilan (`author.html`) memudahkan pengembangan dan debugging.

## Cara Menjalankan

1. Pastikan Node.js sudah terinstal.
2. Buka terminal di folder `Latihan`.
3. Jalankan perintah:
   ```
   node index.js
   ```
4. Buka browser dan akses `http://127.0.0.1:3000`.

## Debugging

- **Error pada Server**
  - Jika file `author.html` tidak ditemukan, server akan error. Pastikan nama file dan path sudah benar.
  - Error akan muncul di terminal tempat menjalankan `node index.js`.
- **Debugging Proses**
  - Tambahkan `console.log` pada bagian kode yang ingin dilacak di `index.js`.
  - Gunakan DevTools browser (F12) untuk debugging tampilan HTML.

## Catatan

- Untuk pengembangan lebih lanjut (misal: API, data dinamis), disarankan menggunakan framework seperti Express.js.
- Jika ingin menambah file statis lain, tambahkan pengecekan path pada server.
- Untuk development lebih nyaman, gunakan editor seperti VS Code dan ekstensi Live Server untuk preview HTML.
