// Contoh Lengkap Penggunaan Objek String

let teks = "Belajar JavaScript di Medan";
console.log(`Teks Asli: "${teks}"`);
console.log("------------------------------------------");

// 1. anchor(): Membuat link HTML (tag <a>). Metode ini sudah usang.
let teksLink = teks.anchor("link-tujuan");
console.log(`1. anchor("link-tujuan"): ${teksLink}`);
// Output: <a name="link-tujuan">Belajar JavaScript di Medan</a>

// 2. big(): Membuat teks menjadi besar (tag <big>). Metode ini sudah usang.
let teksBesar = teks.big();
console.log(`2. big(): ${teksBesar}`);
// Output: <big>Belajar JavaScript di Medan</big>

// 3. charAt(index): Mengambil karakter pada posisi (indeks) tertentu.
let karakter = teks.charAt(8); // Karakter ke-8 (indeks dimulai dari 0)
console.log(`3. charAt(8): "${karakter}"`); // Output: "J"

// 4. charCodeAt(index): Mengambil nilai Unicode dari karakter di posisi tertentu.
let kodeUnicode = teks.charCodeAt(8);
console.log(`4. charCodeAt(8): ${kodeUnicode}`); // Output: 74 (kode Unicode untuk 'J')

// 5. concat(): Menggabungkan beberapa string.
let teksGabungan = teks.concat(" itu", " menyenangkan!");
console.log(`5. concat(): "${teksGabungan}"`);
// Output: "Belajar JavaScript di Medan itu menyenangkan!"

// 6. indexOf(searchText): Mencari posisi pertama dari sebuah teks (dari kiri).
let posisiAwal = teks.indexOf("Java");
console.log(`6. indexOf("Java"): ${posisiAwal}`); // Output: 8

// 7. lastIndexOf(searchText): Mencari posisi terakhir dari sebuah teks (dari kanan).
let posisiAkhir = "belajar dan terus belajar".lastIndexOf("belajar");
console.log(`7. lastIndexOf("belajar"): ${posisiAkhir}`); // Output: 19

// 8. match(expr): Mencocokkan string dengan ekspresi reguler (RegExp).
let hasilCocok = teks.match(/a/g); // Mencari semua huruf 'a'
console.log(`8. match(/a/g): ${hasilCocok}`); // Output: a,a,a,a

// 9. replace(expr, new-string): Mengganti teks yang cocok dengan teks baru.
let teksBaru = teks.replace("Medan", "Rumah");
console.log(`9. replace("Medan", "Rumah"): "${teksBaru}"`);
// Output: "Belajar JavaScript di Rumah"

// 10. search(expr): Mencari teks/RegExp dan mengembalikan posisinya. Mirip indexOf.
let posisiCari = teks.search("Script");
console.log(`10. search("Script"): ${posisiCari}`); // Output: 12

// 11. slice(start, end): Mengekstrak bagian string dari indeks 'start' sampai sebelum 'end'.
let potongan = teks.slice(8, 18);
console.log(`11. slice(8, 18): "${potongan}"`); // Output: "JavaScript"

// 12. split(delimiter): Memecah string menjadi array berdasarkan pemisah.
let arrayKata = teks.split(" ");
console.log(`12. split(" "):`, arrayKata);
// Output: ["Belajar", "JavaScript", "di", "Medan"]

// 13. substr(start, length): Mengekstrak string dari 'start' sepanjang 'length'.
let subString = teks.substr(8, 10); // Mulai dari indeks 8, ambil 10 karakter
console.log(`13. substr(8, 10): "${subString}"`); // Output: "JavaScript"

// 14. toUpperCase(): Mengubah semua karakter menjadi huruf besar.
let hurufBesar = teks.toUpperCase();
console.log(`14. toUpperCase(): "${hurufBesar}"`);
// Output: "BELAJAR JAVASCRIPT DI MEDAN"

// 15. toLowerCase(): Mengubah semua karakter menjadi huruf kecil.
let hurufKecil = teks.toLowerCase();
console.log(`15. toLowerCase(): "${hurufKecil}"`);
// Output: "belajar javascript di medan"

console.log("------------------------------------------");