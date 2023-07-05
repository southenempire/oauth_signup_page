const express = require("express")
const {postController} = require('../controllers/signUpContoller')
const router =  express.Router()

router.post('/', postController)

module.exports = router