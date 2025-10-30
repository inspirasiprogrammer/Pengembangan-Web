# 🧪 Hand-on Lab: Database Fundamental (MySQL & Node.js)

## 🎯 Tujuan Pembelajaran
Mahasiswa memahami dan mampu:
- Menjelaskan konsep dasar penyimpanan dan pengelolaan data menggunakan **database**.
- Membedakan antara **SQL** dan **NoSQL** database.
- Mendesain struktur dasar database menggunakan **MySQL**.
- Melakukan operasi **CRUD (Create, Read, Update, Delete)** melalui Node.js.
- Mengintegrasikan **Express.js** dengan **MySQL** untuk menghasilkan data dinamis dalam format JSON.

---

## 🧰 Tools yang Digunakan
| Komponen | Deskripsi |
|-----------|------------|
| **Database Server** | MySQL (melalui XAMPP, Laragon, atau standalone) |
| **Runtime Environment** | Node.js |
| **Package Manager** | npm |
| **Framework** | Express.js |
| **Library** | mysql2 |
| **Code Editor** | Visual Studio Code |
| **Browser / Postman** | Untuk menguji hasil response server |
| **Aplikasi Pendukung** | phpMyAdmin (opsional) |

---

## 📂 Struktur Folder Proyek
```
db-toko/
│
├── index.js          # Server utama Express.js
├── package.json      # Konfigurasi proyek dan dependensi
├── /public           # Folder berisi file HTML, CSS, JS
│   └── index.html
└── README.md         # Dokumentasi proyek
```

---

## 🧠 Pre-Lab Questions
1. Apa itu database?  
2. Jelaskan jenis-jenis database!  
3. Bagaimana cara menghubungkan database dengan aplikasi web menggunakan Node.js dan Express.js?

---

## 💡 Studi Kasus
Gaspar telah berhasil membuat routing dasar pada proyek web-nya, namun data yang ditampilkan tidak pernah berubah.  
Kliennya meminta Gaspar untuk:
- Menyimpan data pelanggan ke dalam **database MySQL**.
- Menampilkan data pelanggan dalam format **JSON** melalui routing API.

### Ketentuan:
1. Buat **database** dengan nama `db_toko`.
2. Buat **tabel** dengan nama `customers` yang memiliki kolom:
   - `cust_id` (INT, PRIMARY KEY, AUTO_INCREMENT)
   - `cust_name` (VARCHAR)
   - `cust_city` (VARCHAR)
3. Isi tabel dengan beberapa data pelanggan.
4. Buat dua endpoint utama:
   - `/db/customers` → Menampilkan semua data pelanggan dalam bentuk JSON.
   - `/db/customers/:id` → Menampilkan data pelanggan berdasarkan ID.

---

## 🧩 Identification (Analisis Masalah)
Untuk menyelesaikan kasus tersebut, langkah-langkah yang perlu dilakukan adalah:
1. Membuat database dan tabel di MySQL.
2. Menghubungkan Node.js dengan database menggunakan library `mysql2`.
3. Membuat endpoint routing yang menjalankan query sesuai kebutuhan.
4. Mengembalikan hasil query ke klien dalam bentuk **response JSON**.

---

## 📘 Lessons (Langkah Pembelajaran)

### Lesson 1 — Setup Database MySQL
1. Install dan jalankan MySQL menggunakan salah satu opsi berikut:
   - **XAMPP** (aktifkan MySQL Module)
   - **Laragon** (otomatis aktif bersama Apache)
   - **Standalone MySQL Server**
2. Masuk ke **phpMyAdmin** atau gunakan terminal untuk membuat database:
   ```sql
   CREATE DATABASE db_toko;
   USE db_toko;

   CREATE TABLE customers (
     cust_id INT AUTO_INCREMENT PRIMARY KEY,
     cust_name VARCHAR(100),
     cust_city VARCHAR(50)
   );

   INSERT INTO customers (cust_name, cust_city)
   VALUES
   ('Andi Santoso', 'Jakarta'),
   ('Budi Prasetyo', 'Bandung'),
   ('Citra Dewi', 'Surabaya'),
   ('Dika Setiawan', 'Medan'),
   ('Eka Lestari', 'Yogyakarta');
   ```

