const mongoose = require("mongoose");


/* CONNECTING TO DB */
function connectToDB() {
    const url = "mongodb+srv://rishabh:pass123@mycluster.gh58ing.mongodb.net/mydb";
    mongoose.connect(url)
        .then(() => console.log("Connected to database!"))
        .catch((err) => console.log(err));
}


module.exports = connectToDB;