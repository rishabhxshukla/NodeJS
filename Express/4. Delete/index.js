const express = require("express");
const app = express();


// Groceries :
const groceries = [
    {
        item: "apple",
        quantity: 1
    },
    {
        item: "mango",
        quantity: 2
    },
    {
        item: "orange",
        quantity: 3
    }
]


// Printing groceries :
app.get("/", (req, res) => {
    res.status(200);
    res.json(groceries);
});


// Deleting last item :
app.delete("/", (req, res) => {
    groceries.pop();
    res.status(202);
    res.send("Successfully deleted last item.");
});


app.listen(3000, () => {
    console.log("Server started...");
});