const express = require("express");
const router = express.Router();


//Routes :
router.get("/", (req, res) => {
    res.send("Home Page");
});

router.get("/about", (req, res) => {
    res.send("About Page");
});

router.get("/contact", (req, res) => {
    res.send("Contact Page");
});


//Exporting router :
module.exports = router;