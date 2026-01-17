# 🧪 Hand-on Lab: Backend Development with JavaScript  
_Modul 1 – Universitas Satya Terra Bhinneka_

---

## 🎯 Tujuan Pembelajaran
Setelah menyelesaikan praktikum ini, mahasiswa diharapkan mampu:
- Memahami perbedaan antara pemrograman front-end dan back-end.  
- Menggunakan JavaScript untuk membangun aplikasi sisi server.  
- Mengimplementasikan dasar pemrograman JavaScript seperti variabel, operator, percabangan, fungsi, dan DOM.  
- Membuat aplikasi web sederhana berupa kalkulator interaktif dengan HTML, CSS, dan JavaScript.  

---

## 🧰 Tools dan Lingkungan Praktikum
| Tools | Keterangan |
|-------|-------------|
| 🧑‍💻 **VS Code / Sublime Text** | Editor kode utama |
| 🌐 **Browser (Chrome / Edge / Firefox)** | Untuk menjalankan hasil web |
| ⚙️ **Live Server Extension (Opsional)** | Menjalankan file HTML secara langsung |
| 🗂️ **Folder Project** | Tempat menyimpan file HTML, CSS, dan JS |

---

## 📁 Struktur Folder Project
```
📂 Kalkulator-JS
├── index.html          # File utama halaman web
├── style.css           # Desain tampilan kalkulator
└── script.js           # Logika dan fungsi kalkulator
```

---

## 🚀 Langkah-Langkah Praktikum

### 🧩 Step 1 – Membuat File dan Struktur Dasar HTML
1. Buat folder `Kalkulator-JS`.  
2. Di dalamnya, buat file `index.html`.  
3. Tuliskan struktur dasar HTML berikut:
   ```html
   <!DOCTYPE html>
   <html lang="id">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Kalkulator Sederhana</title>
       <link rel="stylesheet" href="style.css">
   </head>
   <body>
       <h2>Kalkulator Penjumlahan</h2>
       <input id="angka1" type="number" placeholder="Angka pertama">
       <input id="angka2" type="number" placeholder="Angka kedua">
       <button onclick="penjumlahan()">+</button>
       <p>Hasil: <span id="hasil"></span></p>
       <script src="script.js"></script>
   </body>
   </html>
   ```

💡 **Catatan Teori:**  
- Tag `<script>` digunakan untuk menautkan atau menulis JavaScript.  
- Biasakan meletakkan `<script>` di akhir `<body>` agar halaman dimuat lebih cepat.  

---

### ⚙️ Step 2 – Membuat Logika JavaScript
1. Buat file baru `script.js`.  
2. Tambahkan fungsi berikut:
   ```javascript
   function penjumlahan() {
       const a = parseFloat(document.getElementById('angka1').value);
       const b = parseFloat(document.getElementById('angka2').value);
       const hasil = a + b;
       document.getElementById('hasil').textContent = hasil;
   }
   ```

💡 **Penjelasan:**  
- `document.getElementById()` digunakan untuk mengambil elemen HTML.  
- `parseFloat()` mengubah input dari string menjadi angka.  
- `.textContent` menampilkan hasil ke halaman web.  

---

### 🎨 Step 3 – Mendesain Tampilan dengan CSS
1. Buat file `style.css`.  
2. Tambahkan kode berikut:
   ```css
   body {
       font-family: Arial, sans-serif;
       background: #f4f4f9;
       text-align: center;
       margin-top: 50px;
   }
   input, button {
       padding: 10px;
       margin: 5px;
       border-radius: 5px;
       border: 1px solid #ccc;
   }
   button {
       background-color: #007bff;
       color: white;
       cursor: pointer;
   }
   button:hover {
       background-color: #0056b3;
   }
   ```
💡 **Catatan:** CSS membantu mempercantik tampilan, membuat antarmuka lebih profesional dan menarik.

---

### 🧮 Step 4 – Menambahkan Operasi Lain (Exercise)
Modifikasi kalkulator agar mendukung operasi lain.

#### Task 1:
Tambahkan operasi berikut di file `index.html`:
```html
<button onclick="pengurangan()">-</button>
<button onclick="perkalian()">*</button>
<button onclick="pembagian()">/</button>
<button onclick="pangkat()">^</button>
<button onclick="akar()">√</button>
```

Tambahkan fungsi di `script.js`:
```javascript
function pengurangan() {
    const a = parseFloat(document.getElementById('angka1').value);
    const b = parseFloat(document.getElementById('angka2').value);
    document.getElementById('hasil').textContent = a - b;
}

function perkalian() {
    const a = parseFloat(document.getElementById('angka1').value);
    const b = parseFloat(document.getElementById('angka2').value);
    document.getElementById('hasil').textContent = a * b;
}

function pembagian() {
    const a = parseFloat(document.getElementById('angka1').value);
    const b = parseFloat(document.getElementById('angka2').value);
    document.getElementById('hasil').textContent = b !== 0 ? a / b : "Tidak bisa dibagi 0!";
}

function pangkat() {
    const a = parseFloat(document.getElementById('angka1').value);
    const b = parseFloat(document.getElementById('angka2').value);
    document.getElementById('hasil').textContent = Math.pow(a, b);
}

function akar() {
    const a = parseFloat(document.getElementById('angka1').value);
    document.getElementById('hasil').textContent = Math.sqrt(a);
}
```

💡 **Penjelasan Tambahan:**  
- `Math.pow(a,b)` menghitung a pangkat b.  
- `Math.sqrt(a)` menghitung akar kuadrat dari a.  

---

### 🧠 Step 5 – Uji Coba & Debugging
1. Jalankan `index.html` di browser.  
2. Masukkan dua angka dan uji semua tombol operasi.  
3. Jika hasil tidak muncul, cek:
   - Apakah nama fungsi sama dengan atribut `onclick`?
   - Apakah file `script.js` sudah ditautkan dengan benar?
   - Gunakan **Inspect → Console** di browser untuk melihat pesan error.

---

## 📋 Ringkasan Praktikum
Setelah menyelesaikan lab ini, mahasiswa telah:
- Memahami konsep dasar JavaScript: variabel, operator, fungsi, dan event.  
- Dapat membuat aplikasi kalkulator sederhana.  
- Mempraktikkan penerapan DOM Selection dan Manipulation.  
- Meningkatkan tampilan web menggunakan CSS.  

---

## 🧩 Post Lab Questions
1. Bagaimana cara menambahkan JavaScript ke halaman HTML?  
2. Apa perbedaan antara DOM Selection dan DOM Manipulation?  
3. Mengapa kita perlu melakukan konversi tipe data dengan `parseFloat()`?  
4. Bagaimana cara menangani error pembagian dengan nol pada JavaScript?  

---

📘 *Disusun sebagai panduan praktikum oleh Irwan Syahputra S.Kom., M.Kom. ( 2025 ).*
