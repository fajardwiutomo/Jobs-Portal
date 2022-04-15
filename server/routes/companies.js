const express = require('express')
const authentication = require("../midlewares/auth")
const {verifyAdmin} = require('../midlewares/authorization')
const {authorization} = require("../midlewares/authorization")
const router = express.Router()
const Controller = require('../controllers/historyController')
const companyController = require('../controllers/companyController')

router.get('/companies',authentication, companyController.findAllCompany)


module.exports = router