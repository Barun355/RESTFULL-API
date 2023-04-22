const express = require('express')
const PORT = 8080;

const app = express();


// Starting server
app.listen(PORT, ()=>{
    console.log("Server started at " + PORT)
})