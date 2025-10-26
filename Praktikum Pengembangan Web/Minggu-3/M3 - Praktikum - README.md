# 🧪 Hand-on Lab: Async Request (AJAX) & DOM Manipulation

## 🎯 Tujuan Pembelajaran
Setelah menyelesaikan praktikum ini, mahasiswa mampu:
- Memahami konsep **Asynchronous Programming** dalam JavaScript.
- Menjelaskan peran **AJAX** dalam pembaruan konten dinamis tanpa *reload* halaman.
- Membuat dan mengelola **AJAX request** menggunakan metode **GET** dan **POST**.
- Menangani respon JSON dan menampilkannya ke halaman web melalui **DOM Manipulation**.
- Mengimplementasikan fitur interaktif yang meningkatkan pengalaman pengguna (*user experience*).

---

## 🧰 Tools yang Digunakan
| Komponen | Deskripsi |
|-----------|------------|
| **Code Editor** | Visual Studio Code / Sublime Text / Notepad++ |
| **Browser** | Chrome / Firefox (Developer Tools aktif) |
| **Endpoint JSON** | `https://jsonplaceholder.typicode.com/users` |
| **File HTML & JS** | Struktur tampilan dan logika permintaan AJAX |
| **File CSS (opsional)** | Desain tabel dan tampilan web interaktif |

---

## 📂 Struktur Folder Proyek
```
async-ajax-lab/
│
├── index.html        # Struktur halaman utama
├── script.js         # Logika AJAX dan manipulasi DOM
└── style.css         # (Opsional) Styling tabel dan tombol
```

---

## 🧠 Pre-Lab
Sebelum mulai praktik, pastikan Anda dapat menjawab:
1. Bagaimana cara melakukan **Async Request** dengan JavaScript?
2. Bagaimana cara memuat data **JSON** menggunakan **AJAX**?
3. Apa manfaat AJAX dalam pengembangan web modern?

---

## 💡 Studi Kasus: Menampilkan Data User dari Backend
Gaspar mendapatkan proyek baru dari klien. Ia perlu menampilkan data **user** (berasal dari backend dalam format JSON) ke halaman web.

Data berisi informasi:
- ID
- Name
- Username
- Email
- City

Data JSON bisa diakses melalui endpoint:
> https://jsonplaceholder.typicode.com/users

**Tujuan:**
Tampilkan data tersebut dalam bentuk **tabel interaktif** menggunakan **AJAX** dan **DOM Manipulation**.

---

## 🧩 Identification (Analisis Masalah)
Permasalahan utama proyek ini:
1. Mengambil data secara **asynchronous** menggunakan **AJAX**.
2. Menampilkan data tersebut ke dalam **tabel HTML** melalui **DOM Manipulation**.
3. Mendesain tampilan tabel agar informatif dan menarik.

---

## 📘 Lessons (Langkah Pembelajaran)

### Lesson 1 — AJAX Request dengan `XMLHttpRequest`
AJAX (Asynchronous JavaScript and XML) memungkinkan kita mengambil data dari server tanpa me-*reload* halaman.

#### Struktur dasar:
```javascript
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText); // menampilkan hasil di console
  }
};

xhr.send();
```

💡 **Penjelasan:**
- `open()` menentukan **metode (GET/POST)** dan **URL tujuan**.
- `readyState` bernilai 4 jika request selesai.
- `status` 200 menunjukkan request berhasil.
- `responseText` berisi hasil dalam bentuk *string*.
- Gunakan `JSON.parse()` untuk mengubah *string JSON* menjadi *object JavaScript*.

```javascript
let data = JSON.parse(xhr.responseText);
console.log(data[0].name); // akses nama user pertama
```

---

### Lesson 2 — DOM Manipulation
DOM Manipulation memungkinkan kita menampilkan data ke halaman web tanpa me-*reload*.

