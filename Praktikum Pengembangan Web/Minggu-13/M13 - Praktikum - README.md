# 🧪 Hand-on Lab: Authentication (JWT & Middleware pada Express.js)

## 🎯 Tujuan Pembelajaran
Mahasiswa memahami dan mampu:
- Menjelaskan konsep **autentikasi (authentication)** dalam sistem web.  
- Mengimplementasikan sistem login dengan **Express.js dan Sequelize ORM**.  
- Menggunakan **JWT (JSON Web Token)** untuk proses autentikasi berbasis token.  
- Mengelola sesi pengguna menggunakan **cookie**.  
- Mengintegrasikan autentikasi ke dalam proyek **MVC** dengan EJS.  
- Mengamankan halaman aplikasi sesuai status login pengguna.

---

## 🧰 Tools yang Digunakan
| Komponen | Deskripsi |
|-----------|------------|
| **Runtime** | Node.js (v18+) |
| **Framework** | Express.js |
| **Database** | MySQL |
| **ORM** | Sequelize |
| **Template Engine** | EJS |
| **Library Pendukung** | jsonwebtoken, dotenv, cookie-parser |
| **Testing Tool** | Browser / Postman |
| **Editor** | Visual Studio Code |

---

## 📂 Struktur Folder Proyek
```
auth-express-lab/
│
├── app.js
├── .env
├── /models
│   ├── connection.js
│   ├── items.js
│   └── users.js
├── /views
│   ├── index.ejs
│   ├── login.ejs
│   ├── addData.ejs
│   └── editData.ejs
└── /public
    └── style.css
```

---

## 🧠 Pre-Lab Questions
1. Apa itu autentikasi?  
2. Apa saja metode yang dapat digunakan untuk melakukan autentikasi?  
3. Bagaimana cara menerapkan metode autentikasi pada proyek Express.js?

---

## 💡 Studi Kasus
Gaspar ingin menambahkan **fitur login** pada proyek web berbasis **MVC + ORM + EJS** yang telah dibuat sebelumnya.  
Autentikasi akan digunakan untuk:
- Mengidentifikasi pengguna yang login.
- Mengatur akses terhadap halaman tertentu (misalnya, hanya pengguna yang login dapat menambah, mengedit, atau menghapus data).

### Skenario:
1. Jika pengguna **belum login**, maka:
   - Route `/`, `/tambah`, `/edit/:id` akan **menampilkan halaman login**.
2. Jika pengguna **sudah login**, maka:
   - Route `/`, `/tambah`, `/edit/:id` akan menampilkan halaman sesuai fungsi masing-masing.
3. Ketika menekan tombol **Logout**, pengguna akan diarahkan ke halaman login.

---

## 🧩 Identification (Analisis Permasalahan)
Permasalahan utama yang perlu diselesaikan:
1. Menerapkan arsitektur MVC pada proyek.  
2. Menggunakan ORM Sequelize untuk model database.  
3. Menambahkan sistem login dengan **username dan password**.  
4. Mengamankan halaman menggunakan **JWT** dan **cookie**.  
5. Menangani proses **logout** agar token tidak dapat digunakan lagi.

---

## 📘 Lessons (Langkah-Langkah Praktikum)

### Lesson 1 — Konsep Autentikasi
Autentikasi adalah proses verifikasi identitas pengguna untuk memastikan bahwa mereka adalah pihak yang berhak mengakses sistem.

Metode autentikasi umum:
- **Password-based authentication**
- **Cookie-based authentication**
- **Token-based authentication**
- **Third-party authentication (OAuth, Google/Facebook Login)**
- **OpenID & SAML**

Dalam praktikum ini digunakan pendekatan **token-based authentication** dengan **JWT (JSON Web Token)** karena cocok untuk **REST API** dan aplikasi berbasis SPA.

---

### Lesson 2 — Instalasi Library
Install dependensi yang dibutuhkan:
```bash
npm install jsonwebtoken dotenv cookie-parser
```

Import di dalam `app.js`:
```javascript
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

const app = express();
app.use(cookieParser());
```

Tambahkan file `.env`:
```
JWT_SECRET=kunci_jwt
```

---

### Lesson 3 — Membuat Tabel Users
Tambahkan model baru `models/users.js`:

```javascript
import conn from "./connection.js";
import { DataTypes } from "sequelize";

const Users = conn.define("users", {
  username: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
}, { timestamps: false });

export default Users;
```

