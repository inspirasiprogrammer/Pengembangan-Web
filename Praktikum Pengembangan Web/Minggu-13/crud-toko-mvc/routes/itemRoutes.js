import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import {
  getAllItems,
  showAddForm,
  showEditForm,
  apiCreateItem,
  apiUpdateItem,
  apiDeleteItem
} from "../controllers/itemController.js";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

const router = express.Router();

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

const authAPIToken = (req, res, next) => {
  const token = req.cookies?.token;
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const decode = jwt.verify(token, JWT_SECRET);
    req.user = decode;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

// View routes
router.get("/", authToken, getAllItems);
router.get("/tambah", authToken, showAddForm);
router.get("/edit/:id", authToken, showEditForm);

// API routes
router.post("/api/items", authAPIToken, apiCreateItem);
router.put("/api/items/:id", authAPIToken, apiUpdateItem);
router.delete("/api/items/:id", authAPIToken, apiDeleteItem);

export default router;