# 🧪 Hand-on Lab: Middleware di Express.js

## 🎯 Tujuan Pembelajaran
Mahasiswa memahami dan mampu:
- Memahami **konsep middleware** dan perannya dalam siklus *request-response* pada Express.js.  
- Mengimplementasikan **application-level middleware** dan **router-level middleware**.  
- Menggunakan **middleware bawaan Express.js** untuk parsing request dan melayani file statis.  
- Menangani **error** menggunakan middleware khusus.  
- Menerapkan praktik terbaik agar aplikasi tetap modular, efisien, dan mudah dipelihara.

---

## 🧰 Tools yang Digunakan
| Komponen | Deskripsi |
|-----------|------------|
| **Runtime** | Node.js (v18+ disarankan) |
| **Framework** | Express.js |
| **Library Pendukung** | body-parser, path, fs |
| **Editor** | Visual Studio Code |
| **Testing Tool** | Postman / Browser |
| **Browser Output** | Chrome / Edge |
| **Folder Publik** | `/public` untuk CSS, JS, HTML template |

---

## 📂 Struktur Folder Proyek
```
express-middleware-lab/
│
├── app.js               # File utama server
├── /public              # Folder aset statis
│   ├── index.html
│   ├── user.html
│   ├── sorry.html
│   ├── about.html
│   └── style.css
└── README.md            # Dokumentasi lab
```

---

## 🧠 Pre-Lab Questions
1. Apa itu **Middleware**?  
2. Apa saja **jenis Middleware** yang ada di Express.js?  
3. Bagaimana cara menggunakan middleware di dalam proyek yang menggunakan Express.js?

---

## 💡 Studi Kasus
Gaspar diminta menambahkan fitur khusus dalam proyek Express.js-nya.  
Fitur tersebut harus **menampilkan halaman berbeda** tergantung siapa pengguna yang mengakses URL:

### Skenario:
- Ketika mengakses `/`, tampilkan halaman `about.html` beserta semua asset CSS dan JS-nya.
- Ketika mengakses `/:username`, lakukan pengecekan:
  - Jika `username` ada dalam `list_user`, tampilkan halaman `user.html`.
  - Jika tidak ada, tampilkan halaman `sorry.html`.
- Setiap kali `/:username` diakses, catat aktivitas ke dalam **log server**.

**Hint:** Gunakan middleware untuk:  
1️⃣ *Static serving* file CSS/JS.  
2️⃣ *Application-level check* untuk semua rute.  
3️⃣ *Router-level validation* untuk pengecekan username.  
4️⃣ *Error handler* untuk menampilkan halaman fallback.

---

## 🧩 Identification (Analisis Masalah)
Masalah yang perlu diselesaikan:
1. **Load data statis** (CSS, JS, gambar) agar halaman HTML bisa menampilkan asset dengan benar.  
2. **Tambahkan middleware khusus** pada routing `GET /:username`.  
3. **Redirect otomatis** ke halaman lain jika syarat tidak terpenuhi (misalnya username tidak ditemukan).  

---

## 📘 Lessons (Langkah-Langkah Praktikum)

### Lesson 1 — Memuat Data Asset (Static Middleware)
Express menyediakan middleware bawaan `express.static()` untuk melayani file statis.

```javascript
import express from "express";
const app = express();

// Menentukan folder public sebagai folder utama aset
app.use(express.static("public"));
```

📘 **Penjelasan:**
- `express.static('public')` akan melayani semua file yang ada di dalam folder `public`.
- File CSS, JS, atau gambar akan otomatis bisa diakses oleh browser.

---

### Lesson 2 — Middleware pada Route Tertentu
Kita dapat menambahkan middleware yang hanya dijalankan pada route tertentu.

```javascript
// Middleware khusus
const logger = (req, res, next) => {
  console.log(`Akses ke: ${req.originalUrl} pada ${new Date().toLocaleString()}`);
  next();
};

app.get("/:username", logger, (req, res) => {
  const user = req.params.username;
  const list_user = ["andi", "budi", "citra"];

  if (list_user.includes(user)) {
    res.sendFile("user.html", { root: "public" });
  } else {
    res.sendFile("sorry.html", { root: "public" });
  }
});
```

