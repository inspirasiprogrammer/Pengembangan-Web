import { Sequelize } from "sequelize";

export const conn = new Sequelize("crud_toko", "root", "", {
  host: "localhost",
  dialect: "mysql"
});

export async function testConnection() {
  try {
    await conn.authenticate();
    console.log("✅ Berhasil connect ke database");
  } catch (err) {
    console.error("❌ Gagal terkoneksi ke database:", err.message);
  }
}