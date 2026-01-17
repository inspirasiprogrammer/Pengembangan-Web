import express from "express";
import {
  getAllItems,
  showAddForm,
  showEditForm,
  apiCreateItem,
  apiUpdateItem,
  apiDeleteItem
} from "../controllers/itemController.js";

const router = express.Router();

// View routes
router.get("/", getAllItems);
router.get("/tambah", showAddForm);
router.get("/edit/:id", showEditForm);

// API routes
router.post("/api/items", apiCreateItem);
router.put("/api/items/:id", apiUpdateItem);
router.delete("/api/items/:id", apiDeleteItem);

export default router;