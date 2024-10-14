const DepositTransaction = require('../Models/depositTransactionModel');

// Add a new deposit transaction
exports.addDepositTransaction = async (req, res) => {
    const { OrderId, Email, Amount, Network, ProcessingFee, AddedAmount, Status, Date, Time } = req.body;
    try {
        const transaction = new DepositTransaction({ OrderId, Email, Amount, Network, ProcessingFee, AddedAmount, Status, Date, Time });
        await transaction.save();
        res.status(201).json(transaction);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all deposit transactions
exports.getAllDepositTransactions = async (req, res) => {
    try {
        const transactions = await DepositTransaction.find();
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get deposit transaction by ID
exports.getDepositTransactionById = async (req, res) => {
    try {
        const transaction = await DepositTransaction.findById(req.params.id);
        if (!transaction) return res.status(404).json({ message: 'Transaction not found' });
        res.status(200).json(transaction);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update deposit transaction by ID
exports.updateDepositTransaction = async (req, res) => {
    const { OrderId, Email, Amount, Network, ProcessingFee, AddedAmount, Status, Date, Time } = req.body;
    try {
        const transaction = await DepositTransaction.findByIdAndUpdate(req.params.id, { OrderId, Email, Amount, Network, ProcessingFee, AddedAmount, Status, Date, Time }, { new: true });
        if (!transaction) return res.status(404).json({ message: 'Transaction not found' });
        res.status(200).json(transaction);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete deposit transaction by ID
exports.deleteDepositTransaction = async (req, res) => {
    try {
        const transaction = await DepositTransaction.findByIdAndDelete(req.params.id);
        if (!transaction) return res.status(404).json({ message: 'Transaction not found' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
