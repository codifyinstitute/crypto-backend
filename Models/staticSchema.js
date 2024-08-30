const mongoose = require("mongoose");

const staticSchema = new mongoose.Schema({
    TransactionFee: {
        type: Number,
        required: true
    },
    NetworkFee:{
        type:Number,
        required:true
    },
    LoginId: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    }
});

const Static = mongoose.model("Static", staticSchema);
module.exports = Static;