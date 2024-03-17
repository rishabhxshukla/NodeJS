const express = require("express");
const app = express();

//Importing routes :
const links = require("./routes/links");
const error = require("./routes/error");


//Using routes :
app.use(links);
app.use(error);


app.listen(3000, () => {
    console.log("Server started...");
});