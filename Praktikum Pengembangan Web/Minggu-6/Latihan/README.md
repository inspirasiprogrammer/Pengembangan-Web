# Latihan Minggu 6: Praktikum Pengembangan Web

![Node.js](https://img.shields.io/badge/Node.js-v18%2B-green)
![Express](https://img.shields.io/badge/Express-4.x-blue)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

## Deskripsi Proyek

Proyek ini merupakan latihan pada minggu ke-6 mata kuliah Pengembangan Web. Website ini dibangun menggunakan Node.js dan Express untuk mendemonstrasikan routing dasar, pengelolaan file statis, dan penggunaan RESTful API sederhana.

## Fitur

- Menyajikan halaman statis: Beranda dan Tentang Kami
- Routing dinamis untuk data mahasiswa (GET, POST, PUT, DELETE)
- Struktur folder terorganisir

## Struktur Folder

```
Minggu-6/
  Latihan/
    index.js           # Server Express utama
    package.json       # Konfigurasi npm
    public/
      index.html       # Halaman Beranda
      about.html       # Halaman Tentang Kami
      style.css        # Gaya CSS
```

## Instalasi

1. **Clone repository**
   ```bash
   git clone https://github.com/inspirasiprogrammer/Pengembangan-Web.git
   cd Praktikum Pengembangan Web/Minggu-6/Latihan
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Jalankan server**
   ```bash
   node index.js
   ```

## Contoh Penggunaan

### Mengakses Halaman Statis
- Beranda: [http://127.0.0.1:3000/home](http://127.0.0.1:3000/home)
- Tentang Kami: [http://127.0.0.1:3000/about](http://127.0.0.1:3000/about)

### API Mahasiswa
| Metode | Endpoint                  | Deskripsi                                 |
|--------|---------------------------|-------------------------------------------|
| GET    | `/mahasiswa/:nim`         | Mendapatkan data mahasiswa berdasarkan NIM|
| POST   | `/mahasiswa`              | Menambah data mahasiswa baru              |
| PUT    | `/mahasiswa/:nim`         | Memperbarui data mahasiswa berdasarkan NIM|
| DELETE | `/mahasiswa/:nim`         | Menghapus data mahasiswa berdasarkan NIM  |

#### Contoh Request
```bash
curl http://127.0.0.1:3000/mahasiswa/123456
curl -X POST http://127.0.0.1:3000/mahasiswa
curl -X PUT http://127.0.0.1:3000/mahasiswa/123456
curl -X DELETE http://127.0.0.1:3000/mahasiswa/123456
```
## Debugging & Maintenance

### Debugging
- Pastikan Node.js dan dependensi sudah terinstal dengan benar (`npm install`).
- Jalankan server menggunakan `node index.js` dan cek pesan error di terminal.
- Untuk debugging, gunakan console.log pada bagian kode yang ingin diperiksa.
- Jika terjadi error pada routing, cek path file dan parameter yang digunakan.
- Gunakan ekstensi seperti "Node.js Extension Pack" di VS Code untuk membantu debugging.

### Maintenance & Editing
- Untuk mengedit halaman statis, ubah file di folder `public/` (misal: `index.html`, `about.html`, `style.css`).
- Untuk menambah atau mengubah endpoint, edit file `index.js` sesuai kebutuhan routing.
- Setelah melakukan perubahan, restart server agar perubahan diterapkan.
- Lakukan pengecekan fungsionalitas setiap endpoint setelah pengeditan.
- Dokumentasikan setiap perubahan penting di README atau commit message.

## Kontribusi

Kontribusi sangat terbuka! Silakan lakukan fork, buat branch baru, dan ajukan pull request. Ikuti format commit yang jelas dan sertakan deskripsi perubahan.

1. Fork repository
2. Buat branch fitur: `git checkout -b fitur-baru`
3. Commit perubahan: `git commit -m "Menambah fitur ..."`
4. Push ke branch: `git push origin fitur-baru`
5. Buat Pull Request

## Lisensi

Proyek ini menggunakan lisensi MIT. Silakan gunakan dan modifikasi sesuai kebutuhan.


**Dibuat untuk keperluan pembelajaran pada Praktikum Pengembangan Web.**
