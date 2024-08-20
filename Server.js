const express = require("express");
const cors = require("cors");
const path = require('path');

const currencyRoutes = require('./Routes/currencyRoutes');
const transactionRoutes = require('./Routes/transactionRoutes');
const staticRoutes = require('./Routes/staticRoutes');

const app = express();
require("./config/db")


// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/currencies', currencyRoutes);
app.use('/transactions', transactionRoutes);
app.use('/static', staticRoutes);

const PORT = 8000;
app.listen(PORT, () => console.log(`Server is Running on ${PORT}`));