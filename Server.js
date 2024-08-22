const express = require("express");
const cors = require("cors");
const path = require('path');

const currencyRoutes = require('./Routes/currencyRoutes');
const transactionRoutes = require('./Routes/transactionRoutes');
const staticRoutes = require('./Routes/staticRoutes');
const userRoutes = require('./Routes/userRoutes');

const app = express();
require("./config/db");


// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/currencies', currencyRoutes);
app.use('/transactions', transactionRoutes);
app.use('/static', staticRoutes);
app.use('/users', userRoutes);

const PORT = 8000;
app.listen(PORT, () => console.log(`Server is Running on ${PORT}`));