Tambahkan data dummy ke database:
| id | username | password |
|----|-----------|-----------|
| 1 | gaspar | jagobanget |

---

### Lesson 4 — Membuat Route Login
Tambahkan route `/login` di `app.js`:

```javascript
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  Users.findOne({ where: { username, password } })
    .then(result => {
      if (result) {
        const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" });
        res.cookie("token", token, { httpOnly: true });
        res.redirect("/");
      } else {
        res.render("login", { msg: "Username atau Password salah" });
      }
    })
    .catch(err => {
      res.render("login", { msg: err });
    });
});
```

---

### Lesson 5 — Middleware Autentikasi
Tambahkan middleware `authToken` untuk memverifikasi token:

```javascript
const authToken = (req, res, next) => {
  const token = req.cookies?.token;
  if (!token) {
    return res.redirect("/login");
  }

  try {
    const decode = jwt.verify(token, JWT_SECRET);
    req.user = decode;
    next();
  } catch (err) {
    res.clearCookie("token", { httpOnly: true });
    return res.redirect("/login");
  }
};
```

Gunakan middleware pada route yang perlu autentikasi:
```javascript
app.get("/tambah", authToken, (req, res) => {
  res.render("addData", { user: req.user });
});
```

---

### Lesson 6 — View Login (login.ejs)
Buat file `views/login.ejs`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
</head>
<body class="bg-light">
  <div class="container d-flex justify-content-center align-items-center" style="height: 100vh;">
    <div class="card shadow-lg p-4" style="width: 100%; max-width: 400px;">
      <h2 class="text-center text-primary mb-4">Login</h2>
      <form action="/login" method="POST">
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input type="text" class="form-control" name="username" required>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" name="password" required>
        </div>
        <button type="submit" class="btn btn-primary w-100">Login</button>
      </form>
      <% if (msg) { %>
        <div class="mt-3 text-danger text-center"><%= msg %></div>
      <% } %>
    </div>
  </div>
</body>
</html>
```

---

## ⚙️ Solution (Implementasi Lengkap)
1. Tambahkan middleware JWT.
2. Integrasikan login/logout.
3. Gunakan token untuk validasi user.
4. Simpan token dalam cookie.

### File `.env`
```
JWT_SECRET=kunci_jwt
```

### File `app.js`
```javascript
import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import Users from "./models/users.js";

dotenv.config();
const app = express();
const JWT_SECRET = process.env.JWT_SECRET;
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set("view engine", "ejs");

const authToken = (req, res, next) => {
  const token = req.cookies?.token;
  if (!token) return res.redirect("/login");
  try {
    const decode = jwt.verify(token, JWT_SECRET);
    req.user = decode;
    next();
  } catch {
    res.clearCookie("token");
    return res.redirect("/login");
  }
};

app.get("/login", (req, res) => res.render("login", { msg: null }));

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  Users.findOne({ where: { username, password } })
    .then(user => {
      if (!user) return res.render("login", { msg: "Username atau password salah" });
      const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" });
      res.cookie("token", token, { httpOnly: true });
      res.redirect("/");
    });
});

app.get("/", authToken, (req, res) => {
  res.render("index", { user: req.user });
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
Mahasiswa mampu mengamankan halaman Express.js menggunakan JWT dan cookie.

### 🧭 *Task 1:*
1. Halaman index dapat diakses tanpa login, tetapi tombol tambah, edit, dan hapus tidak aktif.  
2. Jika user login, semua fitur CRUD aktif.  
3. Logout menghapus cookie token dan mengarahkan kembali ke halaman login.  
4. Jika mencoba mengakses halaman `/tambah` tanpa login, redirect ke `/login`.

---

## 📘 Unit Summary
Setelah menyelesaikan praktikum ini, mahasiswa mampu:
- Memahami konsep autentikasi dan JWT.
- Menerapkan login/logout berbasis token.
- Mengamankan halaman web dengan middleware autentikasi.
- Mengintegrasikan autentikasi ke dalam proyek MVC berbasis Express.js.

---

## 🧠 Post-Lab Questions
1. Apa itu autentikasi?  
2. Sebutkan beberapa metode autentikasi yang umum digunakan.  
3. Jelaskan cara menerapkan JWT pada Express.js.  

---

📘 *Disusun sebagai panduan praktikum oleh Irwan Syahputra S.Kom., M.Kom. ( 2025 ).*
