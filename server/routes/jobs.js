const express = require('express')
const authentication = require("../midlewares/auth")
const {authorization, verifyAdmin} = require("../midlewares/authorization")
const router = express.Router()
const Controller = require('../controllers/controller')



router.post("/jobs", authentication, Controller.createJob)
router.get("/jobs", authentication, Controller.getJob)
router.get("/jobs/:id",authentication, Controller.getJobById)
router.put("/jobs/:id",authentication,authorization, Controller.updateJob)
router.patch("/jobs/:id",authentication, authorization, verifyAdmin, Controller.updateStatus)
router.delete("/jobs/:id",authentication,authorization, Controller.deleteJob)

module.exports = router