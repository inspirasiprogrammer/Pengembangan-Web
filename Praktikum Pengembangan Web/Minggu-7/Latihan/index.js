import express from "express";
import mysql from "mysql2";

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_toko"
});

db.connect((err) => {
  if (err) {
    console.error("❌ Gagal terkoneksi ke database:", err);
    return;
  }
  console.log("✅ Terhubung ke database MySQL!");
});

app.get("/db/customers", (req, res) => {
  db.query("SELECT * FROM customers", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get("/db/customers/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM customers WHERE cust_id = ?", [id], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`🚀 Server berjalan di http://localhost:${port}`);
});