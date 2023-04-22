const express = require('express')
const PORT = 8080;

const app = express();

// To use the middleware 
app.use(myMiddleWare)


// My custom middleware
function myMiddleWare (req, res, next){
    console.log("Inside the middle ware I created");
    next(); // It will pass on the control to the next step
}


// Starting server
app.listen(PORT, ()=>{
    console.log("Server started at " + PORT)
});