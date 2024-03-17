/*
Middleware is a function which is used to perform checks before visiting a route.
It will always run no matter what route we are visiting.
We can restrict a user from visiting a route using it.

'next' is a function which, when invoked, executes the middleware succeeding the current middleware.
If we don't call this function, the request will be left hanging.
*/


const express = require("express");
const app = express();


//Middleware
app.use((req, res, next) => {
    console.log("Middleware actions performed!");
    next();
});


//One route will run at a time
app.get("/", (req, res) => {
    res.send("Home Page!");
});

app.get("/about", (req, res) => {
    res.send("About Page!");
});

app.get("/contact", (req, res) => {
    res.send("Contact Page!");
});


//Listening to server
app.listen(3000, () => {
    console.log("Server started...");
});