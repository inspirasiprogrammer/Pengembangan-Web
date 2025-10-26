# 🧪 Hand-on Lab: Promise, Async-Await & Module System

## 🎯 Tujuan Pembelajaran
Mahasiswa memahami dan mampu menerapkan **konsep JavaScript modern** untuk menangani proses asinkron dan modularisasi kode, mencakup:
- Pembuatan dan pengelolaan **Promise**.
- Penggunaan **Fetch API** untuk komunikasi data asinkron.
- Implementasi **Async-Await** untuk penyederhanaan logika asynchronous.
- Penerapan **Module System** untuk organisasi dan kolaborasi kode yang efisien.

---

## 🧰 Tools yang Digunakan
| Komponen | Deskripsi |
|-----------|------------|
| **Code Editor** | Visual Studio Code / Sublime Text / Notepad++ |
| **Browser** | Chrome / Firefox (Developer Tools aktif) |
| **Data Source** | `https://picsum.photos/v2/list` |
| **File HTML & JS** | Struktur halaman dan logika modular |
| **File CSS (opsional)** | Styling tampilan tabel dan gambar |

---

## 📂 Struktur Folder Proyek
```
promise-async-module/
│
├── author.html        # Halaman utama untuk menampilkan data author & gambar
├── main.js            # File utama, import module dan jalankan fungsi utama
├── AuthorData.js      # Modul untuk pengambilan dan pemrosesan data
└── style.css          # (Opsional) Styling tabel dan tampilan web
```

---

## 🧠 Pre-Lab
Sebelum memulai, pastikan Anda memahami:
1. Apa itu **Promise** dalam JavaScript?
2. Bagaimana cara menggunakan **Fetch API** untuk melakukan permintaan jaringan?
3. Apa fungsi sintaks **async-await**?
4. Apa yang dimaksud dengan **Module System**?

---

## 💡 Studi Kasus
Gaspar ingin menyederhanakan proses permintaan data asinkron dari proyek sebelumnya.  
Kliennya meminta fitur tambahan untuk **menampilkan daftar gambar dan nama author** dalam bentuk tabel.

Data gambar dapat diambil dari:
> `https://picsum.photos/v2/list`

Gaspar memutuskan menggunakan:
- **Promise** untuk mengelola operasi asinkron.
- **Fetch API** untuk permintaan data jaringan.
- **Async-Await** agar sintaks lebih sederhana.
- **Module System** untuk pemisahan logika kode yang lebih rapi.

---

## 🧩 Identification (Analisis Masalah)
Permasalahan utama:
1. Mengambil data secara **asynchronous** menggunakan kombinasi **fetch**, **async-await**, dan **module system**.
2. Menampilkan hasil ke dalam **tabel HTML** melalui **DOM Manipulation**.

---

## 📘 Lessons (Langkah Pembelajaran)

### Lesson 1 — Fetch API
`Fetch API` adalah antarmuka modern JavaScript untuk membuat permintaan HTTP.  
Fitur ini menggantikan `XMLHttpRequest` dengan sintaks yang lebih bersih dan berbasis Promise.

#### Contoh:
```javascript
fetch("https://picsum.photos/v2/list")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Terjadi kesalahan:", error));
```

💡 **Penjelasan:**
- `fetch()` mengembalikan sebuah **Promise**.
- `response.json()` juga mengembalikan Promise, sehingga dapat dikaitkan dengan `.then()`.
- `.catch()` digunakan untuk menangani kesalahan jaringan atau parsing JSON.

---

### Lesson 2 — Async-Await
`Async-Await` adalah cara menulis kode asynchronous dengan gaya *sinkron* agar lebih mudah dibaca.

#### Contoh:
```javascript
async function getData() {
  try {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
}

getData();
```

💡 **Penjelasan:**
- `async` digunakan untuk mendeklarasikan fungsi asinkron.
- `await` menghentikan eksekusi hingga Promise selesai.
- Blok `try...catch` digunakan untuk menangani error agar program tetap stabil.

---

