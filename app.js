const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config()
require("express-async-errors")

const connectdb = require('./connectdb')
const app = express()

app.use(express.json())

const port = process.env.PORT
const start = async () =>{
    try {
        await connectdb()
        app.listen(port)
    } catch (error) {
        console.log(error)
    }
}

start()