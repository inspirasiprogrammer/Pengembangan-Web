# 🧪 Hand-on Lab: Web Server & Node.js

## 🎯 Tujuan Pembelajaran
Mahasiswa mampu:
- Memahami **fungsi dan peran server web** dalam menangani permintaan (request) dan memberikan respons (response) ke klien.
- Menjelaskan struktur dan komponen dasar dari **HTTP Request** dan **HTTP Response**.
- Mengidentifikasi **fitur utama Node.js** untuk membangun aplikasi web dinamis.
- Mengimplementasikan **HTTP Server sederhana** menggunakan Node.js.

---

## 🧰 Tools yang Digunakan
| Komponen | Deskripsi |
|-----------|------------|
| **Runtime Environment** | Node.js |
| **Code Editor** | Visual Studio Code / Sublime Text |
| **Browser** | Chrome / Firefox |
| **Command Line / Terminal** | Untuk menjalankan server (`node index.js`) |
| **File HTML** | Halaman statis (mis. `index.html`) |
| **Module Node.js** | `http`, `fs` (File System) |

---

## 📂 Struktur Folder Proyek
```
webserver-nodejs/
│
├── index.js        # File utama server Node.js
├── index.html      # File HTML yang ditampilkan di browser
└── README.md       # Dokumentasi proyek
```

---

## 🧠 Pre-Lab
Sebelum memulai, pahami dan jawab pertanyaan berikut:
1. Apa itu **Web Server**?
2. Bagaimana cara membuat web server sederhana menggunakan **Node.js**?

---

## 💡 Studi Kasus
Gaspar dan tim telah menyelesaikan beberapa proyek berbasis web statis. Kini klien meminta versi **dinamis** dari web tersebut agar bisa dijalankan melalui server sendiri.

Gaspar menyiapkan server kosong untuk kalian kembangkan.  
Target pertama adalah membuat **HTTP Server sederhana** dengan Node.js yang mampu:
- Menjalankan server di `localhost` dengan port tertentu (mis. 3000),
- Menampilkan halaman **HTML statis** (project sebelumnya) di browser klien.

---

## 🧩 Identification (Analisis Permasalahan)
Masalah utama:
1. Menjalankan **HTTP Server** pada `localhost` dan port tertentu.
2. Menampilkan **response HTML** ke browser klien.
3. Mengelola file HTML menggunakan **File System (fs)** agar server dapat membaca file eksternal.

---

## 📘 Lessons (Langkah Pembelajaran)

### Lesson 1 — HTTP Server dengan Node.js
Node.js memiliki modul bawaan bernama `http` yang dapat digunakan untuk membuat server.  
Fungsi utama yang digunakan adalah `http.createServer()`.

#### Struktur dasar:
```javascript
const http = require("http");

const hostname = "127.0.0.1"; // localhost
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Halo Dunia!</h1><p>Server Node.js berjalan dengan baik.</p>");
});

server.listen(port, hostname, () => {
  console.log(`Server berjalan di http://${hostname}:${port}/`);
});
```

💡 **Penjelasan:**
- `require("http")` memanggil modul http bawaan Node.js.
- `res.statusCode = 200` artinya server berhasil memberikan response.
- `res.setHeader("Content-Type", "text/html")` menandakan data yang dikirim adalah HTML.
- `res.end()` mengakhiri response dan mengirimkannya ke klien.
- `server.listen(port, hostname)` menjalankan server di host dan port tertentu.

---

### Lesson 2 — Menampilkan File HTML Menggunakan Modul `fs`
Jika konten HTML terlalu panjang, sebaiknya dipisahkan ke file terpisah.  
Modul `fs` (File System) digunakan untuk membaca file tersebut.

```javascript
const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  
  const data = fs.readFileSync("index.html");
  res.end(data);
});

server.listen(port, hostname, () => {
  console.log(`Server berjalan di http://${hostname}:${port}/`);
});
```

🧠 **Penjelasan Tambahan:**
- `fs.readFileSync("index.html")` membaca file HTML di folder yang sama dengan `index.js`.
- Pastikan file HTML berada di **direktori yang sama**, atau sesuaikan path relatif.
- Gunakan **Ctrl + C** di terminal untuk menghentikan server, lalu jalankan ulang dengan:
  ```
  node index.js
  ```

---

## ⚙️ Solution (Implementasi Lengkap)
Struktur proyek lengkap:

### File: `index.js`
```javascript
const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  const html = fs.readFileSync("index.html");
  res.end(html);
});

server.listen(port, hostname, () => {
  console.log(`Server aktif di http://${hostname}:${port}/`);
});
```

### File: `index.html`
```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portofolio Saya</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f7f7f7;
      color: #333;
      text-align: center;
      margin: 50px;
    }
    h1 { color: #007bff; }
  </style>
</head>
<body>
  <h1>Halo, Saya Gaspar!</h1>
  <p>Ini adalah portofolio saya yang dijalankan menggunakan <b>Node.js Server</b>.</p>
</body>
</html>
```

---

## 🧩 Exercise (Tugas Mahasiswa)
### 🎯 *Objective:*
Mahasiswa mampu mengimplementasikan dan memodifikasi HTTP Server dengan Node.js.

### 🧭 *Task 1:*
1. Buat file `index.html` berisi **biodata diri atau portofolio pribadi**.
2. Jalankan server menggunakan Node.js di port kustom (contoh: `8080` atau `1234`).
3. Pastikan server menampilkan halaman tersebut di browser.
4. Tampilkan pesan log berikut di terminal:
   ```
   Server berjalan di http://localhost:<PORT>
   ```
5. Gunakan `console.log(PORT)` untuk memverifikasi server aktif.

---

## 📘 Unit Summary
Setelah menyelesaikan unit ini, mahasiswa mampu:
- Memahami **cara kerja server web** dalam menangani permintaan dan respons klien.
- Menjelaskan **struktur HTTP Request dan Response**.
- Mengetahui **fitur utama Node.js** sebagai runtime JavaScript untuk server.
- Mengimplementasikan **HTTP Server sederhana** untuk mengelola interaksi dengan klien.

---

## 🧠 Post-Lab Questions
1. Apa itu Web Server?
2. Bagaimana cara membuat web server sederhana dengan Node.js?
3. Mengapa kita menggunakan modul `fs` untuk membaca file HTML?
4. Apa yang terjadi jika port server sudah digunakan oleh aplikasi lain?
5. Bagaimana cara menampilkan lebih dari satu halaman HTML dari server?

---

📘 *Disusun sebagai panduan praktikum oleh Irwan Syahputra S.Kom., M.Kom. ( 2025 ).*
