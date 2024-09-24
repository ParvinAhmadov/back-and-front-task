const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routers/users");
const authRoutes = require("./routers/auth");
const cardRouter = require("./routers/card");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); 

mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Successfully connected to the database"))
  .catch((error) => {
    console.error("Error connecting to the database:", error);
    process.exit(1); 
  });

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/cards", cardRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
