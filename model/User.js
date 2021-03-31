const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    displayusername: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true,
        min: 5
    },
    timestamp: {
        type: Date,
        require: true
    }
});

module.exports = mongoose.model('User', userSchema);