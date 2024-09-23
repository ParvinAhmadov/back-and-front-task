const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); 
const userRoutes = require("./routers/users");
const authRouters = require("./routers/auth")
require("dotenv").config(); 

const app = express();
app.use(cors()); 
app.use(express.json());

mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Successfully connected to the database"))
  .catch((error) => console.error("Error connecting to the database:", error));

app.use("/api/users", userRoutes);
app.use("/api/auth", authRouters); 

const PORT = process.env.PORT || 8080; 
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
