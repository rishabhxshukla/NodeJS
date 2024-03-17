/*
Flash is used to pass data from one route to another without creating a global variable.
It uses express-session package in the background, so you need to install it.
*/


const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");


/* Session Middleware */
app.use(session({
    secret: "My secret",
    resave: true,
    saveUninitialized: true
}));


/* Flash Middlware */
app.use(flash());


/* Creating a flash */
app.get("/", (req, res) => {
    req.flash("isLoggedIn", false);
    res.send("Flash created. Go to /details.");
});


/* Reading the flash */
app.get("/details", (req, res) => {

    const x = req.flash("isLoggedIn");

    if (x == true) {
        res.send("You are logged in.");
    }
    else {
        res.send("You are not logged in.");
    }
});


app.listen(3000, () => {
    console.log("Server started...");
});