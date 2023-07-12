const express = require('express')
const passport = require('passport')
const bodyParser = require("body-parser")
require("dotenv").config()


app.use(bodyParser.urlencoded({ extended: false }))
const signin = require('./routes/route')
const connectdb = require('./connectdb')
const app = express()

app.use(bodyParser.json())
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