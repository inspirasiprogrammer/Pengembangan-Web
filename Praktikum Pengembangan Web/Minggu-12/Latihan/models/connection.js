import { Sequelize, DataTypes } from "sequelize";

const conn = new Sequelize("crud_toko", "root", "", {
	host: "localhost",
	dialect: "mysql"
});

conn.authenticate()
	.then(() => {
		console.log("Berhasil connect cuy");
	})
	.catch(err => {
		console.log("Gagal terhubung ke database.", err);
	});

export {conn, DataTypes};
