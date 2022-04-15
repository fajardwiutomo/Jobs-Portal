const express = require('express')
const router = express.Router()
const authenticationCustomer = require("../midlewares/authCustomer")
const customerController = require('../controllers/customerController')
const WishlistController = require('../controllers/WishlistController')
const authGoogleCustomerController = require('../controllers/authGoogleCustomerController')




router.post("/pub/register", customerController.registerCustomer)
router.post("/pub/login", customerController.loginCustomer)
router.post("/pub/authGoogle", authGoogleCustomerController.authGoogleCustomer)
router.get("/pub/jobs", customerController.getAll)
router.get("/pub/jobs/:id", customerController.getJobById)
router.get("/pub/wishlists",authenticationCustomer, WishlistController.getWishlist)
router.post("/pub/wishlists/:JobId",authenticationCustomer, WishlistController.create)




module.exports = router