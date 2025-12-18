import express from "express";

import {
    getUsers,
    getUsersByid,
    insertUser,
    updateUser, // <-- Pastikan ini 'updateUser' dengan 'U' besar jika itu nama fungsi yang benar
    deleteUser
} from "../controllers/userControllers.js"; // <-- Perhatikan hanya ada satu blok import ini!

const router = express.Router();

//menampilkan semua data user
router.get("/", getUsers);

//menampilkan user berdasarkan id
router.get("/:id", getUsersByid);

//menyimpan data users
router.post("/", insertUser);

//mengupdate data user berdasarkan id
router.put("/:id", updateUser);

//menghapus data user
router.delete("/:id", deleteUser);

export default router;