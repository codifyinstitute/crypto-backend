const Currency = require('../Models/currencySchema');

// Add a new currency
exports.addCurrency = async (req, res) => {
    try {
        const { Name, Symbol, Rate } = req.body;

        const newCurrency = new Currency({
            Name,
            Symbol,
            Rate
        });

        await newCurrency.save();

        res.status(201).json({ message: "Currency added successfully", currency: newCurrency });
    } catch (error) {
        res.status(500).json({ message: "Error adding currency", error: error.message });
    }
};

// Get all currencies
exports.getAllCurrencies = async (req, res) => {
    try {
        const currencies = await Currency.find();

        res.status(200).json(currencies);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving currencies", error: error.message });
    }
};

// Get a currency by ID
exports.getCurrencyById = async (req, res) => {
    try {
        const { id } = req.params;
        const currency = await Currency.findById(id);

        if (!currency) {
            return res.status(404).json({ message: "Currency not found" });
        }

        res.status(200).json(currency);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving currency", error: error.message });
    }
};

// Update a currency by ID
exports.updateCurrency = async (req, res) => {
    try {
        const { id } = req.params;
        const { Name, Symbol, Rate } = req.body;

        const updatedCurrency = await Currency.findByIdAndUpdate(
            id,
            { Name, Symbol, Rate },
            { new: true, runValidators: true }
        );

        if (!updatedCurrency) {
            return res.status(404).json({ message: "Currency not found" });
        }

        res.status(200).json({ message: "Currency updated successfully", currency: updatedCurrency });
    } catch (error) {
        res.status(500).json({ message: "Error updating currency", error: error.message });
    }
};

// Delete a currency by ID
exports.deleteCurrency = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedCurrency = await Currency.findByIdAndDelete(id);

        if (!deletedCurrency) {
            return res.status(404).json({ message: "Currency not found" });
        }

        res.status(200).json({ message: "Currency deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting currency", error: error.message });
    }
};
