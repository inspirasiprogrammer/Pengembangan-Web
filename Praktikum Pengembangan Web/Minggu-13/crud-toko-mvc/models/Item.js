import { DataTypes } from "sequelize";
import { conn } from "../config/connection.js";

export const Item = conn.define(
  "items",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    qty_stock: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  },
  {
    tableName: "items",
    timestamps: false
  }
);