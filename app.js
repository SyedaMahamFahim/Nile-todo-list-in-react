const express = require("express");
const app = express();
const todoRoute =require('./routes/todoRoutes')
const errorMiddleware=require('./middleware/errors')
const cors = require("cors");


// Middlewares

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(cors())
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});




// 

// app.use(function(req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
//   });


// Middleware for error
app.use(errorMiddleware)



// Connecnt routes
app.use("/api/v1", todoRoute);

app.get('/', function (req, res) {
   
    res.status(200).send("Updated Hello World");
    
 })
module.exports = app;