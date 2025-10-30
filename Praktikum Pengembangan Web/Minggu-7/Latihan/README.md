# Latihan Minggu 7 – Express + MySQL: Customers API

![Node.js](https://img.shields.io/badge/Node.js-v18%2B-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.x-000000?logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-8.x-4479A1?logo=mysql&logoColor=white)
![License](https://img.shields.io/badge/License-ISC-lightgrey)

## Deskripsi

Proyek ini adalah contoh API sederhana menggunakan Express dan MySQL untuk mengakses data pelanggan. Tersedia endpoint untuk mengambil semua pelanggan dan mengambil pelanggan berdasarkan `cust_id`.

## Fitur

- Koneksi ke database MySQL menggunakan `mysql2`
- Endpoint REST:
  - `GET /db/customers` – daftar semua pelanggan
  - `GET /db/customers/:id` – detail pelanggan berdasarkan `cust_id`
- Respons JSON siap konsumsi front-end

## Prasyarat

- Node.js v18 atau lebih baru
- MySQL Server 8.x (atau kompatibel)
- Akses ke database lokal `db_toko`

## Struktur Proyek

```
Minggu-7/
  Latihan/
    index.js        # Aplikasi Express + route
    package.json    # Dependensi dan metadata
    package-lock.json
    node_modules/
```

## Instalasi & Menjalankan

1) Install dependensi

```powershell
cd "d:\Bahan Ajar\Pengembangan Web\Praktikum Pengembangan Web\Minggu-7\Latihan"
npm install
```

2) Siapkan database MySQL (contoh skema minimal)

```sql
CREATE DATABASE IF NOT EXISTS db_toko;
USE db_toko;

CREATE TABLE IF NOT EXISTS customers (
  cust_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(120)
);

-- Data contoh (opsional)
INSERT INTO customers (name, email) VALUES
('Andi', 'andi@example.com'),
('Budi', 'budi@example.com');
```

3) Jalankan server

```powershell
node index.js
```

Jika berhasil, terminal akan menampilkan:

```
✅ Terhubung ke database MySQL!
🚀 Server berjalan di http://localhost:3000
```

## API Reference

| Metode | Endpoint                 | Deskripsi                                   | Respons (contoh) |
|--------|--------------------------|---------------------------------------------|------------------|
| GET    | `/db/customers`          | Mengambil semua pelanggan                    | `[{ cust_id, name, email }, ...]` |
| GET    | `/db/customers/:id`      | Mengambil pelanggan berdasarkan `cust_id`    | `[{ cust_id, name, email }]` atau `[]` |

### Contoh Penggunaan (CLI)

```powershell
# Ambil semua pelanggan
curl http://localhost:3000/db/customers

# Ambil pelanggan dengan id 1
curl http://localhost:3000/db/customers/1
```

### Contoh Penggunaan (JavaScript)

```js
// Mengambil semua pelanggan
const res = await fetch('http://localhost:3000/db/customers');
const data = await res.json();
console.log(data);
```

## Konfigurasi

Kredensial database saat ini di-hardcode di `index.js`:

```js
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_toko"
});
```

Anda dapat memindahkannya ke variabel lingkungan (.env) sebagai peningkatan pemeliharaan (lihat bagian Maintenance).

## Debugging

- Koneksi database gagal
  - Pesan: `❌ Gagal terkoneksi ke database:`
  - Periksa layanan MySQL aktif, kredensial (user/password), dan nama database `db_toko`
  - Coba koneksi manual via CLI: `mysql -u root -p` lalu `USE db_toko;`
- Tabel tidak ditemukan
  - Pesan query error seperti `ER_NO_SUCH_TABLE: Table 'db_toko.customers' doesn't exist`
  - Jalankan skrip SQL pada bagian Instalasi langkah (2)
- Server port bentrok (EADDRINUSE: :3000)
  - Ubah konstanta `port` di `index.js` atau hentikan proses yang memakai port 3000
- Respons kosong untuk `/db/customers/:id`
  - Pastikan nilai `cust_id` ada pada tabel; endpoint mengembalikan array kosong `[]` jika tidak ditemukan
- Logging tambahan
  - Tambahkan `console.log(req.params)` di handler endpoint untuk melacak parameter

## Maintenance & Editing

- Menambah endpoint baru (contoh: POST pelanggan)
  - Gunakan query ter-parameter (`?`) untuk menghindari SQL injection
  - Validasi input di server sebelum eksekusi query
- Memindahkan konfigurasi DB ke .env (disarankan)
  - Install `dotenv`, buat file `.env`, dan baca via `process.env`
- Penataan kode
  - Pisahkan rute ke modul terpisah (mis. `routes/customers.js`) bila jumlah endpoint bertambah
- Skrip npm
  - Tambahkan script `start` agar menjalankan server lebih mudah

Contoh perubahan (opsional):

```json
{
  "scripts": {
    "start": "node index.js"
  }
}
```

Dan contoh penggunaan `.env` (opsional):

```
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=db_toko
PORT=3000
```

## Kontribusi

Kontribusi terbuka:

1. Fork repository
2. Buat branch fitur: `git checkout -b feat/nama-fitur`
3. Commit: `git commit -m "feat: deskripsi singkat fitur"`
4. Push: `git push origin feat/nama-fitur`
5. Ajukan Pull Request beserta deskripsi perubahan

## Lisensi

Lisensi ISC sesuai `package.json`.
