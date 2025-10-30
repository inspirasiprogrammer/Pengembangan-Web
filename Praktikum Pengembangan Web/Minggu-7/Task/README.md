# Minggu 7 – Task: Express + MySQL Customers

![Node.js](https://img.shields.io/badge/Node.js-v18%2B-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4%2F5.x-000000?logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-8.x-4479A1?logo=mysql&logoColor=white)
![License](https://img.shields.io/badge/License-ISC-lightgrey)

## Deskripsi

Proyek ini adalah latihan pembuatan API sederhana menggunakan Express dan MySQL. Aplikasi menyajikan file statis dari folder `public/` dan mengekspose endpoint untuk membaca data pelanggan dari database `db_toko`.

Frontend sederhana (`public/index.html` + `public/script.js`) akan mengambil data dari endpoint `/db/customers` dan menampilkannya dalam tabel.

## Fitur

- Static file serving (HTML, CSS, JS) dari folder `public/`
- Koneksi ke MySQL via `mysql2`
- Endpoint REST:
  - `GET /db/customers` – daftar semua customers
  - `GET /db/customers/:id` – detail customer berdasarkan `cust_id`

## Struktur Proyek

```
Minggu-7/
  Task/
    index.js          # Server Express + route database
    package.json      # Dependensi & metadata
    public/
      index.html      # Halaman tabel customers
      script.js       # Mengambil data dari API & render tabel
```

## Prasyarat

- Node.js v18 atau lebih baru
- MySQL Server 8.x (atau kompatibel)
- Database lokal bernama `db_toko`

## Instalasi & Menjalankan

1) Install dependensi

```powershell
cd "d:\Bahan Ajar\Pengembangan Web\Praktikum Pengembangan Web\Minggu-7\Task"
npm install
```

2) Siapkan database MySQL (skema minimal yang cocok dengan kode)

```sql
CREATE DATABASE IF NOT EXISTS db_toko;
USE db_toko;

CREATE TABLE IF NOT EXISTS customers (
  cust_id   INT AUTO_INCREMENT PRIMARY KEY,
  cust_name VARCHAR(100) NOT NULL,
  cust_city VARCHAR(100) NULL
);

-- Data contoh (opsional)
INSERT INTO customers (cust_name, cust_city) VALUES
('Andi', 'Bandung'),
('Budi', 'Jakarta');
```

3) Jalankan server

```powershell
node index.js
```

Jika berhasil, terminal akan menampilkan sesuatu seperti:

```
Connected to the MySQL database.
Server running at http://127.0.0.1:3000/
```

4) Buka aplikasi

- Frontend: http://127.0.0.1:3000/
- API: http://127.0.0.1:3000/db/customers

## API Reference

| Metode | Endpoint                 | Deskripsi                                     | Respons (contoh) |
|--------|--------------------------|-----------------------------------------------|------------------|
| GET    | `/db/customers`          | Mengambil semua data customers                 | `[{ cust_id, cust_name, cust_city }, ...]` |
| GET    | `/db/customers/:id`      | Mengambil 1 customer berdasarkan `cust_id`     | `{ cust_id, cust_name, cust_city }` atau `null` |

### Contoh Penggunaan (CLI)

```powershell
# Ambil semua customers
curl http://127.0.0.1:3000/db/customers

# Ambil customer id=1
curl http://127.0.0.1:3000/db/customers/1
```

### Contoh Penggunaan (Frontend)

`public/script.js` men-fetch endpoint `/db/customers` dan me-render baris tabel dengan kolom `cust_id`, `cust_name`, dan `cust_city`.

## Debugging

- Koneksi MySQL gagal
  - Pesan: `Error connecting to MySQL:`
  - Cek layanan MySQL berjalan, kredensial (`user`, `password`), dan database `db_toko`
  - Uji via CLI: `mysql -u root -p` lalu `USE db_toko;`
- Tabel/kolom tidak ditemukan
  - Error query seperti `ER_NO_SUCH_TABLE` atau kolom tidak dikenal
  - Pastikan menjalankan skrip SQL pada bagian instalasi (skema kolom: `cust_id`, `cust_name`, `cust_city`)
- Port 3000 sudah dipakai
  - Ubah konstanta `port` di `index.js` atau hentikan proses yang aktif di port 3000
- Frontend tabel kosong
  - Buka DevTools (F12) > Console untuk melihat error fetch
  - Cek endpoint `/db/customers` langsung di browser; bila error, periksa koneksi DB
- Static file tidak ter-load
  - Pastikan ada `app.use(express.static('public'))` dan file berada di `Task/public/`

## Maintenance & Editing

- Menambah endpoint baru
  - Gunakan parameterized query (`?`) untuk mencegah SQL injection
  - Validasi input (tipe data, panjang string) sebelum eksekusi query
- Memisahkan kode
  - Pindahkan route DB ke modul terpisah jika endpoint bertambah (mis. `routes/customers.js`)
- Konfigurasi environment
  - Disarankan memakai variabel lingkungan untuk kredensial DB
  - Tambahkan `dotenv` dan file `.env` (contoh di bawah)
- Skrip npm
  - Tambahkan `"start": "node index.js"` untuk menjalankan lebih ringkas

Contoh `.env` (opsional):

```
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=db_toko
HOST=127.0.0.1
PORT=3000
```

Contoh pembacaan `.env` (opsional):

```js
import dotenv from 'dotenv';
dotenv.config();
const hostname = process.env.HOST || '127.0.0.1';
const port = Number(process.env.PORT || 3000);
```

## Kontribusi

Kontribusi sangat dipersilakan:

1. Fork repository
2. Buat branch fitur: `git checkout -b feat/nama-fitur`
3. Commit: `git commit -m "feat: deskripsi singkat fitur"`
4. Push: `git push origin feat/nama-fitur`
5. Buka Pull Request beserta penjelasan perubahan

## Lisensi

Lisensi ISC (mengacu pada `package.json`).
