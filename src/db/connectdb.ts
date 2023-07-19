const mongoose = require('mongoose')

const connectdb = (url:string) => {
    return mongoose.connect(url)}

module.exports = connectdb