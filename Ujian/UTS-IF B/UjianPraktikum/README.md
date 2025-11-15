# Galeri Foto Dinamis – Ujian Praktikum Web

![Node.js](https://img.shields.io/badge/Node.js-v18%2B-green)
![Express](https://img.shields.io/badge/Express-4.x-blue)
![MySQL](https://img.shields.io/badge/MySQL-8.x-orange)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

## Deskripsi Proyek

Aplikasi web ini menampilkan galeri foto dinamis yang diambil dari API eksternal dan memungkinkan pengguna menambah komentar pada setiap foto. Komentar disimpan di database MySQL dan diambil secara real-time melalui REST API.

## Fitur

- Menampilkan galeri foto dari API [picsum.photos](https://picsum.photos/)
- Komentar dinamis per foto (CRUD: hanya create & read)
- Backend Express + MySQL
- Frontend responsif dan modern

## Struktur Folder

```
UjianPraktikum/
  index.js           # Server Express utama
  public/
    index.html       # Halaman utama galeri
    script.js        # Logika frontend galeri & komentar
    style.css        # Gaya CSS
```

## Instalasi

1. **Clone repository**
   ```bash
   git clone https://github.com/inspirasiprogrammer/Pengembangan-Web.git
   cd Ujian/UTS-IF B/UjianPraktikum
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Setup Database MySQL**
   - Buat database `db_galeri` dan tabel `komentar`:
     ```sql
     CREATE DATABASE db_galeri;
     USE db_galeri;
     CREATE TABLE komentar (
       id INT AUTO_INCREMENT PRIMARY KEY,
       photo_id VARCHAR(32) NOT NULL,
       isi_komentar TEXT NOT NULL
     );
     ```
   - Pastikan konfigurasi koneksi di `index.js` sesuai dengan environment Anda.
4. **Jalankan server**
   ```bash
   node index.js
   ```

## Contoh Penggunaan

- Buka di browser: [http://127.0.0.1:3000/](http://127.0.0.1:3000/)
- Tambahkan komentar pada foto melalui form di bawah setiap foto.

### API Endpoint
| Metode | Endpoint                  | Deskripsi                                 |
|--------|---------------------------|-------------------------------------------|
| GET    | `/api/komentar/:photo_id` | Mengambil semua komentar untuk sebuah foto|
| POST   | `/api/komentar`           | Menambah komentar baru pada foto          |

#### Contoh Request
```bash
curl http://127.0.0.1:3000/api/komentar/0
curl -X POST http://127.0.0.1:3000/api/komentar -H "Content-Type: application/json" -d '{"photo_id":"0","isi_komentar":"Keren!"}'
```

## Debugging & Maintenance

### Debugging
- Pastikan Node.js, MySQL, dan dependensi sudah terinstal (`npm install`).
- Jalankan server dengan `node index.js` dan cek error di terminal.
- Untuk debugging backend, gunakan `console.log` pada bagian kode yang ingin diperiksa.
- Untuk debugging frontend, gunakan DevTools di browser (F12).
- Jika terjadi error database, cek koneksi dan struktur tabel.

### Maintenance & Editing
- Untuk mengedit tampilan, ubah file di folder `public/` (`index.html`, `style.css`, `script.js`).
- Untuk menambah/ubah endpoint, edit file `index.js` sesuai kebutuhan routing.
- Setelah melakukan perubahan, restart server agar perubahan diterapkan.
- Dokumentasikan setiap perubahan penting di README atau commit message.

## Kontribusi

Kontribusi sangat terbuka! Silakan lakukan fork, buat branch baru, dan ajukan pull request. Ikuti format commit yang jelas dan sertakan deskripsi perubahan.

1. Fork repository
2. Buat branch fitur: `git checkout -b fitur-baru`
3. Commit perubahan: `git commit -m "Menambah fitur ..."`
4. Push ke branch: `git push origin fitur-baru`
5. Buat Pull Request

## Lisensi

Proyek ini menggunakan lisensi MIT. Silakan gunakan dan modifikasi sesuai kebutuhan.

---

**Dibuat untuk keperluan ujian praktikum Pengembangan Web.**
