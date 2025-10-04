# Lesson 2 - Atribut Object

File ini berisi contoh penggunaan atribut/properti pada object di JavaScript.

## Penjelasan Script

Script `atribut.js` mendemonstrasikan cara membuat, mengubah, menambah, dan menghapus atribut pada sebuah object:

### Penjelasan Baris Kode
- Membuat object `cat` dengan beberapa properti: `sound`, `color`, `species`, dan `numPaws`.
- Mengubah nilai properti `color` menjadi "Orange".
- Menambah properti baru `eyeColor` dengan nilai "Blue".
- Menampilkan nilai properti `color` ke konsol (hasil: "Orange").
- Menghapus properti `color` dari object menggunakan `delete cat.color`.
- Menampilkan kembali nilai properti `color` ke konsol (hasil: `undefined` karena sudah dihapus).

### Contoh Output
```javascript
console.log(cat.color) // Orange
// setelah dihapus
console.log(cat.color) // undefined
```

## Cara Menjalankan

1. Pastikan Node.js sudah terpasang di komputer Anda.
2. Buka terminal di folder ini.
3. Jalankan perintah berikut:
   ```powershell
   node atribut.js
   ```
4. Output akan muncul di terminal sesuai dengan perubahan dan penghapusan atribut pada object.

## Tujuan
- Memahami cara kerja atribut/properti pada object di JavaScript.
- Melihat contoh manipulasi atribut secara langsung.

---

Script ini cocok untuk memahami dasar object dan atribut di JavaScript.