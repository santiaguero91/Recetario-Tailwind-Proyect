require("dotenv").config();
const express = require("express");
const server = express();
const router = require("./index")
const cors = require('cors');

const PORT = process.env.PORT || 3001;


server.use(cors());
server.use(router)
server.listen(PORT, () => {
    console.log(`ready on Port ${PORT}`);
})