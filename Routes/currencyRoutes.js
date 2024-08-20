const express = require('express');
const router = express.Router();
const currencyController = require('../Controllers/currencyController'); 

// Route to add a new currency
router.post('/add', currencyController.addCurrency);

// Route to get all currencies
router.get('/all', currencyController.getAllCurrencies);

// Route to get a currency by ID
router.get('/get/:id', currencyController.getCurrencyById);

// Route to update a currency by ID
router.put('/put/:id', currencyController.updateCurrency);

// Route to delete a currency by ID
router.delete('/del/:id', currencyController.deleteCurrency);

module.exports = router;
