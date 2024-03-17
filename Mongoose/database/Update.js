const express = require("express");
const router = express.Router();
const employees = require("./models/employee");


/* UPDATING USER */
router.patch("/", (req, res) => {

    employees.updateOne(
        { name: "Rishabh Shukla" },
        { $set: { name: "Peter Griffin" } }
    )
        .then(() => res.send("User updated.\nCheck on MongoDB Compass."))
        .catch((err) => res.send(err));
});


module.exports = router;