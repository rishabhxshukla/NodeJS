const express = require("express");
const app = express();


/* Connecting to database */
const connectToDB = require("./database/ConnectToDB");
connectToDB();


/* CRUD Operations */
const createUser = require("./database/Create");
const readUser = require("./database/Read");
const updateUser = require("./database/Update");
const deleteUser = require("./database/Delete");


/* JSON MIDDLEWARE */
app.use(express.json());


/* Routing */
app.use("/", createUser);
app.use("/", readUser);
app.use("/", updateUser);
app.use("/", deleteUser);


app.listen(3000, () => {
    console.log("Server started...");
});