const express = require("express");
const cors = require("cors");
const router = require("./Routes/todoRoutes.js");
const connectDB = require("./Config/db.connect"); // Import the MongoDB connection function
require("dotenv").config();

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Built-in JSON parser in Express

// Routes
app.use("/", router);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
