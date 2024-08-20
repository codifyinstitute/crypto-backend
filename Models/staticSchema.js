const mongoose = require("mongoose");

const staticSchema = new mongoose.Schema({
    TransactionFee:{
        type: Number,
        required: true
    }
});

const Static = mongoose.model("Static", staticSchema);
module.exports = Static;