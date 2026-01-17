# 🧪 Hand-on Lab: REST API Part 2 (MVC, EJS, dan ORM dengan Express.js & Sequelize)

## 🎯 Tujuan Pembelajaran
Mahasiswa memahami dan mampu:
- Menjelaskan prinsip dan struktur arsitektur **MVC (Model-View-Controller)**.  
- Menggunakan **template engine EJS** untuk merender konten web dinamis.  
- Menerapkan **ORM (Object-Relational Mapping)** dengan Sequelize untuk pengelolaan data.  
- Mengintegrasikan konsep-konsep ini dalam satu sistem **RESTful API**.

---

## 🧰 Tools yang Digunakan
| Komponen | Deskripsi |
|-----------|------------|
| **Runtime** | Node.js (v18+ disarankan) |
| **Framework** | Express.js |
| **ORM Library** | Sequelize |
| **Template Engine** | EJS |
| **Database Server** | MySQL |
| **Package Manager** | npm |
| **Editor** | Visual Studio Code |
| **Testing Tool** | Postman / Browser |

---

## 📂 Struktur Folder Proyek
```
mvc-express-sequelize/
│
├── app.js
├── /models
│   ├── connection.js
│   └── items.js
├── /views
│   ├── index.ejs
│   ├── addData.ejs
│   └── editData.ejs
└── /public
    └── style.css
```

---

## 🧠 Pre-Lab Questions
1. Apa itu MVC?  
2. Apa itu EJS?  
3. Apa itu ORM?  
4. Bagaimana cara menerapkan MVC, EJS, dan ORM di dalam proyek Express.js?

---

## 💡 Studi Kasus
Gaspar telah menyelesaikan REST API dasar dengan integrasi front-end dan back-end.  
Client-nya kini meminta:
- Menggunakan **arsitektur MVC** untuk pemisahan kode.  
- Menggunakan **EJS** sebagai template view.  
- Menggunakan **Sequelize ORM** untuk manipulasi database MySQL.  

