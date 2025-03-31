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

  try {
    const newTodo = new Todo({
      title,
      description,
      completed,
    });

    const savedTodo = await newTodo.save();
    res.json(savedTodo);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Error saving todo" });
  }
};

// Update Todo
const toggleStatus = async (id, currentStatus) => {
    try {
      const updatedTodo = { completed: currentStatus === "YES" ? "NO" : "YES" };
      const response = await axios.patch(`${VITE_API_URL}/updatedata/${id}`, updatedTodo);
      console.log("Updated todo:", response.data);
      // Handle success (e.g., refresh the todo list)
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };
  
  // Delete Todo
  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete(`${VITE_API_URL}/deletedata/${id}`);
      console.log("Deleted todo:", response.data);
      // Handle success (e.g., refresh the todo list)
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };
  

module.exports = { getTodos, postdata, updatedata, deletedata };
