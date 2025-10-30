import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.static("public"));

app.get("/about", (req, res) => {
	res.sendFile(__dirname + "/public/about.html");
});

app.get("/home", (req, res) => {
	res.sendFile(__dirname + "/public/index.html");
});

app.get("/mahasiswa/:nim", (req, res) => {
	const nim = req.params.nim;
	res.send(`Ini routing GET /mahasiswa/${nim} dengan NIM : ${nim}`);
});

app.post("/mahasiswa", (req, res) => {
	res.send("Ini routing POST /mahasiswa untuk menambahkan mahasiswa baru");
});

app.put("/mahasiswa/:nim", (req, res) => {
	const nim = req.params.nim;
	res.send(`Ini routing PUT /mahasiswa/${nim} untuk memperbaharui data mahasiswa dengan NIM : ${nim}`);
});

app.delete("/mahasiswa/:nim", (req, res) => {
	const nim = req.params.nim;
	res.send(`Ini routing DELETE /mahasiswa/${nim} untuk menghapus data mahasiswa dengan NIM : ${nim}`);
});

const hostname = "127.0.0.1";
const port = 3000;

app.listen(port, hostname, () => {
	console.log(`Server running at ${hostname}:${port}`);
});
