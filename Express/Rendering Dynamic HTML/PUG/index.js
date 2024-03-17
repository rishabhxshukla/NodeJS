const path = require("path");
const express = require("express");
const app = express();


/* Serve static CSS files from the 'public' directory */
app.use(express.static("public"));


/* Set the view engine */
app.set("view engine", "pug");


/* Rendering HTML */
app.get("/", (req, res) => {
    const props = {
        title: "Template Engine (PUG)",
        heading: "Dynamic HTML page",
        content: "This is an html file which is rendered by pug template engine.",
        fruits: ["Apple", "Mango", "Banana", "Orange"]
    }
    res.render("index.pug", props);
});


app.listen(3000, () => {
    console.log("Server started...");
});