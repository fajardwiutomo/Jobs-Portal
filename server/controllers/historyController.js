const {History} = require("../models");

class Controller {
    static async findAllHistory (req, res, next){
        try {
            const histories = await History.findAll()
            res.status(200).json({
                histories
            })
        } catch (error){
            next(error)
        }
    }

}

module.exports = Controller