import db from '../config/db.js';

export const getAllCategories = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM categories');
        res.status(200).json({ status: "Success", data: rows });
    } catch (error) {
        res.status(500).json({ status: "Error", message: error.message });
    }
};

export const createCategory = async (req, res) => {
    const { name } = req.body;
    try {
        await db.query('INSERT INTO categories (name) VALUES (?)', [name]);
        res.status(201).json({ status: "Category Created" });
    } catch (error) {
        res.status(500).json({ status: "Error", message: error.message });
    }
};

export const getCategoryById = async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await db.query('SELECT * FROM categories WHERE id = ?', [id]);
        if (rows.length === 0) {
            return res.status(404).json({ status: "Error", message: "Category not found" });
        }
        res.status(200).json({ status: "Success", data: rows[0] });
    } catch (error) {
        res.status(500).json({ status: "Error", message: error.message });
    }
};

export const updateCategory = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const [result] = await db.query('UPDATE categories SET name = ? WHERE id = ?', [name, id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: "Error", message: "Category not found" });
        }
        res.status(200).json({ status: "Success", message: "Category Updated" });
    } catch (error) {
        res.status(500).json({ status: "Error", message: error.message });
    }
};

export const deleteCategory = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await db.query('DELETE FROM categories WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: "Error", message: "Category not found" });
        }
        res.status(200).json({ status: "Success", message: "Category Deleted" });
    } catch (error) {
        res.status(500).json({ status: "Error", message: error.message });
    }
};