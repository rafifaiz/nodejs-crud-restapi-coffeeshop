import db from '../config/db.js';

export const getAllProducts = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT products.*, categories.name as category_name FROM products LEFT JOIN categories ON products.category_id = categories.id');
        res.status(200).json({ status: "Success", data: rows });
    } catch (error) {
        res.status(500).json({ status: "Error", message: error.message });
    }
};

export const getProductById = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM products WHERE id = ?', [req.params.id]);
        if (rows.length === 0) return res.status(404).json({ message: "Produk tidak ditemukan" });
        res.status(200).json({ status: "Success", data: rows[0] });
    } catch (error) {
        res.status(500).json({ status: "Error", message: error.message });
    }
};

export const createProduct = async (req, res) => {
    const { name, price, category_id } = req.body;
    try {
        const [result] = await db.query('INSERT INTO products (name, price, category_id) VALUES (?, ?, ?)', [name, price, category_id]);
        res.status(201).json({ status: "Created", id: result.insertId });
    } catch (error) {
        res.status(500).json({ status: "Error", message: error.message });
    }
};

export const updateProduct = async (req, res) => {
    const { name, price, category_id } = req.body;
    try {
        await db.query('UPDATE products SET name = ?, price = ?, category_id = ? WHERE id = ?', [name, price, category_id, req.params.id]);
        res.status(200).json({ status: "Updated", message: "Data produk berhasil diperbarui" });
    } catch (error) {
        res.status(500).json({ status: "Error", message: error.message });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        await db.query('DELETE FROM products WHERE id = ?', [req.params.id]);
        res.status(200).json({ status: "Deleted", message: "Produk berhasil dihapus" });
    } catch (error) {
        res.status(500).json({ status: "Error", message: error.message });
    }
};