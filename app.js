const express = require('express')
const mongoose = require('mongoose')

const connectdb = require('./connectdb')
const app = express()

const start = async () =>{
    try {
        await connectdb()
        app.listen()
    } catch (error) {
        console.log(error)
    }
}
start()