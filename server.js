const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const colors = require('colors')
const connectDB = require('./config/connectDB');
//config dot env file

dotenv.config();

//database call
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//routes
app.get('/',(req, res)=>{
    res.send("home page")
});

const PORT = 8080 || process.env.PORT

//listen server
app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`) 
});