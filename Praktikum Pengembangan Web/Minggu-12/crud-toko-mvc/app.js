import express from "express";
import itemRoutes from "./routes/itemRoutes.js";
import { conn, testConnection } from "./config/connection.js";
import { Item } from "./models/Item.js";

const app = express();
const PORT = 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// view engine
app.set("view engine", "ejs");

// routes
app.use("/", itemRoutes);

// sync DB lalu start server
async function startServer() {
  await testConnection();
  await Item.sync(); // sesuaikan tabel jika perlu
  app.listen(PORT, () => {
    console.log(`🚀 Server jalan di http://localhost:${PORT}`);
  });
}

startServer();