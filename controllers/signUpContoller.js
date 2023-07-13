const user = require("../model/signupModel")

const getController = async (req,res,next) =>{
    
}
const postController = async (req,res,next) =>{
    const body = req.body
    await user.create(body)
    res.status(200).json(user)
}


module.exports = {
    postController
}