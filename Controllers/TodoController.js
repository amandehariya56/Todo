const Todo = require("../models/Todo"); // Import the Todo model

// Get all todos
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// Add a new todo
const postdata = async (req, res) => {
  const { title, description, completed } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: "Title and description are required" });
  }

  try {
    const newTodo = new Todo({
      title,
      description,
      completed: completed || false, // default completed to false if not provided
    });

    const savedTodo = await newTodo.save();
    res.json(savedTodo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error saving todo" });
  }
};

// Update Todo
const updatedata = async (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
  
    // Validate input data
    if (!title || !description) {
      return res.status(400).json({ message: "Title and description are required" });
    }
  
    try {
      const updatedTodo = await Todo.findByIdAndUpdate(id, { title, description, completed }, { new: true });
      res.json(updatedTodo);
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: "Error updating todo" });
    }
  };
  
// Delete Todo
const deletedata = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);
    res.json({ message: "Todo deleted", deletedTodo });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Error deleting todo" });
  }
};

module.exports = { getTodos, postdata, updatedata, deletedata };
