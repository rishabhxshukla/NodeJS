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


// Updating an item :
app.patch("/", (req, res) => {
    let i = groceries.findIndex(fruits => fruits.item === "mango");
    groceries[i].quantity = 10;
    res.status(201);
    res.send("Successfully updated an item.");
});


app.listen(3000, () => {
    console.log("Server started...");
});