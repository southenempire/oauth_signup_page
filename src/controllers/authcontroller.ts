const usermodel = require("../model/signupModel")
const {StatusCodes} = require("http-status-codes")
import jwt from "jsonwebtoken"
const unauthenticated = require("../error/unauthenticated")

import { Response, request } from "express"

const getController = async (req:Request,res:Response) =>{
    res.send("testing ")
}
const register = async (req:Request,res:Response) =>{
    const user = await usermodel.create(req.body)
    const token = jwt.sign({userid: user.id,name: user.name}, process.env.JWTSECRET)
    res.status(StatusCodes.CREATED).json({token})
}


module.exports = {
    register,getController
}