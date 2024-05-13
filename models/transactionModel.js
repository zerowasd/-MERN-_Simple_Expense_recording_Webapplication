const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: [true, 'amount is required']
    },
    category: {
        type: String,
        requires: [true, 'category is required']
    },
    refrence: {
        type: String,
    },
    description: {
        type: String,
        required: [true, 'description is required']
    },
    date: {
        type: String,
        required: [true, 'data is required']
    }
}, { timestamps: true })

const transactionModel = mongoose.model('transactions', transactionSchema)