const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
require("dotenv").config();

const userRoutes = require("./routers/users");
const authRoutes = require("./routers/auth");
const cardRouter = require("./routers/card");
const ShopCardRouter = require("./routers/shopcards");
const Card = require("./models/card");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  })
);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const updateCardInDatabase = async (id, data) => {
  return await Card.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

app.put(
  "/api/cards/:id",
  upload.fields([{ name: "image" }, { name: "image2" }]),
  async (req, res) => {
    try {
      const cardId = req.params.id;
      const updatedData = { ...req.body };

      if (req.files) {
        if (req.files.image) updatedData.image = req.files.image[0].path;
        if (req.files.image2) updatedData.image2 = req.files.image2[0].path;
      }

      const updatedCard = await updateCardInDatabase(cardId, updatedData);
      if (!updatedCard) {
        return res.status(404).json({ message: "Card not found." });
      }
      res.json({ card: updatedCard });
    } catch (error) {
      console.error("Error details:", error);
      res.status(500).json({ message: "Failed to update card." });
    }
  }
);

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully connected to the database"))
  .catch((error) => {
    console.error("Error connecting to the database:", error);
    process.exit(1);
  });

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/cards", cardRouter);
app.use("/api/shopcards", ShopCardRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
