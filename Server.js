const express = require("express");
const cors = require("cors");
const path = require('path');

const currencyRoutes = require('./Routes/currencyRoutes');
const transactionRoutes = require('./Routes/transactionRoutes');

const app = express();
require("./config/db")


// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/currencies', currencyRoutes);
app.use('/transactions', transactionRoutes);

const PORT = 8000;
app.listen(PORT, () => console.log(`Server is Running on ${PORT}`));