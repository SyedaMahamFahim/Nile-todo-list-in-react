const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Todo = require("../models/TodoModel");
const ErrorHander = require("../utils/errorhander");


// Get All Todo 
exports.getAllTodos = catchAsyncErrors(async (req, res, _) => {
  res.set('Access-Control-Allow-Origin', '*');

    const todo = await Todo.find();
  
    res.status(200).json({
      success: true,
      todo,
    });
  });

// Create Todo
exports.addTodo = catchAsyncErrors(async (req, res, _) => {
  res.set('Access-Control-Allow-Origin', '*');

  const { emailAddress, assignUserEmailAddress, title, desc, status, tag } =
    req.body;

  const add = await Todo.create({
    emailAddress,
    assignUserEmailAddress,
    title,
    desc,
    status,
    tag,
  });
  
  res.status(201).json({
    add,
    success: true,
    message: "Task created successfully",
  });
});

// Update Todo
exports.updateTodo = catchAsyncErrors(async (req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');

    let todoList = await Todo.findById(req.params.id);
  
    if (!todoList) {
      return next(new ErrorHander("Task not found", 404));
    }
  
    todoList = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
  
    res.status(200).json({
      success: true,
      todoList,
    });
});

// Delete Todo
exports.deleteTodo=catchAsyncErrors(async(req,res,next)=>{
  res.set('Access-Control-Allow-Origin', '*');

    let todo = await Todo.findById(req.params.id);
  
    if (!todo) {
      return next(new ErrorHander("Task not found", 404));
    }
  
    await todo.remove();
  
    res.status(200).json({
      success: true,
      message: "Task Deleted Successfully",
    });
})

// Get Todo Details
exports.getTodo = catchAsyncErrors(async (req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');

    const todo = await Todo.findById(req.params.id);
  
    if (!todo) {
      return next(new ErrorHander("Task not found", 404));
    }
  
    res.status(200).json({
      success: true,
      todo,
    });
  });
