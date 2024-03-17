const path = require("path");
const express = require("express");
const app = express();


/* Serve static CSS files from the 'public' directory */
app.use(express.static("public"));


/* Set the view engine */
app.set("view engine", "ejs");


/* Rendering HTML */
app.get("/", (req, res) => {
    const props = {
        title: "Template Engine (EJS)",
        heading: "Dynamic HTML page",
        content: "This is an html file which is rendered by ejs template engine.",
        fruits: ["Apple", "Mango", "Banana", "Orange"]
    }
    res.render("index.ejs", props);
});


app.listen(3000, () => {
    console.log("Server started...");
});