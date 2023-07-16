const user = require("../model/signupModel")

const getController = async (req,res) =>{
    res.send("testing")
}
const postController = async (req,res) =>{
    await user.create(req.body)
    res.status(200).json({createduser:user})

}


module.exports = {
    postController,getController
}