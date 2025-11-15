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
    database: 'db_acara_tv'
});

conn.connect(err => {
    if (err) {
        console.error('Gagal terhubung ke database:', err.message);
        return;
    }
    console.log('Berhasil terhubung ke database MySQL.');
});

// === RUTE API ===

// GET /api/peringkat/:show_id -> Mengambil dan menghitung rata-rata peringkat
app.get('/api/peringkat/:show_id', (req, res) => {
    const showId = req.params.show_id; // Mengambil show_id dari parameter URL
    const sql = "SELECT AVG(nilai_peringkat) AS average_rating FROM peringkat WHERE show_id = ?";

    conn.query(sql, [showId], (err, results) => {
        if (err) {
            console.error("Error fetching data:", err);
            return res.status(500).json({ error: err.message });
        }
        // Jika belum ada peringkat, hasilnya bisa null. Kita ubah jadi 0.
        const average = results[0].average_rating || 0;
        res.json({ average_rating: parseFloat(average).toFixed(1) }); // Kirimkan hasilnya sebagai JSON
    });
});

// POST /api/peringkat -> Menambahkan peringkat baru
app.post('/api/peringkat', (req, res) => {
    const { show_id, nilai_peringkat } = req.body; // Ambil data dari body permintaan
    const sql = "INSERT INTO peringkat (show_id, nilai_peringkat) VALUES (?, ?)";

    conn.query(sql, [show_id, nilai_peringkat], (err, result) => {
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Peringkat berhasil ditambahkan!' });
    });
});

// Menjalankan Server
app.listen(port, hostname, () => {
    console.log(`Server berjalan di http://${hostname}:${port}`);
});