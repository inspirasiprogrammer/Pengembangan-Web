# 🧪 Hand-on Lab: Class & Object dalam JavaScript

## 🎯 Tujuan Pembelajaran
Mahasiswa memahami dan mampu menerapkan konsep **Object-Oriented Programming (OOP)** pada JavaScript, mencakup:
- Pembuatan dan inisialisasi *class* dan *object*.
- Pemanfaatan atribut dan metode objek.
- Penggunaan *built-in objects* (Array, Math, Date, String).
- Penerapan prinsip OOP untuk memecahkan masalah dunia nyata secara efisien dan terstruktur.

---

## 🧰 Tools yang Digunakan
| Komponen | Deskripsi |
|-----------|------------|
| **Code Editor** | Visual Studio Code / Sublime Text / Notepad++ |
| **Browser** | Chrome / Firefox (Developer Tools aktif) |
| **File HTML** | Struktur tampilan halaman web |
| **File JavaScript (.js)** | Logika OOP dan manipulasi DOM |
| **File CSS (opsional)** | Desain dan tata letak halaman web |

---

## 📂 Struktur Folder Proyek
```
oop-javascript/
│
├── index.html       # Halaman utama web
├── script.js        # Logika OOP dan DOM
└── style.css        # (Opsional) Tampilan web
```

---

## 🧠 Pre-Lab
Sebelum memulai, jawab pertanyaan berikut:
1. Bagaimana cara membuat *class* dan *object* menggunakan JavaScript?
2. Bagaimana cara mengakses atribut dari sebuah *object*?
3. Apa saja *built-in objects* yang ada dalam JavaScript?
4. Bagaimana cara menggunakan *built-in objects* tersebut?

---

## 💡 Studi Kasus: Memperbaiki Konten Website Klien
Seorang pengembang bernama **Gaspar** diminta memperbaiki isi konten pada website klien yang memiliki kesalahan teks.  
Contoh teks awal:
> “Memori adalah urutan byte yang berisi sepotong kecil informasi ... computar ...”

**Masalah:**
1. Terdapat kesalahan ejaan “computar” → seharusnya “komputer”.
2. Klien ingin fitur untuk menghitung **jumlah kalimat dan jumlah kata** dari teks tersebut.
3. Proses identifikasi hanya boleh dilakukan **satu kali**.

---

## 🧩 Identification (Analisis Masalah)
Untuk menyelesaikan permasalahan tersebut, program harus mampu:
1. Menampilkan tanggal di halaman web.
2. Mengubah isi konten teks menggunakan JavaScript.
3. Menghitung jumlah kalimat dan kata dari paragraf.
4. Membatasi aksi identifikasi agar tidak dilakukan berulang.

---

## 📘 Lessons (Langkah Pembelajaran)

### Lesson 1 — Membuat Class & Object di JavaScript
JavaScript mendukung paradigma OOP melalui keyword `class`.

```javascript
class Manusia {
  constructor(nama, usia) {
    this.nama = nama;
    this.usia = usia;
  }

  sapa() {
    console.log(`Halo, nama saya ${this.nama} dan saya berusia ${this.usia} tahun.`);
  }

  ulangTahun() {
    this.usia++;
    console.log(`Selamat ulang tahun! Sekarang saya ${this.usia} tahun.`);
  }
}

// Membuat object dari class
let orang = new Manusia("Budi", 25);
orang.sapa();
orang.ulangTahun();
```

🧠 **Penjelasan:**
- `constructor` adalah method khusus untuk inisialisasi data awal.
- `this` digunakan untuk mengakses properti internal class.
- Object dibuat dengan `new NamaClass()`.
- Method dipanggil dengan `object.namaMethod()`.

---

### Lesson 2 — Atribut dan Properti Object
Atribut atau *property* adalah variabel yang dimiliki oleh objek.

#### Mengakses properti:
```javascript
console.log(orang.nama);
```

#### Mengubah nilai properti:
```javascript
orang.usia = 30;
```

#### Menghapus properti:
```javascript
delete orang.usia;
```

---

### Lesson 3 — Built-in Object JavaScript
JavaScript menyediakan berbagai *built-in objects* yang siap digunakan.

#### 1️⃣ Array
Digunakan untuk menyimpan kumpulan data.

```javascript
let buah = ["Apel", "Jeruk", "Pisang"];
console.log(buah.length); // 3
buah.push("Mangga");
```

#### 2️⃣ Math
Untuk operasi matematika.

