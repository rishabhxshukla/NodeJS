const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
},
    { timestamps: true }
);


const users = mongoose.model("users", userSchema);


module.exports = users;