const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();

//DB Connectivity function
const connectToDB = require("./database/ConnectToDB");
//Users collection
const users = require("./database/models/users");
//Port number
const port = process.env.PORT || 4000;


//Middlewares
app.use(express.json());
app.use(cors({ origin: true }));
app.use(express.urlencoded({ extended: false }));


//Connecting to database
connectToDB();


//Getting all the users
app.get("/", async (req, res) => {

    const names = await users.find();
    res.json(names);
});


//Log in user
app.post("/login", async (req, res) => {

    console.log(req.body);
    res.send("User logged in!");
});


//Listening on port
app.listen(port, () => {
    console.log("Server started...");
});