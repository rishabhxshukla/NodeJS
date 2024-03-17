const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.send("Home Page");
});


app.get("/about", (req, res) => {
    res.send("About Page");
});


/* 
QUERY PARAMETERS :
/users?name=Rishabh&age=21
*/
app.get("/users", (req, res) => {
    res.write("Name : " + req.query.name);
    res.write("\n");
    res.write("Age : " + req.query.age);
    res.send();
});


/* 
ROUTE PARAMETERS :
/users/10
*/
app.get("/users/:id", (req, res) => {
    res.send("User id : " + req.params.id);
});

app.get("/profile/:username", (req, res) => {
    res.send("Username : " + req.params.username);
});


app.get("*", (req, res) => {
    res.send("Error Page");
});


app.listen(3000, () => {
    console.log("Server started...");
});