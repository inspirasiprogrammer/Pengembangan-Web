# 🧪 Hand-on Lab: Authorization (Role-Based JWT pada Express.js)

## 🎯 Tujuan Pembelajaran
Mahasiswa memahami dan mampu:
- Menjelaskan konsep **otorisasi (authorization)** dan perbedaannya dengan autentikasi.  
- Menerapkan **otorisasi berbasis role** dalam aplikasi Express.js menggunakan JWT.  
- Mengamankan halaman dan operasi CRUD sesuai **hak akses pengguna (role)**.  
- Mengintegrasikan otorisasi ke proyek MVC dengan ORM (Sequelize) dan template engine EJS.  
- Mengevaluasi tingkat keamanan dan penerapan otorisasi tanpa status (stateless).

---

## 🧰 Tools yang Digunakan
| Komponen | Deskripsi |
|-----------|------------|
| **Runtime** | Node.js (v18+ disarankan) |
| **Framework** | Express.js |
| **Database** | MySQL |
| **ORM** | Sequelize |
| **Template Engine** | EJS |
| **Autentikasi & Otorisasi** | JWT (jsonwebtoken) |
| **Library Pendukung** | cookie-parser, dotenv |
| **Editor** | Visual Studio Code |
| **Testing Tool** | Browser, Postman |

---

## 📂 Struktur Folder Proyek
```
authorization-express-lab/
│
├── app.js
├── .env
├── /models
│   ├── connection.js
│   ├── users.js
│   └── items.js
├── /views
│   ├── index.ejs
│   ├── forbidden.ejs
│   ├── login.ejs
│   ├── addData.ejs
│   └── editData.ejs
└── /public
    └── style.css
```

---

## 🧠 Pre-Lab Questions
1. Apa itu otorisasi?  
2. Apa hubungan antara autentikasi dan otorisasi?  
3. Bagaimana cara menerapkan otorisasi ke dalam proyek Express.js?

---

## 💡 Studi Kasus
Pada modul sebelumnya, Gaspar telah berhasil menerapkan autentikasi berbasis JWT.  
Namun, semua pengguna yang berhasil login masih dapat mengakses dan melakukan CRUD tanpa batasan.  
Untuk memperbaikinya, kini Gaspar harus menambahkan **otorisasi berbasis role**.

### Tujuan:
- Hanya **Admin** yang dapat melakukan CRUD penuh.  
- **Manager** hanya dapat mengedit data.  
- **Ordinary User** hanya dapat melihat data.  

Database menggunakan tabel `users` dengan struktur sebagai berikut:
| id | username | password | role |
|----|-----------|-----------|------|
| 1 | gaspar | jagobanget | admin |
| 2 | kipli | anakbaru | ordinary |
| 3 | jamal | dauntalas | manager |

---

## 🧩 Identification (Analisis Permasalahan)
1. Terapkan arsitektur **MVC**.  
2. Gunakan **Sequelize ORM** untuk model.  
3. Terapkan **autentikasi** untuk login pengguna.  
4. Tambahkan **otorisasi** untuk mengatur hak akses berdasarkan role.  
5. Buat halaman *Forbidden (403)* untuk menolak akses pengguna tidak berhak.

---

## 📘 Lessons (Langkah-Langkah Praktikum)

### Lesson 1 — Autentikasi vs Otorisasi
- **Autentikasi:** proses untuk memastikan identitas pengguna (siapa dia).  
- **Otorisasi:** proses untuk menentukan apa yang boleh dilakukan oleh pengguna tersebut.  
- Hubungan keduanya:  
  Autentikasi harus dilakukan terlebih dahulu sebelum otorisasi dapat diterapkan.

---

### Lesson 2 — Role-Based Authorization Menggunakan JWT
Langkah-langkah implementasi:
1. Tambahkan kolom `role` di tabel `users`.
2. Simpan `role` ke dalam payload JWT saat proses login.
3. Tambahkan middleware untuk memverifikasi dan memeriksa `role`.
4. Tentukan rute yang dapat diakses berdasarkan peran pengguna.

