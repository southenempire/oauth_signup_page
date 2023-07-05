const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
require("dotenv").config()
require("express-async-errors")
require("./strategies/googlestra")
const signin = require('./routes/route')
const connectdb = require('./connectdb')
const app = express()

app.use(express.json())
app.use(passport.initialize())
app.use('/', signin)

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