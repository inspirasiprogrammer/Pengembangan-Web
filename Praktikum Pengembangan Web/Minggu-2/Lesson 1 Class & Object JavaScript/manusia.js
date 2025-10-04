class Manusia {
	constructor(nama, usia) {
		this.nama = nama;
		this.usia = usia;
	}
	sapa() {
		console.log(`Halo, nama saya ${this.nama} dan saya berusia ${this.usia} tahun.`);
	}
	ulangTahun() {
		this.usia++;
		console.log(`Selamat ulang tahun! Sekarang saya ${this.usia} tahun.`);
	}
}

// Membuat objek baru dari kelas Manusia
let orang = new Manusia("Budi", 25);
// Memanggil metode-metode pada objek
orang.sapa(); // Output: Halo, nama saya Budi dan saya berusia 25 tahun.
orang.ulangTahun(); // Output: Selamat ulang tahun! Sekarang saya 26 tahun.

// Jika Anda ingin menggunakan kelas ini di file lain, hapus komentar pada baris di bawah ini:
// module.exports = Manusia;