### Skenario Aplikasi:
1. Route **GET /** → menampilkan halaman Data Item.  
2. Tombol **"Tambahkan Data Baru"** → membuka halaman `/tambah`.  
3. Input data → disimpan via **POST /api/items**, lalu diarahkan kembali ke halaman awal.  
4. Tombol **Edit** → membuka **GET /edit/:id** dengan form pengeditan.  
5. Tombol **Hapus** → menghapus data menggunakan **DELETE /api/items/:id**.

---

## 🧩 Identification (Analisis Masalah)
Permasalahan yang harus dipecahkan:
1. Mendesain **struktur folder MVC**.  
2. Membuat **model Sequelize** untuk database MySQL.  
3. Merancang **template EJS** untuk tampilan data.  
4. Menghubungkan **controller** dengan **view dan model** agar CRUD berjalan konsisten.

---

## 📘 Lessons (Langkah-Langkah Praktikum)

### Lesson 1 — Arsitektur MVC
Arsitektur **MVC** memisahkan aplikasi menjadi tiga bagian utama:
- **Model:** menangani logika dan struktur data.
- **View:** menampilkan data ke pengguna.
- **Controller:** mengatur alur data antara Model dan View.

📂 Struktur:
```
/models     → berisi definisi database dan model ORM
/views      → berisi file tampilan EJS
/controllers → berisi logika bisnis dan routing
```

Kelebihan:
- Kode lebih terorganisir dan modular.
- Memudahkan perawatan dan pengembangan fitur baru.

---

### Lesson 2 — Object Relational Mapping (ORM) dengan Sequelize
ORM memungkinkan developer bekerja dengan database melalui **objek JavaScript** tanpa menulis SQL manual.

#### Instalasi:
```bash
npm install sequelize mysql2
```

#### Koneksi Database:
```javascript
import { Sequelize, DataTypes } from "sequelize";

const conn = new Sequelize("crud_toko", "root", "", {
  host: "localhost",
  dialect: "mysql"
});

conn.authenticate()
  .then(() => console.log("✅ Koneksi ke database berhasil"))
  .catch(err => console.log("❌ Gagal terkoneksi:", err));
```

#### Model Sequelize:
```javascript
const Items = conn.define("items", {
  name: DataTypes.STRING,
  qty_stock: DataTypes.INTEGER,
  price: DataTypes.INTEGER
}, {
  timestamps: false
});

export default Items;
```

Gunakan `Items.sync()` untuk membuat tabel jika belum ada.

---

### Lesson 3 — Template Engine EJS
EJS digunakan untuk membuat tampilan dinamis dengan sintaks mirip HTML.

#### Instalasi:
```bash
npm install ejs
```

#### Konfigurasi:
```javascript
app.set("view engine", "ejs");
```

#### Contoh File `index.ejs`:
```html
<table>
  <tr><th>Nama Item</th><th>Harga</th></tr>
  <% barang.forEach(item => { %>
    <tr>
      <td><%= item.name %></td>
      <td><%= item.price %></td>
    </tr>
  <% }) %>
</table>
```

---

## ⚙️ Solution (Implementasi Lengkap)

### File: `models/connection.js`
```javascript
import { Sequelize } from "sequelize";
const conn = new Sequelize("crud_toko", "root", "", {
  host: "localhost",
  dialect: "mysql"
});
export default conn;
```

### File: `models/items.js`
```javascript
import conn from "./connection.js";
import { DataTypes } from "sequelize";

const Items = conn.define("items", {
  name: DataTypes.STRING,
  qty_stock: DataTypes.INTEGER,
  price: DataTypes.INTEGER
}, { timestamps: false });

export default Items;
```

### File: `app.js`
```javascript
import express from "express";
import Items from "./models/items.js";

const app = express();
app.use(express.json());
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const barang = await Items.findAll();
  res.render("index", { barang });
});

app.get("/tambah", (req, res) => {
  res.render("addData");
});

app.post("/api/items", async (req, res) => {
  const { name, qty_stock, price } = req.body;
  await Items.create({ name, qty_stock, price });
  res.redirect("/");
});

app.get("/edit/:id", async (req, res) => {
  const barang = await Items.findByPk(req.params.id);
  res.render("editData", { barang });
});

app.put("/api/items/:id", async (req, res) => {
  const { name, qty_stock, price } = req.body;
  await Items.update({ name, qty_stock, price }, { where: { id: req.params.id } });
  res.redirect("/");
});

app.delete("/api/items/:id", async (req, res) => {
  await Items.destroy({ where: { id: req.params.id } });
  res.redirect("/");
});

app.listen(3000, () => console.log("🚀 Server running at http://localhost:3000"));
```

---

## 🧩 Exercise (Tugas Mahasiswa)
### 🎯 *Objective:*
Menerapkan **MVC**, **EJS**, dan **Sequelize ORM** pada proyek Express.js.

### 🧭 *Task 1:*
1. Buat tabel baru pada database `crud_toko` (misal: `suppliers`).  
2. Tambahkan model, view, dan controller baru untuk tabel tersebut.  
3. Gunakan EJS untuk menampilkan data supplier.  
4. Pastikan operasi CRUD berjalan sempurna.  

---

## 📘 Unit Summary
Mahasiswa kini mampu:
- Menjelaskan prinsip dan struktur arsitektur MVC.  
- Menggunakan EJS untuk tampilan dinamis.  
- Menerapkan Sequelize ORM untuk manajemen database.  
- Mengintegrasikan MVC, EJS, dan ORM dalam REST API yang modular.

---

## 🧠 Post-Lab Questions
1. Apa itu MVC?  
2. Apa itu EJS?  
3. Apa itu ORM?  
4. Bagaimana cara menerapkan arsitektur MVC, EJS, dan ORM di dalam proyek Express.js?

---

📘 *Disusun oleh Irwan Syahputra S.Kom., M.Kom. ( 2025 ).*
