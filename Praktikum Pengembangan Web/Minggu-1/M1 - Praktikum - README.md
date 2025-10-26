# 🧪 Hand-on Lab: Backend Development with JavaScript

## 🎯 Tujuan Pembelajaran
Mahasiswa memahami dasar-dasar **pemrograman backend menggunakan JavaScript**, meliputi:
- Penulisan kode JavaScript pada halaman web.
- Pemahaman **variabel, tipe data, operator, percabangan, looping, dan function**.
- Penggunaan **event handler** dan **DOM Manipulation**.
- Penerapan JavaScript untuk membangun aplikasi web interaktif sederhana: **Kalkulator Penjumlahan**.

---

## 🧰 Tools yang Digunakan
| Komponen | Deskripsi |
|-----------|------------|
| **Code Editor** | Visual Studio Code / Notepad++ / Sublime Text |
| **Browser** | Chrome / Firefox (Developer Tools aktif) |
| **File HTML & JS** | Untuk struktur dan logika kalkulator |
| **File CSS (opsional)** | Untuk mempercantik tampilan kalkulator |

---

## 📂 Struktur Folder Proyek
```
backend-javascript/
│
├── index.html       # Halaman utama
├── script.js        # Logika kalkulator dengan JavaScript
└── style.css        # (Opsional) Desain kalkulator
```

---

## 🧠 Pre-Lab
Sebelum memulai, jawab pertanyaan berikut untuk memastikan pemahaman dasar:
1. Bagaimana cara menambahkan kode JavaScript ke sebuah halaman?
2. Bagaimana cara membuat variabel dan menginisialisasi tipe data di JavaScript?
3. Bagaimana menambahkan event dengan JavaScript?
4. Bagaimana melakukan manipulasi DOM dengan JavaScript?

---

## 💡 Studi Kasus: Kalkulator Penjumlahan
**Kasus:**  
Buat halaman web yang dapat menerima dua angka dari pengguna, lalu menampilkan hasil **penjumlahan** ketika tombol “+” ditekan.

**Tujuan praktikum:**  
- Melatih penerapan variabel, function, event handler, dan DOM Manipulation.
- Memahami bagaimana JavaScript memproses input dan menampilkan output dinamis.

---

## 📘 Lesson-by-Lesson

### Lesson 1 — Menambahkan Kode JavaScript ke File HTML
JavaScript dapat ditulis dalam dua cara:

#### 🔹 1. Internal JavaScript
Kode JavaScript diletakkan langsung di dalam tag `<script>` dalam file HTML.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Internal JavaScript</title>
  <script>
    function sapa() {
      alert("Halo, JavaScript sudah aktif!");
    }
  </script>
</head>
<body>
  <button onclick="sapa()">Klik Saya</button>
</body>
</html>
```
🧠 *Catatan:* Tag `<script>` sebaiknya ditempatkan di akhir elemen `<body>` agar HTML dirender lebih dahulu sebelum JavaScript dijalankan.

#### 🔹 2. Eksternal JavaScript
Pisahkan kode JavaScript ke file `.js` tersendiri.

```html
<!-- index.html -->
<script src="script.js"></script>
```
```javascript
// script.js
alert("File JavaScript eksternal berhasil dijalankan!");
```

---

### Lesson 2 — Variabel dan Tipe Data
Variabel menyimpan data yang digunakan dalam program. Contoh:

```javascript
let nama = "John Doe";        // String
let umur = 25;                // Number
let aktif = true;             // Boolean
let buah = ["Apel", "Pisang"]; // Array
let user = { nama: "Andi", umur: 21 }; // Object
```

🧩 **Penjelasan Singkat:**
- `undefined`: variabel dideklarasikan tapi belum diisi nilai.
- `null`: variabel kosong (tidak berisi nilai apapun).
- `Number`, `String`, `Boolean`, `Array`, `Object` adalah tipe data utama.
- `Date` digunakan untuk menyimpan waktu saat ini:  
  `let now = new Date();`

---

### Lesson 3 — Operator
Operator digunakan untuk melakukan operasi matematika dan logika.

#### 🔹 Operator Aritmatika
```javascript
let a = 10, b = 5;
console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0
```

#### 🔹 Operator Perbandingan
```javascript
let x = 8, y = 10;
console.log(x == y);  // false
console.log(x != y);  // true
console.log(x > y);   // false
console.log(x <= y);  // true
```

#### 🔹 Operator Assignment
```javascript
let c = 20;
c += 10; // 30
c -= 5;  // 25
c *= 2;  // 50
c /= 5;  // 10
c %= 3;  // 1
```

---

### Lesson 4 — Pernyataan Kondisional (Percabangan)
Gunakan `if`, `else if`, `else` untuk mengeksekusi blok kode berdasarkan kondisi.

```javascript
let nilai = 85;

