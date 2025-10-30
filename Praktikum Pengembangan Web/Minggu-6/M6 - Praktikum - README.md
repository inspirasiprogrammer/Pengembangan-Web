# 🧪 Hand-on Lab: Basic Routing dengan Express.js

## 🎯 Tujuan Pembelajaran
Mahasiswa memahami dan mampu:
- Menjelaskan **peran routing dalam aplikasi web** dan bagaimana Express.js menyederhanakan prosesnya.
- Membuat dan mengelola **rute dasar (GET, POST, PUT, DELETE)** dalam Express.js.
- Menangani **parameter** pada routing.
- Menampilkan halaman statis menggunakan **middleware bawaan Express.js**.
- Menguji server dengan **Postman** untuk setiap metode HTTP.

---

## 🧰 Tools yang Digunakan
| Komponen | Deskripsi |
|-----------|------------|
| **Runtime Environment** | Node.js (v18+ disarankan) |
| **Package Manager** | npm (Node Package Manager) |
| **Framework** | Express.js |
| **Code Editor** | Visual Studio Code |
| **Testing Tool** | Postman |
| **Browser** | Chrome / Edge |
| **Terminal / Command Prompt** | Untuk menjalankan server (`node index.js` / `nodemon index.js`) |

---

## 📂 Struktur Folder Proyek
```
express-routing-lab/
│
├── index.js           # File utama untuk routing server
├── package.json       # Konfigurasi project dan dependensi
├── /public            # Folder berisi halaman statis (HTML, CSS, JS)
│   ├── index.html
│   ├── about.html
│   ├── contact.html
│   └── mahasiswa.html
└── README.md          # Dokumentasi proyek
```

---

## 🧠 Pre-Lab
Sebelum mulai, jawab pertanyaan berikut:
1. Apa itu **Express.js**?
2. Bagaimana cara melakukan **routing** menggunakan Express.js?

---

## 💡 Studi Kasus
Gaspar baru saja mempelajari **basic routing** pada Node.js dan ingin menerapkannya pada sebuah web sederhana menggunakan **Express.js**.  
Tugasnya:
- Menampilkan halaman web dari folder `public`.
- Mengimplementasikan **GET, POST, PUT, DELETE** untuk simulasi data `mahasiswa`.
- Jika terdapat parameter pada path (misalnya `/mahasiswa/:nim`), maka server harus mengembalikan **response berisi nilai parameter** tersebut.

**Contoh Response:**
```
GET     /mahasiswa/22120001   → "Menampilkan data mahasiswa dengan NIM: 22120001"
POST    /mahasiswa/22120001   → "Menambahkan data mahasiswa dengan NIM: 22120001"
PUT     /mahasiswa/22120001   → "Memperbarui data mahasiswa dengan NIM: 22120001"
DELETE  /mahasiswa/22120001   → "Menghapus data mahasiswa dengan NIM: 22120001"
```

---

## 🧩 Identification (Analisis Masalah)
Permasalahan utama:
1. Menjalankan **HTTP Server** dengan Express.js pada `localhost`.
2. Menampilkan halaman statis dari folder `public`.
3. Membuat routing dengan berbagai metode HTTP (GET, POST, PUT, DELETE).
4. Mengelola **parameter routing** dengan response dinamis.

---

## 📘 Lessons (Langkah Pembelajaran)

### Lesson 1 — Prasyarat Instalasi Express.js
1. Pastikan **Node.js** dan **npm** sudah terinstal:
   ```bash
   node -v
   npm -v
   ```
   Jika belum, unduh dari [https://nodejs.org/en](https://nodejs.org/en)

2. Buat folder proyek baru:
   ```bash
   mkdir express-routing-lab
   cd express-routing-lab
   ```

3. Inisialisasi proyek Node.js:
   ```bash
   npm init -y
   ```

4. Instal Express.js:
   ```bash
   npm install express
   ```

5. Tambahkan di `package.json`:
   ```json
   "type": "module"
   ```

---

### Lesson 2 — Membuat Project Express.js
1. Buka proyek di **VS Code**, lalu buat file `index.js`.
2. Tambahkan kode dasar berikut:
   ```javascript
   import express from "express";
   import path from "path";
   import { fileURLToPath } from "url";

   const __filename = fileURLToPath(import.meta.url);
   const __dirname = path.dirname(__filename);

   const app = express();
   const hostname = "127.0.0.1";
   const port = 8000;

   app.use(express.static(path.join(__dirname, "public")));

   app.listen(port, hostname, () => {
     console.log(`Server berjalan di http://${hostname}:${port}/`);
   });
   ```
3. Jalankan server:
   ```bash
   node index.js
   ```
4. Buka di browser: [http://localhost:8000](http://localhost:8000)

---

### Lesson 3 — Membaca Folder Public
Tambahkan halaman statis (misalnya `index.html`, `about.html`, `contact.html`) di folder `/public`.  
Gunakan middleware berikut agar Express melayani file tersebut secara otomatis:
```javascript
app.use(express.static("public"));
```
Jika pengguna mengakses `/about`, server akan secara otomatis mencari file `about.html` di dalam folder `public`.

---

### Lesson 4 — Menerapkan Routing GET, POST, PUT, DELETE
Tambahkan kode berikut di file `index.js` untuk membuat rute dinamis:

```javascript
// Routing dasar
app.get("/", (req, res) => {
  res.send("Selamat datang di server Express.js!");
});

