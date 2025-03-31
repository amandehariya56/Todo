const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: String,
    enum: ["YES", "NO"],
    default: "NO",
  },
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
