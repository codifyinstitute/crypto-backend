const moment = require('moment');
const Transaction = require('../Models/transactionSchema');

// Utility function to generate a random 10-digit number
function generateOrderId() {
    return Math.floor(1000000000 + Math.random() * 9000000000).toString();
}

// Utility function to generate a 10-digit unique OrderId
async function generateUniqueOrderId() {
    let isUnique = false;
    let orderId;

    while (!isUnique) {
        orderId = generateOrderId();
        const existingTransaction = await Transaction.findOne({ OrderId: orderId });
        if (!existingTransaction) {
            isUnique = true;
        }
    }

    return orderId;
}

// Add a new transaction with a unique 10-digit OrderId
exports.addTransaction = async (req, res) => {
    try {
        const { Email, Name, Country, BankName, AccountNumber, IFSC, USDTAmount, Token, ProcessingFee, ReceivedAmount, Status } = req.body;

        const OrderId = await generateUniqueOrderId();
        const currentDate = moment().format('YYYY-MM-DD'); // Current date in 'YYYY-MM-DD' format
        const currentTime = moment().format('HH:mm:ss');   // Current time in 'HH:mm:ss' format

        const newTransaction = new Transaction({
            OrderId,
            Email,
            Name,
            Country,
            BankName,
            AccountNumber,
            IFSC,
            USDTAmount,
            Token,
            ProcessingFee,
            ReceivedAmount,
            Status,
            Date: currentDate,
            Time: currentTime
        });

        await newTransaction.save();

        res.status(201).json({ message: "Transaction added successfully", transaction: newTransaction });
    } catch (error) {
        res.status(500).json({ message: "Error adding transaction", error: error.message });
    }
};

// Get all transactions 
exports.getAllTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find();

        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving transactions", error: error.message });
    }
};

// Get a transaction by ID
exports.getTransactionById = async (req, res) => {
    try {
        const { id } = req.params;
        const transaction = await Transaction.findById(id);

        if (!transaction) {
            return res.status(404).json({ message: "Transaction not found" });
        }

        res.status(200).json(transaction);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving transaction", error: error.message });
    }
};

// Update a transaction by ID
exports.updateTransaction = async (req, res) => {
    try {
        const { id } = req.params;
        const { OrderId, Email, Name, Country, BankName, AccountNumber, IFSC, USDTAmount, Token, ProcessingFee, ReceivedAmount, Status } = req.body;

        const updatedTransaction = await Transaction.findByIdAndUpdate(
            id,
            { OrderId, Email, Name, Country, BankName, AccountNumber, IFSC, USDTAmount, Token, ProcessingFee, ReceivedAmount, Status },
            { new: true, runValidators: true }
        );

        if (!updatedTransaction) {
            return res.status(404).json({ message: "Transaction not found" });
        }

        res.status(200).json({ message: "Transaction updated successfully", transaction: updatedTransaction });
    } catch (error) {
        res.status(500).json({ message: "Error updating transaction", error: error.message });
    }
};

// Delete a transaction by ID
exports.deleteTransaction = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedTransaction = await Transaction.findByIdAndDelete(id);

        if (!deletedTransaction) {
            return res.status(404).json({ message: "Transaction not found" });
        }

        res.status(200).json({ message: "Transaction deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting transaction", error: error.message });
    }
};
