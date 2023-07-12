const express = require("express")
const passport = require('passport')
const {postController} = require('../controllers/signUpContoller')
require("./strategies/googlestra")

const router =  express.Router()

router.post("/", postController )
router.get("/auth/gooogle", passport.authenticate('google', {scope:["email","profile"]}))
router.get("/auth/google/callback", passport.authenticate("google",{
    successRedirect:"/",
    failureRedirect:"/"
}))


module.exports = router
