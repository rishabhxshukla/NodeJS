/*
1) Sessions are small data that is stored on the server machine.
2) Here we are using the 'express-session' middleware.
*/


const express = require("express");
const app = express();
const session = require("express-session");


/* Session Middleware */
app.use(session({
    secret: "My secret",
    resave: true,
    saveUninitialized: true
}));


/* Creating session */
app.get("/", (req, res) => {

    //Saving variables on server
    req.session.username = "Guest";
    req.session.password = 123;
    res.send("Session saved! Go to /details");
});


/* Reading session */
app.get("/details", (req, res) => {

    //Printing session details
    const userDetails = {
        "Session ID": req.sessionID,
        "Username": req.session.username,
        "Password": req.session.password
    }
    res.json(userDetails);
});


/* Deleting session */
app.get("/destroy", (req, res) => {

    req.session.destroy((err) => {
        if (!err) {
            res.send("Session destroyed!");
        }
        else {
            res.send(err);
        }
    });
});


app.listen(3000, () => {
    console.log("Server started...");
});