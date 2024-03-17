const express = require("express");
const app = express();


// Middleware :
app.use(express.json());


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


// Inserting new item :
/* 
1) Go to Body > raw in Postman
2) Change the type to JSON
3) Paste this :
{
    "item": "pineapple",
    "quantity": 4
}
*/
app.post("/", (req, res) => {
    groceries.push(req.body);
    res.status(201);
    res.send("Successfully inserted new item.");
});


app.listen(3000, () => {
    console.log("Server started...");
});