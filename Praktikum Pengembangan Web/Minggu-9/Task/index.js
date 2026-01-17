const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_toko'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected.');
});

app.get('/', (req, res) => {
    res.send('Server berjalan.');
});

app.post('/api/suppliers', (req, res) => {
    const { name, address, phone } = req.body;
    const query = `INSERT INTO suppliers (name, address, phone) VALUES (?, ?, ?)`;
    db.query(query, [name, address, phone], (err, result) => {
        if (err) return res.status(500).json({ message: 'Gagal menambahkan supplier.' });
        res.json({ message: 'Supplier berhasil ditambahkan.', insertedId: result.insertId });
    });
});

app.get('/api/suppliers', (req, res) => {
    db.query("SELECT * FROM suppliers", (err, results) => {
        if (err) return res.status(500).json({ message: 'Gagal mengambil data suppliers.' });
        res.json(results);
    });
});

app.get('/api/suppliers/:id', (req, res) => {
    const id = req.params.id;
    db.query("SELECT * FROM suppliers WHERE id = ?", [id], (err, results) => {
        if (err) return res.status(500).json({ message: 'Gagal mengambil data supplier.' });
        if (results.length === 0) return res.status(404).json({ message: 'Supplier tidak ditemukan.' });
        res.json(results[0]);
    });
});

app.put('/api/suppliers/:id', (req, res) => {
    const id = req.params.id;
    const { name, address, phone } = req.body;
    const query = `UPDATE suppliers SET name=?, address=?, phone=? WHERE id=?`;
    db.query(query, [name, address, phone, id], (err, result) => {
        if (err) return res.status(500).json({ message: 'Gagal meng-update supplier.' });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Supplier tidak ditemukan.' });
        res.json({ message: 'Supplier berhasil di-update.' });
    });
});

app.delete('/api/suppliers/:id', (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM suppliers WHERE id=?", [id], (err, result) => {
        if (err) return res.status(500).json({ message: 'Gagal menghapus supplier.' });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Supplier tidak ditemukan.' });
        res.json({ message: 'Supplier berhasil dihapus.' });
    });
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});