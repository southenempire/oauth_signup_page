const express = require("express")
const passport = require('passport')
const {postController, getController} = require('../controllers/signUpContoller')
require("../strategies/googlestra")

const router =  express.Router()

router.get("/", getController )
router.post("/auth", postController, passport.authenticate('google', {scope:["email","profile"]}))
router.get("/auth/google/callback", passport.authenticate("google",{
    successRedirect:"/",
    failureRedirect:"/auth/failure"
}))


module.exports = router
