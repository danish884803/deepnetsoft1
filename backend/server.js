
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const menuRoutes = require("./routes/route");
app.use("/menu", menuRoutes);

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/machinetest")

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
