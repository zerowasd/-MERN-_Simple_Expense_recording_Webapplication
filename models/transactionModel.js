const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    userid: {
        type: String,
        requires: true,
    },
    amount: {
        type: Number,
        required: [true, 'amount is required']
    },
    type: {
        type: String,
        requires: [true, 'type is required']
    },
    category: {
        type: String,
        requires: [true, 'category is required']
    },
    reference: {
        type: String,
    },
    description: {
        type: String,
    },
    date: {
        type: String,
        required: [true, 'data is required']
    }
}, { timestamps: true })

const transactionModel = mongoose.model('transactions', transactionSchema)
module.exports = transactionModel;