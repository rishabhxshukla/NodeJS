const express = require("express");
const router = express.Router();


//Routes :
router.get("*", (req, res) => {
    res.send("Error Page");
});


//Exporting router :
module.exports = router;