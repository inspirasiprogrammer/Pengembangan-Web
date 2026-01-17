# Dokumentasi Project Task 1 - Minggu 13

## 1. Persiapan Project

### a. Struktur Folder
```
Task/
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
```js
import { Sequelize, DataTypes } from "sequelize";
const conn = new Sequelize("crud_toko", "root", "", {
  host: "localhost",
  dialect: "mysql"
});
conn.authenticate()
  .then(() => { console.log("Berhasil connect cuy"); })
  .catch(err => { console.log("Gagal terhubung ke database.", err); });
export { conn, DataTypes };
```

### b. File models/items.js
```js
import { conn, DataTypes } from "./connection.js";
const Items = conn.define("items", {
  name: DataTypes.STRING,
  qty_stock: DataTypes.INTEGER,
  price: DataTypes.INTEGER
}, { timestamps: false, createdAt: false, updatedAt: false });
export default Items;
conn.sync()
  .then(() => { console.log("Table items sudah tersinkronisasi"); })
  .catch(err => { console.log("Tabel items tidak tersinkronisasi.", err); });
```

### c. File models/users.js
```js
import {conn, DataTypes} from "./connection.js";
const User = conn.define("users", {
  username: DataTypes.STRING,
  password: DataTypes.STRING
}, { timestamps: false, createdAt: false, updatedAt: false });
User.sync()
  .then(() => { console.log("Tabel user sudah tersinkronisasi"); })
  .catch(err => { console.log("Tabel user tidak tersinkronisasi.", err); });
export default User;
```

---

## 3. Konfigurasi Environment

### a. File .env
```
JWT_SECRET=kunci_jwt
```

---

## 4. Pembuatan View (EJS)
- views/login.ejs: Form login dengan pesan error jika login gagal.
- views/index.ejs: Tabel data item, navbar dengan identitas user, tombol login/logout, dan aksi CRUD hanya muncul jika sudah login.
- views/addData.ejs: Form tambah item, hanya bisa diakses jika sudah login.
- views/editData.ejs: Form edit item, hanya bisa diakses jika sudah login.

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
