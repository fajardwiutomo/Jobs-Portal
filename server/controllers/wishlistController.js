const {Job, Customer, Wishlist } = require ('../models')

class WishlistController {
    static async getWishlist (req, res, next){
        try {
            const response = await Wishlist.findAll({
                include: [Customer, Job],
                order: [["createdAt", "desc"]]
            })
            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    } 


    static async create(req, res, next) {
        try {
           const CustomerId = req.customer.id
           const {JobId} = req.params
            const response = await Wishlist.create({
            CustomerId, 
            JobId
        })
        res.status(201).json({response})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = WishlistController