const express = require("express")
const passport = require('passport')
const {postController, getController} = require('../controllers/signUpContoller')
require("../strategies/googlestra")

const router =  express.Router()

router.get("/", getController )
router.get("/auth/gooogle", passport.authenticate('google', {scope:["email","profile"]}))
router.get("/auth/google/callback", passport.authenticate("google",{
    successRedirect:"/auth/sucess",
    failureRedirect:"/auth/failure"
}))


module.exports = router
