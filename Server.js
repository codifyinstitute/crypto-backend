const express = require("express");
const cors = require("cors");
const path = require('path');

const app = express();
require("./config/db")

app.use(express.json());
app.use(cors());


const PORT = 8000;
app.listen(PORT, () => console.log(`Server is Running on ${PORT}`));