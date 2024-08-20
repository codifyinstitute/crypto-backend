const express = require('express');
const router = express.Router();
const transactionController = require('../Controllers/transactionController'); 

// Route to add a new transaction
router.post('/add', transactionController.addTransaction);

// Route to get all transactions
router.get('/all', transactionController.getAllTransactions);

// Route to get a transaction by ID
router.get('/get/:id', transactionController.getTransactionById);

// Route to update a transaction by ID
router.put('/put/:id', transactionController.updateTransaction);

// Route to delete a transaction by ID
router.delete('/del/:id', transactionController.deleteTransaction);

module.exports = router;
