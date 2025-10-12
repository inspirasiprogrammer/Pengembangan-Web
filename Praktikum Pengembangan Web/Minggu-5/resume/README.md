# Resume/CV Modern - index.html

## Deskripsi
Template CV/Resume modern berbasis HTML, CSS, dan JavaScript. Mudah dikustomisasi untuk kebutuhan personal maupun profesional.

## Struktur Utama
- **.sidebar**: Bagian kiri, berisi foto, kontak, keterampilan, bahasa, dan QR code.
- **.main-content**: Bagian kanan, berisi header, profil, pengalaman, pendidikan, sertifikasi, publikasi, dan pencapaian.

## Petunjuk Development
- Semua style ada di dalam tag `<style>` di file ini. Untuk kustomisasi warna, font, dan layout, ubah variabel CSS di `:root` atau bagian style terkait.
- Gambar profil: letakkan di `img/profile.jpeg`.
- Sertifikat: letakkan di `img/sertifikat/`.
- Untuk menambah/mengubah bagian CV, edit langsung section terkait di `<aside>` (sidebar) atau `<main>` (main-content).
- Tombol Download PDF menggunakan `window.print()` (fitur browser, bukan ekspor PDF server-side).
- QR Code otomatis menampilkan URL halaman saat ini (lihat bagian script di bawah).
- Preview sertifikat: klik nama sertifikat untuk menampilkan gambar modal. Gambar sertifikat harus ada di path yang sesuai.
- Animasi fade-in pada setiap section menggunakan IntersectionObserver (lihat script).
- Untuk menambah publikasi, pencapaian, atau bagian lain, duplikasi `<section>` terkait dan sesuaikan isinya.

## Penjelasan Script JavaScript
1. **Modal Preview Sertifikat**
    - Klik pada item sertifikat akan menampilkan gambar sertifikat dalam modal overlay.
    - Modal dapat ditutup dengan klik tombol X, klik di luar gambar, atau tekan Escape.
2. **Animasi Fade-in**
    - Setiap elemen dengan class `.fade-in-section` akan muncul dengan animasi saat discroll ke viewport.
3. **QR Code**
    - Menggunakan library qrcodejs untuk generate QR code yang berisi URL halaman saat ini.

## Modifikasi Lanjutan
- Untuk modifikasi lebih lanjut, baca komentar di setiap bagian script dan style di dalam file `index.html`.
- Template ini dapat digunakan secara offline, cukup pastikan semua gambar dan file dependensi tersedia secara lokal.

---

**Lisensi:** Bebas digunakan untuk keperluan pribadi/portofolio. Untuk penggunaan komersial, silakan modifikasi sesuai kebutuhan.