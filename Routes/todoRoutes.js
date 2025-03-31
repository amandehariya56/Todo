const express = require("express");
const { getTodos, postdata, updatedata, deletedata } = require("../Controllers/TodoController");
const router = express.Router();

router.get("/getdata", getTodos);             // Get all todos
router.post("/adddata", postdata);            // Add new todo
router.patch("/updatedata/:id", updatedata); // Update todo (Mark as completed or pending)
router.delete("/deletedata/:id", deletedata); // Delete todo

module.exports = router;
