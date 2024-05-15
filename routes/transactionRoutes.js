const express = require("express");
const {
  addTransaction,
  editTransaction,
  getAllTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");

//router object
const router = express.Router();

//routes
//add trans post method
router.post("/add-transaction", addTransaction);
//edit trans
router.post("/edit-transaction", editTransaction);
//delete trans
router.post("/delete-transaction", deleteTransaction);

//get trans
router.post("/get-transaction", getAllTransaction);
module.exports = router;
