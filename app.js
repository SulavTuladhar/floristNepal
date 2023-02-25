const express = require('express');

// Yo app bhanne variable ma chai entire express framework huncha
const app = express();
const PORT = 9090;

// Initilizing database connection
require('./db_init');

// Importing API route 
const API_ROUTE = require('./api.router');

// Inbuilt Middleware
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use('/api', API_ROUTE);

// 404 page not found
app.use(function(req,res,next){
    next({
        message: "Page not found",
        status: 404
    })
})

// Error handler middleware
app.use(function(err,req,res,next){
    res.status(err.status || 400);
    res.json({
        message: err.message || err,
        status: err.status || 400
    })
})

// Listening 
app.listen(PORT, function(err,done){
    if(err){
        console.log("Error while listening to server");
    }else{
        console.log("Server is listening at PORT ", PORT);
    }
})