```javascript
let akar = Math.sqrt(25);
let acak = Math.random();
let max = Math.max(10, 50, 20);
```

#### 3️⃣ Date
Untuk mengelola tanggal dan waktu.

```javascript
let tanggal = new Date();
console.log(tanggal.toDateString());
```

#### 4️⃣ String
Manipulasi teks.

```javascript
let kalimat = "Belajar JavaScript itu mudah";
console.log(kalimat.toUpperCase());
console.log(kalimat.split(" "));
```

---

## ⚙️ Solution (Implementasi Studi Kasus)
Berikut solusi lengkap untuk kasus perbaikan konten web klien.

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Identifikasi Paragraf</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      background-color: #f4f4f4;
      padding: 20px;
    }
    p {
      width: 80%;
      margin: 20px auto;
      text-align: justify;
    }
    button {
      padding: 10px 20px;
      margin-top: 10px;
      border: none;
      background-color: #007bff;
      color: white;
      cursor: pointer;
      border-radius: 5px;
    }
  </style>
</head>
<body>

  <h2>Identifikasi Paragraf Website</h2>

  <p id="konten">
    Memori adalah urutan byte yang berisi sepotong kecil informasi. Informasi ini mungkin
    menjadi perintah untuk mengatakan pada computar apa yang harus dilakukan. Sel mungkin
    berisi data yang diperlukan computar untuk melakukan suatu perintah.
  </p>

  <button id="btnIdentifikasi">Identifikasi Paragraf</button>
  <p id="info"></p>

  <script>
    class Artikel {
      constructor(teks) {
        this.teks = teks;
        this.teridentifikasi = false;
      }

      perbaikiKonten() {
        this.teks = this.teks.replaceAll("computar", "komputer");
      }

      identifikasi() {
        if (this.teridentifikasi) {
          alert("Identifikasi hanya dapat dilakukan sekali!");
          return;
        }
        this.teridentifikasi = true;

        const kalimat = this.teks.split(".");
        const kata = this.teks.split(" ");
        const jumlahKalimat = kalimat.filter(k => k.trim() !== "").length;
        const jumlahKata = kata.filter(k => k.trim() !== "").length;

        document.getElementById("info").innerHTML = `
          <b>Jumlah Kalimat:</b> ${jumlahKalimat}<br>
          <b>Jumlah Kata:</b> ${jumlahKata}
        `;
      }
    }

    let paragraf = new Artikel(document.getElementById("konten").innerText);
    paragraf.perbaikiKonten();
    document.getElementById("konten").innerText = paragraf.teks;

    document.getElementById("btnIdentifikasi").addEventListener("click", () => paragraf.identifikasi());
  </script>
</body>
</html>
```

---

## 🧩 Exercise (Tugas Mahasiswa)
### 🎯 *Objective:*
Mahasiswa mampu:
- Memahami prinsip OOP dalam JavaScript.
- Membuat dan menggunakan *class* serta *object* secara efisien.
- Menerapkan *method* dan *property* dalam pemecahan masalah praktis.

### 🧭 *Task 1:*
Perbaiki konten teks seperti pada studi kasus dan tambahkan fitur berikut:
1. Ganti seluruh kata “computar” menjadi “komputer”.
2. Tampilkan jumlah **kalimat dan kata** ketika tombol “Identifikasi Paragraf” ditekan.
3. Hanya izinkan satu kali identifikasi (gunakan flag `teridentifikasi`).
4. Tambahkan tanggal hari ini di bagian atas halaman menggunakan objek `Date`.

---

## 📘 Unit Summary
Setelah menyelesaikan praktikum ini, mahasiswa mampu:
- Mengimplementasikan **Object-Oriented Programming (OOP)** di JavaScript.
- Menggunakan **class**, **object**, **method**, dan **property** dengan benar.
- Memanfaatkan **built-in objects** (Array, Math, Date, String) untuk memecahkan masalah.
- Membuat halaman web dinamis dan interaktif menggunakan JavaScript murni.

---

## 🧠 Post-Lab Questions
1. Bagaimana cara membuat class dan object menggunakan JavaScript?
2. Bagaimana cara mengakses atribut dari sebuah object JavaScript?
3. Sebutkan beberapa *built-in objects* yang umum digunakan!
4. Bagaimana cara menggunakan *built-in objects* untuk manipulasi data?

---

📘 *Disusun sebagai panduan praktikum oleh Irwan Syahputra S.Kom., M.Kom. ( 2025 ).*
