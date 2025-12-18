# ☕ Coffee Shop Management System - REST API

Tugas implementasi Backend API untuk sistem kasir Coffee Shop menggunakan Node.js, Express, dan MySQL. Proyek ini mencakup fungsionalitas CRUD untuk manajemen kategori dan produk menu.

---

## 🛠️ Persiapan & Instalasi

### 1. Prasyarat
- Node.js terinstall
- MySQL (XAMPP/Laragon) berjalan

### 2. Langkah-langkah
1. Clone atau download repository ini.
2. Buka terminal di folder proyek, jalankan:
   ```bash
   npm install
Buat database web_kasir di phpMyAdmin.

Sesuaikan konfigurasi database pada file .env.

Jalankan server:

Bash

npm run dev
📡 API Endpoints
Berikut adalah daftar endpoint yang dapat diakses:

📁 Categories
GET /categories - Mengambil semua kategori

POST /categories - Menambah kategori baru

GET /categories/:id - Mengambil detail kategori

PUT /categories/:id - Update kategori

DELETE /categories/:id - Hapus kategori

☕ Products
GET /products - Mengambil semua produk

POST /products - Menambah produk baru

PUT /products/:id - Update produk

DELETE /products/:id - Hapus produk

📑 Hasil Pengujian
Berikut adalah bukti pengujian API menggunakan Postman:

1. Success Create Category
2. Success Read All Categories
3. Success Create Product
4. Success Read All Products
