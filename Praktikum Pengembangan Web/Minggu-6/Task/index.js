import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import profileRoute from "./profileRoute.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();


app.use(express.static("public"));


// Routing tanpa parameter
app.get("/home", (req, res) => {
	res.sendFile(__dirname + "/public/index.html");
});

app.get("/about", (req, res) => {
	res.sendFile(__dirname + "/public/about.html");
});

app.get("/contact", (req, res) => {
	res.sendFile(__dirname + "/public/contact.html");
});

app.get("/services", (req, res) => {
	res.sendFile(__dirname + "/public/services.html");
});

app.get("/gallery", (req, res) => {
	res.sendFile(__dirname + "/public/gallery.html");
});

// Routing profile modular
app.use("/profile", profileRoute);
const hostname = "127.0.0.1";
const port = 3000;

app.listen(port, hostname, () => {
	console.log(`Server running at ${hostname}:${port}`);
});
