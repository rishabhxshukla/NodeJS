const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");


//Body parser middleware :
app.use(bodyParser.urlencoded({ extended: false }));
//JSON middleware for accepting json data :
app.use(express.json());


//Home page :
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
});


//When user clicks submit :
app.post("/", (req, res) => {

    console.log(req.body);

    const details = `
    Name : ${req.body.name} <br>
    Age: ${req.body.age} <br>
    Email: ${req.body.email} <br>
    Password: ${req.body.password}
    `

    res.send(details);
});


app.listen(3000, () => {
    console.log("Server started...");
});