---

### Lesson 2 — Membuat Koneksi Node.js ke Database MySQL
1. Pastikan Node.js dan npm sudah aktif.
2. Inisialisasi proyek:
   ```bash
   npm init -y
   npm install express mysql2
   ```
3. Buat file `index.js` dan tambahkan kode berikut:
   ```javascript
   import express from "express";
   import mysql from "mysql2";

   const app = express();
   const port = 3000;

   const db = mysql.createConnection({
     host: "localhost",
     user: "root",
     password: "",
     database: "db_toko"
   });

   db.connect((err) => {
     if (err) throw err;
     console.log("✅ Koneksi ke database berhasil!");
   });

   app.listen(port, () => {
     console.log(`🚀 Server berjalan di http://localhost:${port}`);
   });
   ```

---

### Lesson 3 — Melakukan Query MySQL melalui Node.js
Tambahkan routing agar dapat menampilkan data pelanggan dalam format JSON.

```javascript
// Menampilkan semua data pelanggan
app.get("/db/customers", (req, res) => {
  db.query("SELECT * FROM customers", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Menampilkan data pelanggan berdasarkan ID
app.get("/db/customers/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM customers WHERE cust_id = ?", [id], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
```

---

## ⚙️ Solution (Implementasi Lengkap)
### File: `index.js`
```javascript
import express from "express";
import mysql from "mysql2";

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_toko"
});

db.connect((err) => {
  if (err) {
    console.error("❌ Gagal terkoneksi ke database:", err);
    return;
  }
  console.log("✅ Terhubung ke database MySQL!");
});

app.get("/db/customers", (req, res) => {
  db.query("SELECT * FROM customers", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get("/db/customers/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM customers WHERE cust_id = ?", [id], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`🚀 Server berjalan di http://localhost:${port}`);
});
```

### File: `index.html`
```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Data Pelanggan</title>
</head>
<body>
  <h1>Daftar Pelanggan (Database MySQL)</h1>
  <div id="output"></div>

  <script>
    fetch("/db/customers")
      .then(res => res.json())
      .then(data => {
        let html = "<ul>";
        data.forEach(c => {
          html += `<li>${c.cust_name} - ${c.cust_city}</li>`;
        });
        html += "</ul>";
        document.getElementById("output").innerHTML = html;
      });
  </script>
</body>
</html>
```

---

## 🧩 Exercise (Tugas Mahasiswa)
### 🎯 *Objective:*
Mahasiswa mampu menerapkan koneksi database dan routing dinamis dalam proyek Node.js.

### 🧭 *Task 1:*
1. Tampilkan hasil **response JSON** dari studi kasus ke halaman web menggunakan JavaScript.
2. Gunakan `app.use(express.static('public'))` untuk menampilkan file HTML dan CSS dari folder public.
3. Tambahkan fitur pencarian pelanggan berdasarkan ID menggunakan input form HTML.
4. Pastikan semua data diambil dari database, bukan dari array statis.

---

## 📘 Unit Summary
Setelah menyelesaikan unit ini, mahasiswa mampu:
- Menjelaskan konsep penyimpanan data menggunakan SQL & NoSQL.
- Menerapkan desain dasar tabel database.
- Melakukan query data menggunakan Node.js dan MySQL.
- Menyambungkan aplikasi Express.js ke database untuk menampilkan data JSON secara dinamis.

---

## 🧠 Post-Lab Questions
1. Apa itu database?  
2. Jelaskan perbedaan antara SQL dan NoSQL!  
3. Bagaimana cara menghubungkan Node.js dengan MySQL?  
4. Mengapa perlu menggunakan format JSON dalam response server?  
5. Sebutkan contoh penggunaan database dalam aplikasi web!

---

📘 *Disusun sebagai panduan praktikum oleh Irwan Syahputra S.Kom., M.Kom. ( 2025 ).*
