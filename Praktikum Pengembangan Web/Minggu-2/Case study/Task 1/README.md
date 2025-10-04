# Case Study - Task 1

File ini berisi contoh aplikasi web sederhana untuk identifikasi paragraf menggunakan HTML, CSS, dan JavaScript.

## Penjelasan Script

### Struktur dan Fitur
- **HTML & CSS**: Tampilan terdiri dari header tanggal, judul, paragraf konten, dan tombol identifikasi. Desain responsif dan rapi.
- **JavaScript**:
  - Mengatur judul halaman dan menampilkan tanggal saat ini.
  - Data paragraf disimpan dalam objek `web`.
  - Tombol "Identifikasi Paragraf" akan menghitung jumlah kalimat dan kata pada paragraf menggunakan RegExp dan split.
  - Hasil identifikasi ditampilkan di bawah paragraf.
  - Jika tombol diklik lagi, akan muncul alert bahwa paragraf sudah diidentifikasi.

### Penjelasan Logika Identifikasi
- **Jumlah kalimat** dihitung dengan mencari tanda titik, tanda seru, atau tanda tanya.
- **Jumlah kata** dihitung dengan memecah string berdasarkan spasi dan filter kata kosong.
- Semua proses dilakukan secara dinamis saat tombol diklik.

## Cara Menjalankan
1. Pastikan file `index_.html` berada di folder yang sesuai.
2. Buka file `index_.html` di browser (klik dua kali atau buka dengan aplikasi browser).
3. Tanggal otomatis muncul di header.
4. Klik tombol "Identifikasi Paragraf" untuk melihat jumlah kalimat dan kata pada paragraf.
5. Jika tombol diklik lagi, akan muncul peringatan bahwa identifikasi sudah dilakukan.

## Tujuan
- Memahami manipulasi DOM, event handler, dan logika string di JavaScript.
- Menerapkan analisis sederhana pada teks/paragraf secara interaktif.

---
Script ini cocok untuk belajar interaksi web, manipulasi data, dan event di JavaScript.