import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import prisma from "./config/database.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  const users = await prisma.user.findMany();

  res.json({
    message: "LinkVault API is running",
    users,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});