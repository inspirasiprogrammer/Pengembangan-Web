import {conn, DataTypes} from "./connection.js";

const User = conn.define("users", {
  username: DataTypes.STRING,
  password: DataTypes.STRING
}, {
  timestamps: false,
  createdAt: false,
  updatedAt: false
});

User.sync()
  .then(() => {
    console.log("Tabel user sudah tersinkronisasi");
  })
  .catch(err => {
    console.log("Tabel user tidak tersinkronisasi.", err);
  });

export default User;
