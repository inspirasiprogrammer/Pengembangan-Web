// Menunggu sampai seluruh konten HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function() {

    // Menambahkan 'event listener' ke tombol. Ini adalah cara modern pengganti 'onclick' di HTML.
    // Kode di dalamnya akan berjalan ketika tombol dengan id 'tombolTambah' diklik.
    document.getElementById('tombolTambah').addEventListener('click', function() {
        
        // 1. Ambil nilai dari input 'angka1' dan 'angka2'
        // Gunakan parseFloat untuk mengubah teks (string) menjadi angka (bisa desimal)
        // '|| 0' digunakan untuk memberi nilai default 0 jika input kosong
        const num1 = parseFloat(document.getElementById('angka1').value) || 0;
        const num2 = parseFloat(document.getElementById('angka2').value) || 0;

        // 2. Lakukan operasi penjumlahan
        const hasilKalkulasi = num1 + num2;

        // 3. Tampilkan hasil ke dalam elemen span dengan id 'hasil'
        document.getElementById('hasil').textContent = hasilKalkulasi;
    });

});