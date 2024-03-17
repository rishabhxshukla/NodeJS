const express = require("express");
const router = express.Router();
const employees = require("./models/employee");


/* READING USERS */
router.get("/", (req, res) => {

    employees.find().sort({ name: 1 })
        .then((data) => res.json(data))
        .catch((err) => res.send(err));
});


module.exports = router;