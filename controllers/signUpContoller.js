const user = require("../model/signupModel")

const getController = async (req,res,next) =>{
    res.send("testing")
}
const postController = async (req,res,next) =>{

}


module.exports = {
    postController,getController
}