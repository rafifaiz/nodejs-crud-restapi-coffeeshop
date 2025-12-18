import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

// Gunakan createPool untuk performa yang lebih baik dan stabil
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Pengetesan koneksi otomatis saat aplikasi dijalankan
try {
    const connection = await db.getConnection();
    console.log("MySQL Connected (Promise version)");
    connection.release(); // Kembalikan koneksi ke pool
} catch (error) {
    console.error(`Error Koneksi ke Database: ${error.message}`);
}

export default db;