// Contoh Lengkap Penggunaan Objek Math

// Variabel yang akan digunakan untuk demonstrasi
let a = 9;
let b = 4;
let c = 5.7; // Angka desimal
let d = -10; // Angka negatif

console.log(`Variabel yang digunakan: a=${a}, b=${b}, c=${c}, d=${d}`);
console.log("------------------------------------------");

// 1. max(a, b): Mengembalikan nilai terbesar dari a dan b.
let terbesar = Math.max(a, b, c, 15); // Bisa membandingkan lebih dari 2 angka
console.log(`1. max(${a}, ${b}, ${c}, 15): ${terbesar}`); // Output: 15

// 2. min(a, b): Mengembalikan nilai terkecil dari a dan b.
let terkecil = Math.min(a, b, c, d, 2); // Bisa membandingkan lebih dari 2 angka
console.log(`2. min(${a}, ${b}, ${c}, ${d}, 2): ${terkecil}`); // Output: -10

// 3. round(a): Mengembalikan integer (bilangan bulat) terdekat.
let pembulatan = Math.round(c); // 5.7 dibulatkan ke integer terdekat
console.log(`3. round(${c}): ${pembulatan}`); // Output: 6

// 4. ceil(a): Membulatkan ke atas ke integer terkecil yang lebih besar atau sama dengan a.
let pembulatanAtas = Math.ceil(c); // 5.7 dibulatkan ke atas
console.log(`4. ceil(${c}): ${pembulatanAtas}`); // Output: 6

// 5. floor(a): Membulatkan ke bawah ke integer terbesar yang lebih kecil atau sama dengan a.
let pembulatanBawah = Math.floor(c); // 5.7 dibulatkan ke bawah
console.log(`5. floor(${c}): ${pembulatanBawah}`); // Output: 5

// 6. exp(a): Mengembalikan nilai e^a (Euler's number pangkat a).
let eksponen = Math.exp(1); // e pangkat 1
console.log(`6. exp(1): ${eksponen}`); // Output: 2.71828...

// 7. pow(a, b): Mengembalikan nilai a pangkat b.
let pangkat = Math.pow(a, 2); // 9 pangkat 2
console.log(`7. pow(${a}, 2): ${pangkat}`); // Output: 81

// 8. abs(a): Mengembalikan nilai absolut (nilai positif) dari a.
let absolut = Math.abs(d); // Nilai absolut dari -10
console.log(`8. abs(${d}): ${absolut}`); // Output: 10

// 9. random(): Mengembalikan angka acak (pseudo-random) antara 0 dan 1.
let acak = Math.random();
console.log(`9. random(): ${acak}`); // Output: Angka acak seperti 0.12345...

// 10. sqrt(a): Mengembalikan akar kuadrat dari a.
let akarKuadrat = Math.sqrt(a); // Akar kuadrat dari 9
console.log(`10. sqrt(${a}): ${akarKuadrat}`); // Output: 3

// 11. sin(a): Mengembalikan sinus dari a (a dalam radian).
// Untuk konversi derajat ke radian: derajat * (Math.PI / 180)
let sudutRadian = 90 * (Math.PI / 180); // Sinus 90 derajat
let sinus = Math.sin(sudutRadian);
console.log(`11. sin(90 derajat): ${sinus}`); // Output: 1

// 12. cos(a): Mengembalikan kosinus dari a (a dalam radian).
sudutRadian = 0 * (Math.PI / 180); // Kosinus 0 derajat
let kosinus = Math.cos(sudutRadian);
console.log(`12. cos(0 derajat): ${kosinus}`); // Output: 1

console.log("------------------------------------------");