#### Contoh Payload JWT:
```json
{
  "username": "gaspar",
  "role": "admin",
  "iat": 1698243842,
  "exp": 1698247442
}
```

---

## ⚙️ Solution (Implementasi Lengkap)

### File: `.env`
```
JWT_SECRET=kunci_jwt
```

### File: `models/users.js`
```javascript
import conn from "./connection.js";
import { DataTypes } from "sequelize";

const Users = conn.define("users", {
  username: DataTypes.STRING,
  password: DataTypes.STRING,
  role: DataTypes.STRING
}, { timestamps: false });

export default Users;
```

### File: `views/forbidden.ejs`
```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>403 Forbidden</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="d-flex justify-content-center align-items-center vh-100 bg-info">
  <div class="text-center bg-white p-5 rounded shadow-lg">
    <h1 class="display-3 text-danger">403</h1>
    <h2>Forbidden</h2>
    <p>Maaf, Anda tidak memiliki akses ke halaman ini.</p>
    <a href="/" class="btn btn-primary">Kembali ke Beranda</a>
  </div>
</body>
</html>
```

### File: `middleware/authRole.js`
```javascript
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const authToken = (req, res, next) => {
  const token = req.cookies?.token;
  if (!token) return res.redirect("/login");
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch {
    res.clearCookie("token");
    res.redirect("/login");
  }
};

export const checkRole = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.render("forbidden");
    }
    next();
  };
};
```

### File: `app.js`
```javascript
import express from "express";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import Users from "./models/users.js";
import Items from "./models/items.js";
import { authToken, checkRole } from "./middleware/authRole.js";

dotenv.config();
const app = express();
const JWT_SECRET = process.env.JWT_SECRET;

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set("view engine", "ejs");

app.get("/login", (req, res) => res.render("login", { msg: null }));

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await Users.findOne({ where: { username, password } });
  if (!user) return res.render("login", { msg: "Username atau password salah" });

  const token = jwt.sign({ username, role: user.role }, JWT_SECRET, { expiresIn: "1h" });
  res.cookie("token", token, { httpOnly: true });
  res.redirect("/");
});

app.get("/", authToken, async (req, res) => {
  const barang = await Items.findAll();
  res.render("index", { user: req.user, barang });
});

app.get("/tambah", authToken, checkRole(["admin"]), (req, res) => {
  res.render("addData", { user: req.user });
});

app.get("/edit/:id", authToken, checkRole(["admin", "manager"]), async (req, res) => {
  const item = await Items.findByPk(req.params.id);
  res.render("editData", { user: req.user, item });
});

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/login");
});

app.listen(3000, () => console.log("🚀 Server berjalan di http://localhost:3000"));
```

---

## 🧩 Exercise (Tugas Mahasiswa)

### 🎯 *Objective:*
Mahasiswa mampu menerapkan otorisasi berbasis role menggunakan JWT di Express.js.

### 🧭 *Task 1:*
1. Halaman **index** dapat diakses meskipun belum login, tetapi tanpa aksi CRUD.  
2. Route **/tambah** dan **/edit/:id** hanya bisa diakses setelah login.  
3. Role `admin` dapat menambah, mengedit, dan menghapus data.  
4. Role `manager` hanya bisa mengedit data.  
5. Role `ordinary` hanya bisa melihat data.  
6. Jika user tidak berhak, tampilkan halaman `forbidden`.

---

## 📘 Unit Summary
Mahasiswa kini mampu:
- Menjelaskan konsep otorisasi dan kaitannya dengan autentikasi.  
- Menggunakan JWT untuk otorisasi berbasis role.  
- Mengatur hak akses pengguna menggunakan middleware.  
- Mengintegrasikan otorisasi dalam proyek Express berbasis MVC dan ORM.  
- Menilai efektivitas keamanan sistem menggunakan JWT tanpa status.

---

## 🧠 Post-Lab Questions
1. Apa itu otorisasi?  
2. Apa hubungan antara autentikasi dan otorisasi?  
3. Bagaimana cara menerapkan otorisasi ke dalam proyek Express.js?

---

📘 *Disusun sebagai panduan praktikum oleh Irwan Syahputra S.Kom., M.Kom. ( 2025 ).*
