# Blog Artikel Interaktif – Praktikum Minggu 7

![Node.js](https://img.shields.io/badge/Node.js-v18%2B-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.x-000000?logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-8.x-4479A1?logo=mysql&logoColor=white)
![License](https://img.shields.io/badge/License-ISC-lightgrey)

Aplikasi blog interaktif yang menampilkan artikel dari API eksternal (JSONPlaceholder) dan memungkinkan pengguna menambahkan tanggapan (komentar) yang disimpan pada database MySQL lokal.

## Fitur

- Ambil 8 artikel dari API JSONPlaceholder
- Tampilkan artikel pada UI sederhana (vanilla HTML/CSS/JS)
- Tanggapan per artikel (create + read) via REST API Express
- Simpan tanggapan ke MySQL

## Struktur Proyek

```
Minggu-7/
  Contoh/
    Praktikum/
      index.js           # Server Express + rute API
      package.json       # Dependensi & metadata
      public/
        index.html       # Halaman utama
        script.js        # Logika frontend (fetch + DOM)
        style.css        # Styling UI
```

## Prasyarat

- Node.js v18+ (dengan npm)
- MySQL Server 8.x (atau kompatibel)

## Instalasi & Setup (Step-by-Step)

1) Masuk ke folder proyek
```powershell
cd "d:\Bahan Ajar\Pengembangan Web\Praktikum Pengembangan Web\Minggu-7\Contoh\Praktikum"
```

2) Install dependensi
```powershell
npm install
```

3) Siapkan database MySQL
```sql
CREATE DATABASE IF NOT EXISTS db_blog;
USE db_blog;

CREATE TABLE tanggapan (
  id INT AUTO_INCREMENT PRIMARY KEY,
  post_id INT NOT NULL,
  isi_tanggapan TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

4) Sesuaikan kredensial MySQL bila perlu di `index.js`
```js
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_blog'
});
```

5) Jalankan server
```powershell
node index.js
```
Buka: http://localhost:3000

## Cara Menggunakan

- UI memuat 8 artikel dari JSONPlaceholder
- Tambahkan tanggapan di bawah artikel dan klik "Kirim"
- Tanggapan tersimpan di DB dan muncul langsung tanpa reload

## API Reference

| Metode | Endpoint                  | Deskripsi                                       | Body Request               | Contoh Respons |
|--------|---------------------------|-------------------------------------------------|---------------------------|----------------|
| GET    | `/api/tanggapan/:post_id` | Ambil semua tanggapan untuk artikel tertentu    | -                         | Array objek    |
| POST   | `/api/tanggapan`          | Tambah tanggapan baru                           | `{ post_id, isi_tanggapan }` | `{ message: 'Tanggapan berhasil disimpan!' }` |

### Contoh curl
```powershell
# Ambil tanggapan untuk post 1
curl http://localhost:3000/api/tanggapan/1

# Tambah tanggapan
curl -X POST http://localhost:3000/api/tanggapan `
  -H "Content-Type: application/json" `
  -d '{"post_id": 1, "isi_tanggapan": "Komentar saya"}'
```

## Postman Collection

File koleksi (sudah disiapkan): `Blog-Artikel-API.postman_collection.json`

File environment (Local): `Local.postman_environment.json`

1) Import koleksi
  - Buka Postman → tombol Import → pilih file `Blog-Artikel-API.postman_collection.json` di folder ini.

2) Import environment (Local)
  - Import file `Local.postman_environment.json` → pilih sebagai Environment aktif (kanan-atas di Postman).

3) Variabel yang digunakan
  - `baseUrl` → default: `http://localhost:3000`
  - `post_id` → contoh: `1`

4) Jalankan request
  - GET: `{{baseUrl}}/api/tanggapan/{{post_id}}`
  - POST: `{{baseUrl}}/api/tanggapan` dengan Body JSON:

```json
{
  "post_id": {{post_id}},
  "isi_tanggapan": "Komentar via Postman"
}
```

5) Catatan testing
  - Koleksi menyertakan uji sederhana (status code 200/201). Lihat tab Tests di tiap request.
  - Jika gagal konek, pastikan server aktif di `localhost:3000` dan database `db_blog` tersedia.

## Pengembangan dari Nol (Ringkas Step-by-Step)

1. Backend
   - Inisialisasi Express, aktifkan static file & express.json
   - Buat koneksi MySQL (mysql2)
   - Endpoint GET `/api/tanggapan/:post_id` dan POST `/api/tanggapan`
2. Frontend
   - `index.html` sederhana + `style.css`
   - `script.js`: fetch artikel eksternal, render DOM, form submit → POST ke backend, refresh daftar tanggapan
3. Testing
   - Uji endpoint via curl/Postman
   - Coba submit dari UI, cek data masuk DB
4. Deployment prep (opsional)
   - Env vars (.env), nodemon, .gitignore

## Debugging

- Koneksi DB gagal
  - Cek service MySQL aktif; kredensial di `index.js`; coba `mysql -u root -p` → `USE db_blog;`
- Tabel tidak ditemukan
  - Pastikan menjalankan skrip SQL di atas
- Port 3000 bentrok
  - Ganti konstanta `PORT` di `index.js` atau hentikan proses yang memakai port
- Artikel tidak tampil
  - Periksa DevTools Console; API eksternal butuh internet; pastikan server berjalan
- Tanggapan tak tersimpan
  - Cek Network tab (status 4xx/5xx), validasi body JSON, pastikan `express.json()` aktif

## Maintenance & Editing

- Pindah kredensial ke .env (disarankan)
```powershell
npm i dotenv
```
```js
require('dotenv').config();
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});
```
- Tambah script npm
```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  }
}
```
- Ekstensi fitur (lanjutan)
  - Edit/Hapus tanggapan (tambahkan PUT/DELETE di backend + tombol UI)
  - Pagination, pencarian artikel, validasi input lebih ketat
  - Modularisasi rute & controller saat kode bertambah

## Kontribusi

1. Fork repo
2. Buat branch: `git checkout -b feat/nama-fitur`
3. Commit: `git commit -m "feat: deskripsi singkat fitur"`
4. Push: `git push origin feat/nama-fitur`
5. Ajukan Pull Request

## Lisensi

ISC – digunakan untuk pembelajaran dan pengembangan.
