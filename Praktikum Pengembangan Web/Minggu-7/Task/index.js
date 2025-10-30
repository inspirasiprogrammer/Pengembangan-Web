// Import modul yang diperlukan
import mysql from "mysql2";
import express from "express";

const app = express();
const hostname = "127.0.0.1";
const port = 3000;

// --- Petunjuk untuk Exercise 1 ---
// Menggunakan folder 'public' untuk file statis (HTML, CSS, JS)
app.use(express.static('public')); 

// Buat koneksi ke database MySQL
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_toko"
});

// Hubungkan ke database
conn.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
    } else {
        console.log('Connected to the MySQL database.');
    }
});

app.get("/db/customers", (req, res) => {
    let sql = "SELECT * FROM customers";
    conn.query(sql, (err, result) => {
        if (err) {
            console.error("Error fetching data", err);
        } else {
            res.json(result);
        }
    });
});

app.get("/db/customers/:id", (req, res) => {
    const id = req.params.id;

    // Gunakan parameterized query (?) untuk keamanan.
    let sql = "SELECT * FROM customers WHERE cust_id = ?";
    
    conn.query(sql, [id], (err, result) => {
        if(err) {
            console.error("Error fetching data", err);
        } else {
            res.json(result[0]);
        }
    });
});

// Jalankan server
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});