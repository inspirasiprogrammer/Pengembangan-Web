import { Item } from "../models/Item.js";

// View: list semua item
export const getAllItems = async (req, res) => {
  try {
    const items = await Item.findAll();
    res.render("index", { barang: items });
  } catch (err) {
    res.status(500).send("Gagal mengambil data");
  }
};

// View: tampilkan form tambah
export const showAddForm = (req, res) => {
  res.render("addData");
};

// View: tampilkan form edit
export const showEditForm = async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (!item) return res.status(404).send("Item tidak ditemukan");
    res.render("editData", { barang: item });
  } catch (err) {
    res.status(500).send("Gagal mengambil data");
  }
};

// API: CREATE item
export const apiCreateItem = async (req, res) => {
  try {
    const { name, qty_stock, price } = req.body;
    const created = await Item.create({ name, qty_stock, price });
    res.json({ status: 200, error: null, response: created });
  } catch (err) {
    res.status(500).json({ status: 500, error: err.message, response: null });
  }
};

// API: UPDATE item
export const apiUpdateItem = async (req, res) => {
  try {
    const { name, qty_stock, price } = req.body;
    const id = req.params.id;

    const [updated] = await Item.update(
      { name, qty_stock, price },
      { where: { id } }
    );

    if (!updated) {
      return res
        .status(404)
        .json({ status: 404, error: "Data tidak ditemukan", response: null });
    }

    const item = await Item.findByPk(id);
    res.json({ status: 200, error: null, response: item });
  } catch (err) {
    res.status(500).json({ status: 500, error: err.message, response: null });
  }
};

// API: DELETE item
export const apiDeleteItem = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Item.destroy({ where: { id } });
    if (!deleted) {
      return res
        .status(404)
        .json({ status: 404, error: "Data tidak ditemukan", response: null });
    }
    res.json({ status: 200, error: null, response: deleted });
  } catch (err) {
    res.status(500).json({ status: 500, error: err.message, response: null });
  }
};