// Routing dengan parameter
app.get("/mahasiswa/:nim", (req, res) => {
  res.send(`Menampilkan data mahasiswa dengan NIM: ${req.params.nim}`);
});

app.post("/mahasiswa/:nim", (req, res) => {
  res.send(`Menambahkan data mahasiswa dengan NIM: ${req.params.nim}`);
});

app.put("/mahasiswa/:nim", (req, res) => {
  res.send(`Memperbarui data mahasiswa dengan NIM: ${req.params.nim}`);
});

app.delete("/mahasiswa/:nim", (req, res) => {
  res.send(`Menghapus data mahasiswa dengan NIM: ${req.params.nim}`);
});
```

---

## ⚙️ Solution (Implementasi Lengkap)
Struktur proyek lengkap:
```
express-routing-lab/
│
├── index.js
├── package.json
└── public/
    ├── index.html
    ├── about.html
    ├── contact.html
    └── mahasiswa.html
```

Kode utama:
```javascript
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const hostname = "127.0.0.1";
const port = 8000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/mahasiswa/:nim", (req, res) => {
  res.send(`Menampilkan data mahasiswa dengan NIM: ${req.params.nim}`);
});

app.post("/mahasiswa/:nim", (req, res) => {
  res.send(`Menambahkan data mahasiswa dengan NIM: ${req.params.nim}`);
});

app.put("/mahasiswa/:nim", (req, res) => {
  res.send(`Memperbarui data mahasiswa dengan NIM: ${req.params.nim}`);
});

app.delete("/mahasiswa/:nim", (req, res) => {
  res.send(`Menghapus data mahasiswa dengan NIM: ${req.params.nim}`);
});

app.listen(port, hostname, () => {
  console.log(`Server berjalan di http://${hostname}:${port}/`);
});
```

---

## 🧩 Exercise (Tugas Mahasiswa)
### 🎯 *Objective:*
Mahasiswa mampu menerapkan routing dan memanipulasi halaman web menggunakan Express.js.

### 🧭 *Task 1:*
Buat website dengan:
1. **Empat routing tanpa parameter**, misalnya:
   - `/`
   - `/about`
   - `/contact`
   - `/help`
2. **Satu routing dengan parameter**, misalnya `/user/:id`
3. Gunakan `app.use(express.static('public'))` agar dapat membaca folder statis.
4. Gunakan **Postman** untuk menguji setiap method:
   - GET `/mahasiswa/:nim`
   - POST `/mahasiswa/:nim`
   - PUT `/mahasiswa/:nim`
   - DELETE `/mahasiswa/:nim`

---

## 📘 Unit Summary
Setelah menyelesaikan praktikum ini, mahasiswa mampu:
- Memahami peran **routing** dan bagaimana **Express.js** menyederhanakannya.
- Menerapkan rute dasar GET, POST, PUT, DELETE.
- Menangani parameter routing.
- Menampilkan halaman web statis melalui Express.
- Menguji server menggunakan Postman.

---

## 🧠 Post-Lab Questions
1. Apa itu Express.js?
2. Bagaimana cara melakukan routing menggunakan Express.js?
3. Apa perbedaan antara `app.use()` dan `app.get()`?
4. Mengapa kita membutuhkan parameter pada route?
5. Bagaimana cara Express.js membaca file statis dalam folder `public`?

---

📘 *Disusun sebagai panduan praktikum oleh Irwan Syahputra S.Kom., M.Kom. ( 2025 ).*
