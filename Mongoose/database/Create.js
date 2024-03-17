const express = require("express");
const router = express.Router();
const employees = require("./models/employee");


/* INSERTING USER */
router.post("/", (req, res) => {

    employees.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        above18: req.body.above18
    })
        .then(() => res.send("User inserted.\nCheck on MongoDB Compass."))
        .catch((err) => res.send(err));
});


module.exports = router;