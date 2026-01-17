import express from "express";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());

const list_user = ["gaspar", "andre", "alwin", "vicky"];

const addLog = (req, res, next) => {
  if (req.params.username) {
    console.log(
      `Username : ${req.params.username} | ${new Date().toLocaleString()}`
    );
  }
  next();
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/tentang.html");
});

app.get("/:username", addLog, (req, res, next) => {
  const uname = req.params.username.toLowerCase();
  if (!list_user.includes(uname)) next("route");
  else next();
},
(req, res) => {
  res.sendFile(__dirname + "/public/user.html");
});

app.get("/:username", (req, res) => {
  res.sendFile(__dirname + "/public/sorry.html");
});

const validateProduct = (req, res, next) => {
  const { qty_stock, price } = req.body;

  if (isNaN(qty_stock) || qty_stock < 0)
    return res.status(400).json({ error: "qty_stock harus integer >= 0" });

  if (isNaN(price) || price < 1000)
    return res.status(400).json({ error: "price harus integer >= 1000" });

  next();
};

app.post("/product", validateProduct, (req, res) => {
  res.json({ message: "Data valid. Produk diterima." });
});

app.put("/product", validateProduct, (req, res) => {
  res.json({ message: "Update berhasil." });
});

app.patch("/product", validateProduct, (req, res) => {
  res.json({ message: "Patch berhasil." });
});

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});
