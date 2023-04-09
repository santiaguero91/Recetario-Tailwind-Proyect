require("dotenv").config();
const express = require("express");
const server = express();
const router = require("./index")
const cors = require('cors');

const {sequelize} = require("../DB_connection")

const PORT = process.env.PORT || 3001;


server.use(cors());
server.use(router)


sequelize.sync().then(()=>
    server.listen(PORT, () => {
        console.log(`ready on Port ${PORT}`);
    })
)