import express from "express";
import Items from "./models/items.js";
import Users from "./models/users.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

const app = express();
const hostname = "127.0.0.1";
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/login", (req, res) => {
    res.render("login", { msg: "" });
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    Users.findOne({ where: { username: username, password: password } })
        .then(result => {
            if (result) {
                const token = jwt.sign({ username: username }, JWT_SECRET, { expiresIn: "1h" });
                res.cookie("token", token, { httpOnly: true });
                res.redirect("/");
            } else {
                res.render("login", { msg: "Username atau Password Salah" });
            }
        })
        .catch(err => {
            res.render("login", { msg: err });
        })
});

app.get("/logout", (req, res) => {
    res.clearCookie("token", { httpOnly: true });
    res.redirect("/");
});

const authToken = (req, res, next) => {
    const token = req.cookies?.token;
    if (!token) {
        return res.redirect("/login");
    }
    try {
        const decode = jwt.verify(token, JWT_SECRET);
        req.user = decode;
        next();
    } catch (err) {
        res.clearCookie("token", { httpOnly: true });
        return res.redirect("/login");
    }
};


app.get("/", (req, res) => {
    let hasil;
    let user = null;
    const token = req.cookies?.token;
    if (token) {
        try {
            user = jwt.verify(token, JWT_SECRET);
        } catch (err) {
            user = null;
        }
    }
    Items.findAll()
        .then(result => {
            hasil = { "status": 200, "error": null, "response": result };
            res.render("index", { barang: hasil.response, user: user });
        })
        .catch(err => {
            hasil = { "status": 500, "error": err, "response": null };
            res.render("index", { barang: hasil.response, user: user });
        })
});

app.get("/tambah", authToken, (req, res) => {
    res.render("addData");
});

app.get("/edit/:id", authToken, (req, res) => {
    const id = req.params.id;
    Items.findOne({ where: { id: id } })
        .then(result => {
            if (result != null) {
                res.render("editData", { barang: result });
            } else {
                res.redirect("/");
            }
        })
        .catch(err => {
            res.redirect("/");
        })
});

// Proteksi aksi tambah, edit, hapus item
app.post("/api/items", authToken, (req, res) => {
    const { name, qty_stock, price } = req.body;
    Items.create({ name, qty_stock, price })
        .then(result => {
            res.send(JSON.stringify({ "status": 200, "error": null, "response": result }));
        })
        .catch(err => {
            res.send(JSON.stringify({ "status": 500, "error": err, "response": null }));
        })
});

app.put("/api/items/:id", authToken, (req, res) => {
    const { name, qty_stock, price } = req.body;
    const id = req.params.id;
    Items.update({ name, qty_stock, price }, { where: { id: id } })
        .then(result => {
            res.send(JSON.stringify({ "status": 200, "error": null, "response": result }));
        })
        .catch(err => {
            res.send(JSON.stringify({ "status": 500, "error": err, "response": null }));
        })
});

app.delete("/api/items/:id", authToken, (req, res) => {
    const id = req.params.id;
    Items.destroy({ where: { id: id } })
        .then(result => {
            res.send(JSON.stringify({ "status": 200, "error": null, "response": result }));
        })
        .catch(err => {
            res.send(JSON.stringify({ "status": 500, "error": err, "response": null }));
        })
});

app.listen(port, hostname, () => {
    console.log(`Server running at ${hostname}:${port}`);
});
