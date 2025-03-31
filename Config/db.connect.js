const mongoose = require("mongoose");
require("dotenv").config();

// MongoDB Connection URL
const dbURI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    // Trying to connect to MongoDB
    await mongoose.connect(dbURI, {
      useNewUrlParser: true, // Use the new URL parser
      useUnifiedTopology: true, // Use the new topology engine
    });

    console.log("Connected to MongoDB");

  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1); // Exit the process if connection fails
  }
};

module.exports = connectDB;
