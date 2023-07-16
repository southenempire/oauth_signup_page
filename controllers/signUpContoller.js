const user = require("../model/signupModel")
const bcrypt = require("bcrypt")
const {StatusCodes} = require("http-status-codes")

const getController = async (req,res) =>{
    res.send("testing")
}
const register = async (req,res) =>{
    await user.create(req.body)
    res.status(StatusCodes.CREATED).json({createduser:user})
}


module.exports = {
    register,getController
}