### Lesson 3 — Module System
`Module System` digunakan untuk membagi kode menjadi beberapa bagian (*module*).  
Hal ini meningkatkan keterbacaan, manajemen dependensi, dan kolaborasi antar tim.

#### Contoh Modul
**AuthorData.js**
```javascript
export async function getAuthors() {
  const response = await fetch("https://picsum.photos/v2/list");
  const data = await response.json();
  return data;
}
```

**main.js**
```javascript
import { getAuthors } from "./AuthorData.js";

async function tampilkanData() {
  const authors = await getAuthors();
  const tbody = document.querySelector("#tabel-author tbody");

  authors.forEach(item => {
    const tr = document.createElement("tr");

    const tdImage = document.createElement("td");
    const img = document.createElement("img");
    img.src = item.download_url;
    img.alt = item.author;
    img.width = 120;
    img.height = 80;
    tdImage.appendChild(img);

    const tdName = document.createElement("td");
    tdName.textContent = item.author;

    tr.append(tdImage, tdName);
    tbody.appendChild(tr);
  });
}

tampilkanData();
```

**author.html**
```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Daftar Author & Gambar</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Daftar Gambar & Author (Async Request + Module)</h2>

  <table id="tabel-author">
    <thead>
      <tr>
        <th>Gambar</th>
        <th>Author</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>

  <script type="module" src="main.js"></script>
</body>
</html>
```

💬 **Catatan:**
- Tag `<script type="module">` wajib digunakan untuk mendukung *import/export*.
- Browser modern secara otomatis menjalankan file JavaScript dengan konteks modular.

---

## ⚙️ Solution (Solusi Lengkap)
Solusi menerapkan **kombinasi Fetch + Async-Await + Module System** untuk mengambil data dari API, lalu menampilkannya dalam tabel.

**Struktur Modular:**
- **AuthorData.js**: berisi fungsi `getAuthors()` yang mengembalikan data dari API.
- **main.js**: berisi logika pemanggilan fungsi dan manipulasi DOM.
- **author.html**: menampilkan hasil akhir berupa tabel gambar dan nama author.

---

## 🧩 Exercise (Tugas Mahasiswa)
### 🎯 *Objective:*
Mahasiswa mampu mengembangkan aplikasi sederhana yang menampilkan gambar secara dinamis dengan interaksi pengguna.

### 🧭 *Task 1:*
Tambahkan fitur berikut:
1. Gunakan **module system** untuk memisahkan fungsi utama dan fungsi bantuan.
2. Gunakan **async-await** serta **fetch** untuk mengambil data dari:
   > `https://picsum.photos/v2/list?page=1&limit=1`
3. Tambahkan tombol:
   - `<<` untuk melihat gambar **sebelumnya**.
   - `>>` untuk melihat gambar **berikutnya**.
4. Tambahkan CSS agar tampilan web lebih menarik.

#### Petunjuk Teknis:
- Gunakan parameter `page` pada URL untuk navigasi antar gambar.
- Simpan nomor halaman saat ini dalam variabel global.
- Gunakan *event listener* untuk tombol navigasi.
- Terapkan *error handling* agar navigasi tidak melebihi jumlah halaman.

---

## 📘 Unit Summary
Setelah menyelesaikan praktikum ini, mahasiswa mampu:
- Menjelaskan konsep **Promise** dan siklus hidupnya (resolve, reject).
- Menggunakan **Fetch API** untuk permintaan jaringan secara efisien.
- Mengimplementasikan **Async-Await** untuk kode asynchronous yang mudah dibaca.
- Mengorganisir kode JavaScript ke dalam **Module System** agar terstruktur dan mudah dikelola.

---

## 🧠 Post-Lab Questions
1. Apa itu **Promise** dan bagaimana siklus hidupnya dalam JavaScript?
2. Bagaimana cara kerja **Fetch API**?
3. Jelaskan fungsi **async** dan **await** dalam penulisan kode asynchronous.
4. Bagaimana konsep **export** dan **import** pada Module System?
5. Mengapa modularisasi kode penting dalam proyek besar?

---

📘 *Disusun sebagai panduan praktikum oleh Irwan Syahputra S.Kom., M.Kom. ( 2025 ).*
