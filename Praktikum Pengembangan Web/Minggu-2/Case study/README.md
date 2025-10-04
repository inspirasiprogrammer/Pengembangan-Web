# Case Study - Index

File ini berisi aplikasi web sederhana untuk menampilkan paragraf dan menghitung jumlah kalimat menggunakan HTML, CSS, dan JavaScript.

## Penjelasan Script

### Struktur dan Fitur
- **HTML & CSS**: Tampilan terdiri dari header tanggal, judul, paragraf konten, dan hasil jumlah kalimat. Desain responsif dan rapi.
- **JavaScript**:
  - Mengatur judul halaman dan menampilkan tanggal saat ini.
  - Data paragraf disimpan dalam objek `web`.
  - Judul dan konten paragraf diambil dari objek dan ditampilkan ke halaman.
  - Jumlah kalimat dihitung dengan memecah string berdasarkan tanda titik (`.`) dan ditampilkan di bawah paragraf.

### Penjelasan Logika
- **Jumlah kalimat** dihitung dengan `web.data.split(".").length - 1`, yaitu jumlah tanda titik pada paragraf.
- Semua proses dilakukan secara otomatis saat halaman dimuat.

## Cara Menjalankan
1. Pastikan file `index_.html` berada di folder yang sesuai.
2. Buka file `index_.html` di browser (klik dua kali atau buka dengan aplikasi browser).
3. Tanggal otomatis muncul di header.
4. Judul dan paragraf akan tampil, serta jumlah kalimat langsung dihitung dan ditampilkan.

## Tujuan
- Memahami manipulasi DOM dan logika string di JavaScript.
- Menerapkan analisis sederhana pada teks/paragraf secara otomatis.

---
Script ini cocok untuk belajar interaksi web, manipulasi data, dan logika dasar di JavaScript.