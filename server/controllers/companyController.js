const {Company} = require("../models");

class Controller {
    static async findAllCompany (req, res, next){
        try {
            const company = await Company.findAll()
            res.status(200).json({
                company
            })
        } catch (error){
            next(error)
        }
    }

}

module.exports = Controller