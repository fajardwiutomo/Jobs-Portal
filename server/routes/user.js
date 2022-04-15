const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const authGoogleController = require('../controllers/authGoogleControlller')


router.post("/register", userController.register)
router.post("/login", userController.login)
router.post("/authGoogle", authGoogleController.authGoogle)



module.exports = router