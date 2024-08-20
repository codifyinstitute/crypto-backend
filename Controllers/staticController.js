const Static = require('../Models/staticSchema'); 

// Add a new static data entry
exports.addStaticData = async (req, res) => {
    try {
        const { TransactionFee } = req.body;

        const newStaticData = new Static({ TransactionFee });

        await newStaticData.save();

        res.status(201).json({ message: "Static data added successfully", data: newStaticData });
    } catch (error) {
        res.status(500).json({ message: "Error adding static data", error: error.message });
    }
};

// Get all static data entries
exports.getAllStaticData = async (req, res) => {
    try {
        const staticData = await Static.find();

        res.status(200).json(staticData);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving static data", error: error.message });
    }
};

// Get static data by ID
exports.getStaticDataById = async (req, res) => {
    try {
        const { id } = req.params;
        const staticData = await Static.findById(id);

        if (!staticData) {
            return res.status(404).json({ message: "Static data not found" });
        }

        res.status(200).json(staticData);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving static data", error: error.message });
    }
};

// Update static data by ID
exports.updateStaticData = async (req, res) => {
    try {
        const { id } = req.params;
        const { TransactionFee } = req.body;

        const updatedStaticData = await Static.findByIdAndUpdate(
            id,
            { TransactionFee },
            { new: true, runValidators: true }
        );

        if (!updatedStaticData) {
            return res.status(404).json({ message: "Static data not found" });
        }

        res.status(200).json({ message: "Static data updated successfully", data: updatedStaticData });
    } catch (error) {
        res.status(500).json({ message: "Error updating static data", error: error.message });
    }
};

// Delete static data by ID
exports.deleteStaticData = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedStaticData = await Static.findByIdAndDelete(id);

        if (!deletedStaticData) {
            return res.status(404).json({ message: "Static data not found" });
        }

        res.status(200).json({ message: "Static data deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting static data", error: error.message });
    }
};
