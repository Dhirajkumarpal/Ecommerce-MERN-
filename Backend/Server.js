//require("dotenv").config()
const express = require("express")

const app = express()
const connectDB = require('./config/db')
const productRoutes = require("./routes/productRoutes");

connectDB()
app.use(express.json())
app.use('/api/products', productRoutes);
PORT= 5000
app.listen(PORT,()=>{console.log("server started")})