const express = require("express");
const {
    addTodo,
    updateTodo,
    deleteTodo,
    getTodo,
    getAllTodos

} = require("../controllers/todoController");


const router = express.Router();

router.route("/todo-controllers/add-todo/").post(addTodo);
router.route("/todo-controllers/update-todo/:id").put(updateTodo);
router.route("/todo-controllers/delete-todo/:id").delete(deleteTodo);
router.route("/todo-controllers/get-all-todos/").get(getAllTodos);
router.route("/todo-controllers/get-todo/:id").get(getTodo);



module.exports = router;