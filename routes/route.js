const express = require("express")
const passport = require('passport')
const {register, getController} = require('../controllers/signUpContoller')
require("../strategies/googlestra")

const router =  express.Router()

router.get("/", getController )
router.post("/auth", register, passport.authenticate('google', {scope:["email","profile"]}))
router.get("/auth/google/callback", passport.authenticate("google",{
    successRedirect:"/",
    failureRedirect:"/auth/failure"
}))


module.exports = router