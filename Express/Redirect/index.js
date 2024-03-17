const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.send("Go to /google");
});


app.get("/google", (req, res) => {
    res.redirect("https://google.com");
});


app.listen(3000, () => {
    console.log("Server started...");
});