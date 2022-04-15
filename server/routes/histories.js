const express = require('express')
const authentication = require("../midlewares/auth")
const {verifyAdmin} = require('../midlewares/authorization')
const {authorization} = require("../midlewares/authorization")
const router = express.Router()
const Controller = require('../controllers/historyController')

router.get('/histories',authentication, Controller.findAllHistory)


module.exports = router