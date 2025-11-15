// index.js

import express from 'express';
import mysql from 'mysql2';

const app = express();
const port = 3000;
const hostname = '127.0.0.1';

// Middleware
app.use(express.static('public')); // Menyajikan file dari folder 'public'
app.use(express.json()); // Mem-parsing body request sebagai JSON

// Koneksi Database MySQL
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Sesuaikan jika database Anda memiliki password
    database: 'db_galeri'
});

conn.connect(err => {
    if (err) {
        console.error('Gagal terhubung ke database:', err.message);
        return;
    }
    console.log('Berhasil terhubung ke database MySQL.');
});

// === RUTE API ===

// GET /api/komentar/:photo_id -> Mengambil semua komentar untuk sebuah foto
app.get('/api/komentar/:photo_id', (req, res) => {
    const photoId = req.params.photo_id; // Mengambil photo_id dari parameter URL
    const sql = "SELECT * FROM komentar WHERE photo_id = ?";

    conn.query(sql, [photoId], (err, results) => {
        if (err) {
            console.error("Error fetching data:", err);
            return res.status(500).json({ error: err.message });
        }
        res.json(results); // Kirimkan hasilnya sebagai JSON
    });
});

// POST /api/komentar -> Menambahkan komentar baru
app.post('/api/komentar', (req, res) => {
    const { photo_id, isi_komentar } = req.body; // Ambil data dari body permintaan
    const sql = "INSERT INTO komentar (photo_id, isi_komentar) VALUES (?, ?)";

    conn.query(sql, [photo_id, isi_komentar], (err, result) => {
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Komentar berhasil ditambahkan!', id: result.insertId });
    });
});

// Menjalankan Server
app.listen(port, hostname, () => {
    console.log(`Server berjalan di http://${hostname}:${port}`);
});