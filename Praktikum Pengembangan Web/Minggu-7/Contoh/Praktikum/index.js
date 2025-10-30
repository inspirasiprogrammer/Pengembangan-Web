// index.js

// 1. Impor dependency yang dibutuhkan
const express = require('express');
const mysql = require('mysql2');
const path = require('path');

// 2. Inisialisasi aplikasi Express
const app = express();
const PORT = 3000;

// 3. Konfigurasi Middleware
// Untuk menyajikan file statis (HTML, CSS, JS) dari folder 'public'
app.use(express.static(path.join(__dirname, 'public')));
// Untuk membaca data JSON dari body request
app.use(express.json());

// 4. Konfigurasi Koneksi Database
const db = mysql.createConnection({
  host: 'localhost',      // Ganti jika perlu
  user: 'root',           // Ganti dengan username MySQL Anda
  password: '',           // Ganti dengan password MySQL Anda
  database: 'db_blog'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database db_blog.');
});

// 5. Pembuatan Rute API

// Rute GET untuk mengambil tanggapan berdasarkan post_id
app.get('/api/tanggapan/:post_id', (req, res) => {
  const postId = req.params.post_id;
  const query = 'SELECT * FROM tanggapan WHERE post_id = ? ORDER BY id DESC';

  db.query(query, [postId], (err, results) => {
    if (err) {
      console.error('Error fetching tanggapan:', err);
      return res.status(500).json({ message: 'Server error' });
    }
    res.json(results);
  });
});

// Rute POST untuk menyimpan tanggapan baru
app.post('/api/tanggapan', (req, res) => {
  const { post_id, isi_tanggapan } = req.body;

  if (!post_id || !isi_tanggapan) {
    return res.status(400).json({ message: 'Data tidak lengkap' });
  }

  const query = 'INSERT INTO tanggapan (post_id, isi_tanggapan) VALUES (?, ?)';
  db.query(query, [post_id, isi_tanggapan], (err, result) => {
    if (err) {
      console.error('Error saving tanggapan:', err);
      return res.status(500).json({ message: 'Server error' });
    }
    res.status(201).json({ message: 'Tanggapan berhasil disimpan!' });
  });
});

// 6. Jalankan Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});