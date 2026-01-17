import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import itemRoutes from "./routes/itemRoutes.js";
import { conn, testConnection } from "./config/connection.js";
import { Item } from "./models/Item.js";
import { User } from "./models/users.js";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

const app = express();
const PORT = 3000;

// middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// view engine
app.set("view engine", "ejs");

// middleware auth
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

// routes
app.get("/login", (req, res) => {
  res.render("login", { msg: null });
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username, password } });
    if (user) {
      const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: "1h" });
      res.cookie("token", token, { httpOnly: true });
      res.redirect("/");
    } else {
      res.render("login", { msg: "Username atau Password Salah" });
    }
  } catch (err) {
    res.render("login", { msg: err.message });
  }
});

app.get("/logout", (req, res) => {
  res.clearCookie("token", { httpOnly: true });
  res.redirect("/");
});

app.use("/", itemRoutes);

// sync DB lalu start server
async function startServer() {
  await testConnection();
  await Item.sync();
  await User.sync();

  // Insert dummy user if not exists
  const existingUser = await User.findOne({ where: { username: 'gaspar' } });
  if (!existingUser) {
    await User.create({ username: 'gaspar', password: 'jagobanget' });
    console.log('Dummy user inserted');
  }

  app.listen(PORT, () => {
    console.log(`🚀 Server jalan di http://localhost:${PORT}`);
  });
}

startServer();