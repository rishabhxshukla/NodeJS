const path = require("path");
const express = require("express");
const app = express();


// Serve static files from the 'pages' directory
app.use(express.static(path.join(__dirname, "pages")));


app.get("/", (req, res) => {
    let path = "D:/PROGRAMMING/Node JS/Express/Rendering Static HTML/pages/home.html"
    res.sendFile(path);
});


app.get("/about", (req, res) => {
    let path = "D:/PROGRAMMING/Node JS/Express/Rendering Static HTML/pages/about.html"
    res.sendFile(path);
});


app.listen(3000, () => {
    console.log("Server started...");
});