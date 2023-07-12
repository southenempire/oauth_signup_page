const express = require("express")
const passport = require('passport')
const {postController} = require('../controllers/signUpContoller')
const router =  express.Router()

router.post("/", postController )
router.get("/auth/gooogle", passport.authenticate('google', {scope:["email","profile"]}))


module.exports = router