if (nilai >= 90) {
  console.log("Nilai A");
} else if (nilai >= 80) {
  console.log("Nilai B");
} else {
  console.log("Nilai C");
}
```

💬 *Contoh Lain:*
```javascript
let suhu = 30;
if (suhu > 25) {
  console.log("Hari ini panas.");
} else {
  console.log("Hari ini sejuk.");
}
```

---

### Lesson 5 — Looping (Perulangan)
Untuk mengeksekusi blok kode berulang kali, gunakan `for`, `while`, atau `do...while`.

```javascript
for (let i = 1; i <= 5; i++) {
  console.log("Perulangan ke-" + i);
}
```

---

### Lesson 6 — Function
Function adalah blok kode yang dapat dipanggil berulang kali.

```javascript
function hitung(a, b) {
  return a + b;
}
console.log(hitung(5, 3)); // 8
```

💡 *Fungsi dapat memiliki parameter dan nilai kembalian (`return`).*

---

### Lesson 7 — Event & Event Handler
Event adalah aksi dari pengguna, misalnya klik tombol atau mengetik teks.

```html
<button onclick="alert('Tombol diklik!')">Klik Saya</button>
```

Atau gunakan `addEventListener`:

```javascript
document.getElementById("btn").addEventListener("click", function() {
  alert("Tombol diklik via addEventListener!");
});
```

---

### Lesson 8 — DOM Selection
DOM (Document Object Model) digunakan untuk mengambil elemen HTML.

```javascript
document.getElementById("judul");        // berdasarkan ID
document.getElementsByClassName("btn");  // berdasarkan class
document.getElementsByTagName("p");      // berdasarkan tag
document.querySelector("#judul");        // versi modern
document.querySelectorAll(".item");      // ambil semua elemen class .item
```

---

### Lesson 9 — DOM Manipulation
DOM Manipulation memungkinkan kita mengubah konten atau gaya elemen HTML.

#### Contoh:
```html
<p id="hasil">Hasil akan muncul di sini</p>
<button onclick="ubah()">Klik</button>
<script>
function ubah() {
  document.getElementById("hasil").innerText = "Konten telah diubah!";
}
</script>
```

💬 *Kita dapat juga mengubah style, class, atau atribut elemen.*

---

## ⚙️ Solution (Kalkulator Penjumlahan)
Implementasi kalkulator sederhana:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Kalkulator Penjumlahan</title>
  <script>
    function hitung() {
      let angka1 = parseFloat(document.getElementById("angka1").value);
      let angka2 = parseFloat(document.getElementById("angka2").value);
      let hasil = angka1 + angka2;
      document.getElementById("hasil").innerText = "Hasil: " + hasil;
    }
  </script>
</head>
<body>
  <h3>Kalkulator Penjumlahan</h3>
  <input type="number" id="angka1" placeholder="Angka 1">
  <input type="number" id="angka2" placeholder="Angka 2">
  <button onclick="hitung()">+</button>
  <p id="hasil"></p>
</body>
</html>
```

---

## 🧩 Exercise
1. Tambahkan operasi:
   - Pengurangan (−)
   - Perkalian (×)
   - Pembagian (÷)
   - Perpangkatan (^)
   - Akar (√)
2. Tambahkan **CSS styling** agar kalkulator lebih menarik.
3. Gunakan **function terpisah** untuk tiap operasi.
4. Validasi input agar hanya menerima angka.

---

## 🧠 Pertanyaan Post-Lab
1. Bagaimana cara menambahkan JavaScript ke halaman web?
2. Apa perbedaan `var`, `let`, dan `const`?
3. Jelaskan perbedaan antara `innerHTML`, `innerText`, dan `textContent`.
4. Apa perbedaan antara `onclick` dan `addEventListener`?
5. Mengapa `parseFloat()` dibutuhkan dalam kalkulator?

---

## 🧾 Kesimpulan
Setelah menyelesaikan praktikum ini, mahasiswa mampu:
- Menulis dan mengeksekusi **JavaScript dasar** dengan benar.
- Menggunakan variabel, operator, dan percabangan secara efisien.
- Menerapkan event handling dan DOM manipulation untuk membuat aplikasi interaktif.
- Membangun aplikasi kalkulator berbasis web yang berfungsi penuh.

---

📘 *Disusun sebagai panduan praktikum oleh Irwan Syahputra S.Kom., M.Kom. ( 2025 ).*
