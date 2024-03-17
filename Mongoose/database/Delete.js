const express = require("express");
const router = express.Router();
const employees = require("./models/employee");


/* DELETING USER */
router.delete("/", (req, res) => {

    //Getting the user to be deleted from req body
    const user = req.body.name;

    //Deleting the user
    employees.deleteOne(
        { name: user }
    )
        .then(() => res.send("User deleted.\nCheck on MongoDB Compass."))
        .catch((err) => res.send(err));
});


module.exports = router;