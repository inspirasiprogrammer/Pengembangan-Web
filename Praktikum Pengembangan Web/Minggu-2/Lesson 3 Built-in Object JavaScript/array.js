// Contoh Lengkap Penggunaan Objek Array

let buah = ["Jeruk", "Apel", "Mangga"];
console.log(`Array Asli: [${buah}]`);
console.log("------------------------------------------");

// 1. reverse(): Membalik urutan elemen array.
// Metode ini mengubah array aslinya.
buah.reverse();
console.log(`1. reverse(): [${buah}]`);
// Output: [Mangga,Apel,Jeruk]

// 2. concat(): Menggabungkan dua atau lebih array.
// Metode ini TIDAK mengubah array asli, tapi menghasilkan array baru.
let buahLain = ["Anggur", "Pisang"];
let semuaBuah = buah.concat(buahLain);
console.log(`2. concat([${buahLain}]): [${semuaBuah}]`);
// Output: [Mangga,Apel,Jeruk,Anggur,Pisang]

// 3. sort(): Mengurutkan elemen array (sesuai abjad untuk string).
// Metode ini mengubah array aslinya.
semuaBuah.sort();
console.log(`3. sort(): [${semuaBuah}]`);
// Output: [Anggur,Apel,Jeruk,Mangga,Pisang]

// 4. push(): Menambahkan satu atau lebih elemen di AKHIR array.
// Metode ini mengubah array aslinya.
semuaBuah.push("Leci");
console.log(`4. push("Leci"): [${semuaBuah}]`);
// Output: [Anggur,Apel,Jeruk,Mangga,Pisang,Leci]

// 5. pop(): Menghapus dan mengembalikan elemen TERAKHIR.
// Metode ini mengubah array aslinya.
let buahTerakhir = semuaBuah.pop();
console.log(`5. pop() menghapus: "${buahTerakhir}"`); // Output: "Leci"
console.log(`   Array sekarang: [${semuaBuah}]`);
// Output: [Anggur,Apel,Jeruk,Mangga,Pisang]

// 6. shift(): Menghapus dan mengembalikan elemen PERTAMA.
// Metode ini mengubah array aslinya.
let buahPertama = semuaBuah.shift();
console.log(`6. shift() menghapus: "${buahPertama}"`); // Output: "Anggur"
console.log(`   Array sekarang: [${semuaBuah}]`);
// Output: [Apel,Jeruk,Mangga,Pisang]

// 7. unshift(): Menambahkan satu atau lebih elemen di AWAL array.
// Metode ini mengubah array aslinya.
semuaBuah.unshift("Durian");
console.log(`7. unshift("Durian"): [${semuaBuah}]`);
// Output: [Durian,Apel,Jeruk,Mangga,Pisang]

// 8. join(): Menggabungkan semua elemen array menjadi sebuah string,
// dipisahkan oleh separator (pemisah) yang ditentukan.
let kalimatBuah = semuaBuah.join(", ");
console.log(`8. join(", "): "${kalimatBuah}"`);
// Output: "Durian, Apel, Jeruk, Mangga, Pisang"

// 9. indexOf(): Mengembalikan indeks (posisi) pertama dari elemen yang dicari.
let posisiMangga = semuaBuah.indexOf("Mangga");
console.log(`9. indexOf("Mangga"): ${posisiMangga}`); // Output: 3

// 10. lastIndexOf(): Mengembalikan indeks terakhir dari elemen yang dicari.
// Kita tambahkan "Apel" lagi untuk melihat perbedaannya.
semuaBuah.push("Apel");
console.log(`   Array sekarang: [${semuaBuah}]`);
// Output: [Durian,Apel,Jeruk,Mangga,Pisang,Apel]
let posisiApelTerakhir = semuaBuah.lastIndexOf("Apel");
console.log(`10. lastIndexOf("Apel"): ${posisiApelTerakhir}`); // Output: 5

// 11. slice(startIndex, endIndex): Mengambil elemen dari 'startIndex' hingga sebelum 'endIndex'.
// Metode ini TIDAK mengubah array asli, tapi menghasilkan array baru.
let buahPilihan = semuaBuah.slice(1, 4); // Ambil elemen dari indeks 1 sampai sebelum 4
console.log(`11. slice(1, 4): [${buahPilihan}]`);
// Output: [Apel,Jeruk,Mangga]

console.log("------------------------------------------");
console.log(`Array Final: [${semuaBuah}]`);