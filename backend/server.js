const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config(); // Loads environment variables from a .env file into process.env

const router = express.Router();

mongoose.set("strictQuery", false);

const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL; 
mongoose.connect(URL, {});

const connection = mongoose.connection;

connection.once('open', ()=> {
    console.log('MongoDB database connection established successfully');
})

app.listen(PORT, ()=> {
    console.log(`Server is running on port: ${PORT}`);
});

app.get("/", (req,res)=>{
    res.send("Hello World");
})