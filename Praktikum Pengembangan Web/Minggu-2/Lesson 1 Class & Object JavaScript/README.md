# Lesson 1 - Class & Object JavaScript

File ini berisi contoh penggunaan class dan object pada JavaScript dengan studi kasus sederhana.

## Penjelasan Script

Script `manusia.js` mendefinisikan sebuah class bernama `Manusia` yang memiliki dua properti dan dua metode:

### Properti
- `nama`: Menyimpan nama manusia.
- `usia`: Menyimpan usia manusia.

### Metode
- `sapa()`: Menampilkan pesan sapaan ke konsol dengan nama dan usia.
- `ulangTahun()`: Menambah usia satu tahun dan menampilkan pesan ulang tahun ke konsol.

### Contoh Penggunaan
Script membuat objek baru dari class `Manusia` dengan nama "Budi" dan usia 25, lalu memanggil metode `sapa()` dan `ulangTahun()`:

```javascript
let orang = new Manusia("Budi", 25);
orang.sapa(); // Output: Halo, nama saya Budi dan saya berusia 25 tahun.
orang.ulangTahun(); // Output: Selamat ulang tahun! Sekarang saya 26 tahun.
```

## Cara Menjalankan

1. Pastikan Node.js sudah terpasang di komputer Anda.
2. Buka terminal di folder ini.
3. Jalankan perintah berikut:
   ```powershell
   node manusia.js
   ```
4. Output akan muncul di terminal sesuai dengan pemanggilan metode pada objek.

## Catatan
- Jika ingin menggunakan class `Manusia` di file lain (misal untuk import di Node.js), aktifkan baris `module.exports = Manusia;` dengan menghapus tanda komentar.

---

Script ini cocok untuk memahami dasar pembuatan class, object, dan metode di JavaScript.