const mongoose = require("mongoose");

const currencySchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Symbol: {
        type: String,
        required: true,
        unique: true
    },
    Rate:{
        type: Number,
        required: true
    }
});

const Currency = mongoose.model("Currency", currencySchema);
module.exports = Currency;