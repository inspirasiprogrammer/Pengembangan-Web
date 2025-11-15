| Kriteria                      | Sangat Baik                                                                 | Baik                                                                 | Cukup                                                                 | Kurang                                                                 |
|-------------------------------|----------------------------------------------------------------------------|----------------------------------------------------------------------|-----------------------------------------------------------------------|------------------------------------------------------------------------|
| Fungsionalitas Backend (25%)  | Semua rute API (GET & POST) berjalan sesuai spesifikasi, validasi dasar diterapkan, respons JSON tepat. | Semua rute bekerja, namun ada kekurangan kecil pada format respons atau penanganan edge case. | Salah satu rute tidak berjalan atau keduanya mengalami masalah fungsional signifikan. | Sebagian besar atau seluruh rute gagal. Server atau database bermasalah. |
| Fungsionalitas Frontend (25%) | Halaman memuat dan menampilkan seluruh data dari API eksternal maupun lokal secara dinamis dan akurat. Submit form berjalan lancar. | Data tampil, tetapi ada gangguan minor pada tampilan atau update setelah submit. | Data API eksternal tampil, namun data lokal tidak tampil atau POST gagal. | Halaman gagal memuat/menampilkan data secara signifikan. Ada error JS fatal. |
| Integrasi Frontend–Backend (20%) | Fetch GET & POST berjalan mulus tanpa error, data diterima dan diproses dengan benar. | Komunikasi berjalan, tetapi kadang terjadi error koneksi atau tampilan data tidak konsisten. | Komunikasi hanya satu arah (contoh: GET berhasil, POST gagal). | Tidak ada komunikasi antara frontend dan backend. |
| Manipulasi DOM (15%)          | Elemen HTML dibuat dan dimodifikasi secara efisien, dinamis, dan sesuai struktur. | Elemen HTML berhasil dibuat, tetapi strukturnya kurang rapi atau terlalu banyak innerHTML. | Manipulasi DOM dilakukan tetapi strukturnya keliru atau tidak lengkap. | DOM gagal dimanipulasi; halaman kosong atau statis. |
| Kualitas Kode (15%)           | Kode bersih, mudah dibaca, penamaan jelas, penggunaan async/await tepat. | Kode berfungsi tetapi kurang rapi atau penamaan tidak konsisten. | Kode berantakan, banyak duplikasi, sulit diikuti. | Kode tidak terstruktur dan membingungkan. |

### Tabel Nilai Evaluasi

| Kriteria                      | Nilai      | Catatan                                                                 |
|-------------------------------|------------|------------------------------------------------------------------------|
| Fungsionalitas Backend        | Sangat Baik| Semua rute API berjalan sesuai spesifikasi, validasi dasar sudah ada, respons JSON tepat. |
| Fungsionalitas Frontend       | Sangat Baik| Data dari API eksternal dan lokal tampil dinamis, submit form lancar.   |
| Integrasi Frontend–Backend    | Sangat Baik| Fetch GET & POST berjalan mulus, data diterima dan diproses benar.      |
| Manipulasi DOM                | Sangat Baik| Elemen HTML dibuat dan dimodifikasi dinamis, struktur rapi.             |
| Kualitas Kode                 | Sangat Baik| Kode bersih, penamaan jelas, async/await digunakan tepat.               |
| **Total Nilai**               | **100**    | Sangat Baik                                                            |
