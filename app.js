const express = require('express')
const passport = require("passport")
const bodyParser = require("body-parser")
const session = require("express-session")
const errorhandler = require("./error/error-handler")
const notFound = require("./middleware/not-found")
require("dotenv").config()

const signin = require('./routes/route')
const connectdb = require('./db/connectdb')
const app = express()

app.use(session({secret:process.env.SESSION_SECRET, resave:false, saveUninitialized: true,cookie:{secure: true}}))
app.use(passport.initialize())
app.use(passport.session())
 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())
app.use('/', signin)

app.use(notFound)
app.use(errorhandler)

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