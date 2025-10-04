# Panduan Menjalankan Website AJAX dengan Live Preview (VS Code)

Aplikasi ini memuat data user dari API eksternal menggunakan AJAX. Untuk menghindari error CORS dan memudahkan pengembangan, gunakan extension **Live Preview** di Visual Studio Code.

---

## 1. Penjelasan File `index.html`

- **Desain**: Terdiri dari header, navigasi, konten utama, dan script JavaScript.
- **Navigasi**: Dua menu: Home dan User.
- **Home**: Menampilkan konten utama.
- **User**: Mengambil data dari API eksternal (`https://jsonplaceholder.typicode.com/users`) menggunakan AJAX (XMLHttpRequest) dan menampilkannya dalam tabel.
- **Script**:
  - `viewHome()`: Mengembalikan tampilan ke halaman Home.
  - `viewUser()`: Mengambil data user dari API dan menampilkan ke tabel.
  - AJAX digunakan agar data bisa di-load tanpa reload halaman.

---

## 2. Cara Install Extension Live Preview di VS Code

### Langkah 1: Buka Visual Studio Code

### Langkah 2: Buka Extensions
- Klik ikon Extensions di sidebar kiri (atau tekan `Ctrl+Shift+X`)

### Langkah 3: Cari "Live Preview"
- Ketik `Live Preview` di kolom pencarian
- Pilih extension dari Microsoft (logo biru)

### Langkah 4: Klik Install
- Klik tombol **Install** pada extension Live Preview

---

## 3. Cara Menjalankan Aplikasi dengan Live Preview

### Langkah 1: Buka Folder Project
- Buka folder `Minggu-3/Async` di VS Code

### Langkah 2: Buka File `index.html`
- Klik dua kali pada file `index.html` di sidebar

### Langkah 3: Jalankan Live Preview
- Klik kanan pada file `index.html` di editor
- Pilih **Show Preview** atau **Open with Live Preview**
- Atau klik ikon "Go Live" di kanan bawah VS Code

### Langkah 4: Akses di Browser
- Live Preview akan membuka tab baru di browser (biasanya di port 3000 atau 5500)
- Contoh: `http://localhost:3000/index.html` atau `http://localhost:5500/index.html`

### Langkah 5: Cek Fitur
- Klik menu **User** untuk memuat data dari API
- Data akan tampil dalam bentuk tabel tanpa error CORS

---

## 4. Troubleshooting
- Pastikan koneksi internet aktif (karena data diambil dari API eksternal)
- Jika data tidak muncul, refresh browser atau restart Live Preview
- Jika extension tidak ditemukan, pastikan VS Code sudah versi terbaru

---

## 5. Ringkasan
- **Live Preview** membuat server lokal otomatis sehingga AJAX ke API berjalan tanpa error CORS
- Tidak perlu install Python/Node.js jika menggunakan Live Preview
- Sangat cocok untuk development web statis dan pembelajaran AJAX

---

## 6. Referensi
- [Live Preview Extension (Microsoft)](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server)
- [Dokumentasi Visual Studio Code](https://code.visualstudio.com/docs/editor/extension-marketplace)

---

**Aplikasi ini dapat langsung dijalankan dan diuji fitur AJAX secara offline dengan Live Preview!**