const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    UserName: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
        unique: true,
    },
    PhoneNumber: {
        type: String,
    },
});

module.exports = mongoose.model('User', userSchema);