Contoh dasar menambahkan elemen baru:
```javascript
let p = document.createElement("p");
p.innerText = "Belajar DOM";
document.body.appendChild(p);
```

Dalam kasus kita, manipulasi DOM digunakan untuk:
- Membuat tabel dari data JSON.
- Menambahkan baris (row) dan kolom (cell) secara dinamis.
- Menampilkan informasi pengguna ke halaman web.

---

## ⚙️ Solution (Implementasi)
Berikut implementasi lengkap untuk kasus menampilkan data user secara asinkron.

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Data User dengan AJAX</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Daftar Pengguna (AJAX Request)</h2>
  <table id="tabel-user">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>City</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>

  <script src="script.js"></script>
</body>
</html>
```

---

### `script.js`
```javascript
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const users = JSON.parse(xhr.responseText);
    tampilkanData(users);
  }
};

xhr.send();

function tampilkanData(users) {
  const tbody = document.querySelector("#tabel-user tbody");
  users.forEach(user => {
    const tr = document.createElement("tr");

    // Kolom ID
    const tdId = document.createElement("td");
    tdId.textContent = user.id;
    tdId.title = user.company.name; // tooltip nama perusahaan
    tdId.style.cursor = "pointer";

    // Klik ID membuka website perusahaan
    tdId.addEventListener("click", () => {
      const url = user.website.startsWith("http") ? user.website : `http://${user.website}`;
      window.open(url, "_blank");
    });

    // Kolom lainnya
    const tdName = document.createElement("td");
    tdName.textContent = user.name;

    const tdUser = document.createElement("td");
    tdUser.textContent = user.username;

    const tdEmail = document.createElement("td");
    tdEmail.textContent = user.email;

    const tdCity = document.createElement("td");
    tdCity.textContent = user.address.city;

    tr.append(tdId, tdName, tdUser, tdEmail, tdCity);
    tbody.appendChild(tr);
  });
}
```

---

### `style.css`
```css
body {
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #f9f9f9;
  padding: 40px;
}

table {
  border-collapse: collapse;
  width: 90%;
  margin: auto;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

th, td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #007bff;
  color: white;
}

tr:hover {
  background-color: #f1f1f1;
}

td {
  cursor: default;
}
```

---

## 🧩 Exercise (Tugas Mahasiswa)
### 🎯 *Objective:*
Mahasiswa mampu mengimplementasikan **AJAX + DOM Manipulation** dalam proyek dinamis berbasis web.

### 🧭 *Task 1:*
Tambahkan fitur berikut:
1. Saat **cursor diarahkan ke ID**, tampilkan *tooltip* berisi **Company Name**.
2. Saat **ID diklik**, arahkan ke halaman **website perusahaan** yang diperoleh dari data JSON.
3. Tambahkan desain CSS agar tabel tampil menarik dan profesional.
4. Gunakan *loading indicator* untuk menunjukkan proses pengambilan data.

---

## 📘 Unit Summary
Setelah praktikum ini, mahasiswa mampu:
- Melakukan **Async Request (AJAX)** dengan JavaScript.
- Mengambil dan memproses **data JSON** secara dinamis.
- Melakukan **DOM Manipulation** untuk menampilkan data ke halaman web.
- Menggunakan **event handler** (hover, click) untuk interaksi pengguna.
- Menerapkan desain antarmuka yang menarik menggunakan CSS.

---

## 🧠 Post-Lab Questions
1. Bagaimana cara melakukan **Async Request** menggunakan JavaScript?
2. Mengapa kita perlu melakukan **JSON parsing** setelah menerima respon dari AJAX?
3. Apa fungsi dari `readyState` dan `status` pada XMLHttpRequest?
4. Bagaimana cara menampilkan data JSON ke halaman web tanpa *reload*?
5. Mengapa AJAX dapat meningkatkan pengalaman pengguna (*UX*)?

---

📘 *Disusun sebagai panduan praktikum oleh Irwan Syahputra S.Kom., M.Kom. ( 2025 ).*
