const express = require("express");
const { addTransaction, getAllTransaction } = require("../controllers/transactionController");


//router object
const router = express.Router();

//routes
//add trans post method
router.post('/add-transaction', addTransaction)

//get trans
router.post('/get-transaction', getAllTransaction)
module.exports = router;
