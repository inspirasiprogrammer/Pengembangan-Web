import express from "express";
import Items from "./models/items.js";

const app = express();
const hostname = "127.0.0.1";
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
	let hasil;
	Items.findAll()
		.then(result => {
			hasil = {"status": 200, "error": null, "response": result};
			res.render("index", {barang: hasil.response});
		})
		.catch(err => {
			hasil = {"status": 500, "error": err, "response": null};
			res.render("index", {barang: hasil.response});
		})
});

app.get("/tambah", (req, res) => {
	res.render("addData");
});

app.get("/edit/:id", (req, res) => {
	let hasil;
	const id = req.params.id;
	Items.findOne({where: {id: id}})
		.then(result => {
			hasil = {"status": 200, "error": null, "response": result};
			if (result != null) {
				res.render("editData", {barang: hasil.response});
			} else {
				res.redirect("/");
			}
		})
		.catch(err => {
			res.redirect("/");
		})
});

app.post("/api/items", (req, res) => {
	const { name, qty_stock, price } = req.body;
	Items.create({name, qty_stock, price})
		.then(result => {
			res.send(JSON.stringify({"status": 200, "error": null, "response": result}));
		})
		.catch(err => {
			res.send(JSON.stringify({"status": 500, "error": err, "response": null}));
		})
});

app.put("/api/items/:id", (req, res) => {
	const { name, qty_stock, price } = req.body;
	const id = req.params.id;
	Items.update({name, qty_stock, price}, {where: {id: id}})
		.then(result => {
			res.send(JSON.stringify({"status": 200, "error": null, "response": result}));
		})
		.catch(err => {
			res.send(JSON.stringify({"status": 500, "error": err, "response": null}));
		})
});

app.delete("/api/items/:id", (req, res) => {
	const id = req.params.id;
	Items.destroy({where: {id: id}})
		.then(result => {
			res.send(JSON.stringify({"status": 200, "error": null, "response": result}));
		})
		.catch(err => {
			res.send(JSON.stringify({"status": 500, "error": err, "response": null}));
		})
});

app.listen(port, hostname, () => {
	console.log(`Server running at ${hostname}:${port}`);
});
