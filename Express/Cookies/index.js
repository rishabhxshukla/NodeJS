/*
1) Cookies are small data that a server sends and which is stored on the client machine.
2) Cookies are sent as key-value pair separated by a comma.
3) Third parameter is an obect of options.
4) Here we are expiring the cookies after 10 sec and on 1st Jan 2025.
*/


const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");


/* Cookie Parser Middleware */
app.use(cookieParser());


/* Creating cookies key-value pair */
app.get("/", (req, res) => {

    res.cookie("visited", true, {
        maxAge: 10000,
        httpOnly: true,
        secure: true
    });

    res.cookie("login", false, {
        expires: new Date("2025-01-01"),
        httpOnly: true,
        secure: true,
    });

    res.send("Cookies sent!");
});


/* Reading cookies */
app.get("/details", (req, res) => {

    //Printing session details
    const userDetails = {
        "Visited": req.cookies.visited,
        "Login": req.cookies.login
    }
    res.json(userDetails);
});


/* Deleting cookies by passing key */
app.get("/clear", (req, res) => {
    res.clearCookie("login");
    res.send("Cookie cleared!")
});


app.listen(3000, () => {
    console.log("Server started...");
});