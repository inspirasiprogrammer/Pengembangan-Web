# README date.js

File ini berisi contoh lengkap penggunaan berbagai fitur dan metode pada objek Date di JavaScript.

## Fitur dan Penjelasan
- **new Date()**: Membuat objek Date dengan waktu saat ini.
- **new Date(string)**: Membuat objek Date dari string tanggal/waktu.
- **new Date(yy, mm, dd, hh, mm, ss)**: Membuat objek Date dari komponen angka (bulan mulai dari 0).
- **new Date(milliseconds)**: Membuat objek Date dari milidetik sejak 1 Jan 1970.
- **getFullYear()**: Mengambil tahun (4 digit).
- **getMonth()**: Mengambil bulan (0-11).
- **getDate()**: Mengambil tanggal dalam bulan (1-31).
- **getDay()**: Mengambil hari dalam minggu (0=Minggu).
- **getHours()**: Mengambil jam (0-23).
- **getMinutes()**: Mengambil menit (0-59).
- **getSeconds()**: Mengambil detik (0-59).
- **getMilliseconds()**: Mengambil milidetik (0-999).
- **getTimezoneOffset()**: Mengambil selisih waktu lokal dan UTC dalam menit.
- **setFullYear(year)**: Mengatur tahun.
- **setMonth(month)**: Mengatur bulan.

Setiap fitur didemonstrasikan dan hasilnya ditampilkan ke konsol.

## Cara Menjalankan
1. Pastikan Node.js sudah terpasang.
2. Buka terminal di folder ini.
3. Jalankan perintah:
   ```powershell
   node date.js
   ```
4. Output akan muncul di terminal sesuai urutan operasi Date.

---
Script ini cocok untuk belajar dan eksperimen berbagai fitur Date di JavaScript.