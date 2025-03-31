const express = require("express");
const { getTodos, postdata, updatedata, deletedata } = require("../Controllers/TodoController");
const router = express.Router();

router.get("/getdata", getTodos);
router.post("/adddata", postdata);
router.patch("/updatedata/:id", updatedata);
router.delete("/deletedata/:id", deletedata);

module.exports = router;
