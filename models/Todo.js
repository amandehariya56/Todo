const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,  // Title is required
  },
  description: {
    type: String,
    required: true,  // Description is required
  },
  completed: {
    type: Boolean,   // Completed is a boolean value
    default: false,  // Default value is false
  },
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
