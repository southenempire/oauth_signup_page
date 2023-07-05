const express = require("express")
const passport = require('passport')
const {postController} = require('../controllers/signUpContoller')
const router =  express.Router()

router.post('/',passport.authenticate('google'), postController)

module.exports = router