💡 **Catatan:**
- `next()` wajib dipanggil agar request dapat diteruskan ke middleware berikutnya atau ke route handler.  
- Middleware dapat disusun dalam **array** untuk menjalankan beberapa fungsi berurutan.

---

### Lesson 3 — Redirect ke Route Lain
Express memungkinkan redirect otomatis menggunakan `res.redirect()`.

```javascript
app.get("/old", (req, res) => {
  res.redirect("/about");
});
```

📘 **Penjelasan:**
Redirect sangat berguna untuk:
- Mengarahkan user ke halaman baru.
- Menangani URL lama tanpa perlu menulis ulang rute.
- Mengalihkan ke halaman error atau login bila belum terautentikasi.

---

## ⚙️ Solution (Implementasi Lengkap)
Berikut implementasi lengkap dari studi kasus di atas.

### File: `app.js`
```javascript
import express from "express";
import fs from "fs";
const app = express();
const port = 3000;

// 1️⃣ Load file statis
app.use(express.static("public"));

// 2️⃣ Middleware global (logging)
app.use((req, res, next) => {
  const log = `[${new Date().toISOString()}] ${req.method} ${req.url}
`;
  fs.appendFileSync("access.log", log);
  next();
});

// 3️⃣ Routing utama
app.get("/", (req, res) => {
  res.sendFile("about.html", { root: "public" });
});

app.get("/:username", (req, res) => {
  const { username } = req.params;
  const list_user = ["andi", "budi", "citra"];

  if (list_user.includes(username)) {
    res.sendFile("user.html", { root: "public" });
  } else {
    res.sendFile("sorry.html", { root: "public" });
  }
});

// 4️⃣ Error handling middleware
app.use((err, req, res, next) => {
  console.error("Terjadi error:", err.message);
  res.status(500).send("Terjadi kesalahan pada server!");
});

app.listen(port, () => console.log(`Server berjalan di http://localhost:${port}`));
```

---

## 🧩 Exercise (Tugas Mahasiswa)
### 🎯 *Objective:*
Mahasiswa mampu memahami dan mengimplementasikan **middleware** di berbagai level Express.js.

### 🧭 *Task 1:*
Gunakan proyek sebelumnya dari *Advanced Database*, kemudian:
1. Tambahkan middleware untuk **validasi input** pada route `POST` dan `PUT/PATCH`.  
2. Pastikan:
   - `qty_stock >= 0`  
   - `price >= 1000`  
   - Keduanya bertipe **integer** (gunakan `isNaN()` untuk validasi).  
3. Jika validasi gagal, tampilkan response JSON:
   ```json
   { "error": "Data tidak valid! Pastikan qty_stock >= 0 dan price >= 1000." }
   ```
4. Jika validasi berhasil, lanjutkan ke proses CRUD berikutnya.

📘 *Hint:*  
Gunakan middleware router-level:
```javascript
const validateData = (req, res, next) => {
  const { qty_stock, price } = req.body;
  if (isNaN(qty_stock) || isNaN(price) || qty_stock < 0 || price < 1000) {
    return res.status(400).json({ error: "Data tidak valid!" });
  }
  next();
};

app.post("/api/items", validateData, (req, res) => {
  // operasi insert data
});
```

---

## 📘 Unit Summary
Setelah menyelesaikan unit ini, mahasiswa mampu:
- Menjelaskan fungsi dan jenis **middleware** dalam Express.js.
- Mengimplementasikan middleware pada level **aplikasi** dan **router**.
- Menangani error dan melakukan redirect dengan Express.js.
- Menerapkan **praktik terbaik** agar kode modular, efisien, dan mudah dipelihara.

---

## 🧠 Post-Lab Questions
1. Apa itu Middleware?  
2. Apa saja jenis Middleware di Express.js?  
3. Bagaimana cara menggunakan middleware di dalam proyek Express.js?

---

📘 *Disusun sebagai panduan praktikum oleh Irwan Syahputra S.Kom., M.Kom. ( 2025 ).*
