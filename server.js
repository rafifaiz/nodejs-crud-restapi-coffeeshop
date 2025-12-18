import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/users", userRoutes);
app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});