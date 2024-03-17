const mongoose = require("mongoose");


/* DEFINING SCHEMA */
const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    phone: {
        type: Number,
        minLength: 10,
        maxLength: 12
    },
    above18: Boolean,
    date: {
        type: Date,
        default: Date.now()
    }
});


/* CREATING A COLLECTION */
const employees = mongoose.model("employees", employeeSchema);


/* EXPORTING THE COLLECTION */
module.exports = employees;