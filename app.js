const express = require('express')
const passport = require('passport')

require("./strategies/googlestra")
require("dotenv").config()
require("./strategies/googlestra")

const signin = require('./routes/route')
const connectdb = require('./connectdb')
const app = express()

app.use(express.json())
app.use('/', signin)


const port = process.env.PORT
const start = async () =>{
    try {
        await connectdb(process.env.MONGODB_CONNECT)
        app.listen(port)
    } catch (error) {
        console.log(error)
    }
}

start()