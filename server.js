const app = require("./app");
const database=require('./database/configuration')
const PORT=process.env.PORT || 8000

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  });


// Connecting to the server
const server = app.listen(PORT, () => {
    console.log(`Server is working on ${PORT}`);
  });
  

 // Unhandled Promise Rejection
  process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  });