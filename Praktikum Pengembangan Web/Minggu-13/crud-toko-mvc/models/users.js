import { DataTypes } from "sequelize";
import { conn } from "../config/connection.js";

export const User = conn.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING
  },
  {
    tableName: "users",
    timestamps: false
  }
);