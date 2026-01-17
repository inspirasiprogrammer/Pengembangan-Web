import express from "express";
import mysql from "mysql2";
import bodyParser from "body-parser";

const app = express();
const port = 5000;
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud_toko2"
});

db.connect((err) => {
  if (err) throw err;
  console.log("✅ Terhubung ke database MySQL");
});

// CREATE
app.post("/api/items", (req, res) => {
  const { name, qty_stock, price } = req.body;
  db.query("INSERT INTO items (name, qty_stock, price) VALUES (?, ?, ?)", [name, qty_stock, price], (err, result) => {
    if (err) throw err;
    res.json({ message: "Item berhasil dimasukkan", id: result.insertId });
  });
});

// READ
app.get("/api/items", (req, res) => {
  db.query("SELECT * FROM items", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get("/api/items/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM items WHERE id = ?", [id], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// UPDATE
app.put("/api/items/:id", (req, res) => {
  const { id } = req.params;
  const { name, qty_stock, price } = req.body;
  db.query("UPDATE items SET name=?, qty_stock=?, price=? WHERE id=?", [name, qty_stock, price, id], (err) => {
    if (err) throw err;
    res.json({ message: "Item berhasil diupdate" });
  });
});

// DELETE
app.delete("/api/items/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM items WHERE id=?", [id], (err) => {
    if (err) throw err;
    res.json({ message: "Item berhasil dihapus" });
  });
});

app.listen(port, () => {
  console.log(`🚀 Server berjalan di http://localhost:${port}`);
});