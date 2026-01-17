# Dokumentasi Project Latihan - Minggu 13

## 1. Persiapan Project

### a. Struktur Folder
```
Latihan/
  app.js
  .env
  package.json
  models/
    connection.js
    items.js
    users.js
  views/
    index.ejs
    login.ejs
    addData.ejs
    editData.ejs
  public/
```

### b. Inisialisasi Project
```sh
npm init -y
```

### c. Install Dependency
```sh
npm install express sequelize mysql2 ejs jsonwebtoken dotenv cookie-parser
```

---

## 2. Konfigurasi Database

### a. File models/connection.js
- Koneksi ke database MySQL `crud_toko` menggunakan Sequelize.
- Pastikan database sudah ada di MySQL.

### b. File models/items.js
- Model untuk tabel `items` (name, qty_stock, price).
- Sinkronisasi otomatis ke database.

### c. File models/users.js
- Model untuk tabel `users` (username, password).
- Sinkronisasi otomatis ke database.

---

## 3. Konfigurasi Environment

### a. File .env
```
JWT_SECRET=kunci_jwt
```

---

## 4. Pembuatan View (EJS)
- views/login.ejs: Form login.
- views/index.ejs: Tabel data item, navbar user, tombol login/logout, aksi CRUD hanya jika login.
- views/addData.ejs: Form tambah item (hanya jika login).
- views/editData.ejs: Form edit item (hanya jika login).

---

## 5. Pembuatan app.js

### a. Import dan Konfigurasi
- Import express, models, jwt, dotenv, cookie-parser.
- Konfigurasi dotenv dan JWT_SECRET.
- Set view engine EJS, middleware json, urlencoded, cookieParser, dan static.

### b. Route Login & Logout
- GET /login: Tampilkan form login.
- POST /login: Proses login, generate JWT, simpan di cookie.
- GET /logout: Hapus cookie token, redirect ke index.

### c. Middleware authToken
- Mengecek dan memverifikasi JWT dari cookie.
- Jika tidak ada/invalid, redirect ke /login.

### d. Route CRUD
- GET /: Tampilkan data item, identitas user di navbar.
- GET /tambah: Tampilkan form tambah item (hanya jika login).
- GET /edit/:id: Tampilkan form edit item (hanya jika login).
- POST /api/items: Tambah item (hanya jika login).
- PUT /api/items/:id: Edit item (hanya jika login).
- DELETE /api/items/:id: Hapus item (hanya jika login).

### e. Menjalankan Server
```js
app.listen(port, hostname, () => {
    console.log(`Server running at ${hostname}:${port}`);
});
```

---

## 6. Testing & Penggunaan

1. Jalankan MySQL dan pastikan database `crud_toko` sudah ada.
2. Jalankan aplikasi:
   ```sh
   node app.js
   ```
3. Akses http://127.0.0.1:3000 di browser.
4. Login dengan user dummy (misal: username: gaspar, password: jagobanget).
5. Setelah login, bisa tambah/edit/hapus item.
6. Logout untuk menguji proteksi route.

---

## 7. Catatan
- Jika ingin menambah user dummy, bisa insert langsung ke tabel `users` di database.
- Semua proteksi route dan aksi CRUD sudah sesuai modul.
- Jika ada error, cek kembali struktur folder, nama file, dan dependency.

---

Dokumentasi ini mencakup seluruh langkah dari setup awal, konfigurasi, pembuatan model, view, route, hingga testing aplikasi sesuai modul Minggu-13.
