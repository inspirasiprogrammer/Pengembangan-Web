// Contoh Lengkap Penggunaan Objek Date

console.log("--- Bagian 1: Membuat Objek Date (Konstruktor) ---");

// 1. new Date(): Membuat objek dengan tanggal & waktu saat ini.
// Hasilnya akan sesuai dengan waktu di komputer Anda.
const tanggalSekarang = new Date();
console.log("1. new Date():", tanggalSekarang.toString());

// 2. new Date("Month, dd, yyyy hh:mm:ss"): Membuat dari string lengkap.
const tanggalDariString1 = new Date("September, 20, 2025 06:35:08");
console.log("2. new Date(string lengkap):", tanggalDariString1.toString());

// 3. new Date("Month dd, yyyy"): Membuat dari string tanggal saja.
const tanggalDariString2 = new Date("September 20, 2025");
console.log("3. new Date(string tanggal):", tanggalDariString2.toString());

// 4. new Date(yy, mm, dd, hh, mm, ss): Membuat dari komponen angka.
// Penting: Bulan dimulai dari 0 (Januari=0, September=8)
const tanggalDariAngka1 = new Date(2025, 8, 20, 6, 35, 8);
console.log("4. new Date(angka lengkap):", tanggalDariAngka1.toString());

// 5. new Date(yy, mm, dd): Membuat dari komponen angka tanggal saja.
const tanggalDariAngka2 = new Date(2025, 8, 20);
console.log("5. new Date(angka tanggal):", tanggalDariAngka2.toString());

// 6. new Date(milliseconds): Membuat dari milidetik sejak 1 Jan 1970.
// Contoh: 1 miliar detik setelah epoch time.
const tanggalDariMs = new Date(1000000000000); // 1 Triliun milidetik
console.log("6. new Date(milidetik):", tanggalDariMs.toString());

console.log("\n--- Bagian 2: Menggunakan Metode Get & Set ---");
// Kita akan menggunakan variabel 'tanggalSekarang' untuk demonstrasi

console.log("Waktu referensi:", tanggalSekarang.toString());

// 7. getFullYear(): Mengambil tahun (4 digit).
console.log(`7. getFullYear(): ${tanggalSekarang.getFullYear()}`); // Output: 2025

// 8. getMonth(): Mengambil bulan (indeks 0-11).
console.log(`8. getMonth(): ${tanggalSekarang.getMonth()}`); // Output: 8 (karena September)

// 9. getDate(): Mengambil tanggal dalam bulan (1-31).
console.log(`9. getDate(): ${tanggalSekarang.getDate()}`); // Output: 20

// 10. getDay(): Mengambil hari dalam seminggu (0=Minggu, 6=Sabtu).
console.log(`10. getDay(): ${tanggalSekarang.getDay()}`); // Output: 6 (karena Sabtu)

// 11. getHours(): Mengambil jam (0-23).
console.log(`11. getHours(): ${tanggalSekarang.getHours()}`); // Output: 6

// 12. getMinutes(): Mengambil menit (0-59).
console.log(`12. getMinutes(): ${tanggalSekarang.getMinutes()}`); // Output: 35

// 13. getSeconds(): Mengambil detik (0-59).
console.log(`13. getSeconds(): ${tanggalSekarang.getSeconds()}`); // Output: (detik saat kode dijalankan)

// 14. getMilliseconds(): Mengambil milidetik (0-999).
console.log(`14. getMilliseconds(): ${tanggalSekarang.getMilliseconds()}`); // Output: (milidetik saat kode dijalankan)

// 15. getTimezoneOffset(): Mengambil perbedaan antara waktu lokal (WIB) dan UTC/GMT dalam menit.
// WIB adalah GMT+7, jadi perbedaannya adalah -420 menit.
console.log(`15. getTimezoneOffset(): ${tanggalSekarang.getTimezoneOffset()}`); // Output: -420

// 16. setFullYear(): Mengatur tahun pada objek tanggal.
let tanggalUbah = new Date(tanggalSekarang); // Salin objek agar tidak mengubah aslinya
tanggalUbah.setFullYear(2030);
console.log(`16. setFullYear(2030): ${tanggalUbah.getFullYear()}`); // Output: 2030

// 17. setMonth(): Mengatur bulan pada objek tanggal.
tanggalUbah.setMonth(11); // Mengatur bulan menjadi 11 (Desember)
console.log(`17. setMonth(11): Bulan sekarang adalah ${tanggalUbah.getMonth()}`); // Output: 11
console.log("Tanggal setelah diubah:", tanggalUbah.toString());