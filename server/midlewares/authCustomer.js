const {readPayload} = require('../helpers/jwt')
const { Customer } = require('../models')

const authenticationCustomer =  async (req, res, next) => {
    try {
        const { access_token } = req.headers ;
        if(!access_token) {
            throw {
                code: 401,
                name: "Unauthorized",
                message: "Token must provided"
            }
        } else {
            const payload = readPayload(access_token)
            const userFound = await Customer.findByPk(payload.id)
            if(!userFound) {
                throw {
                    name: "Unauthorized",
                    code: 401,
                    message: "Invalid token or user"
                
                }
            }
    
            req.customer = {
                id: userFound.id,
                email: userFound.email,
                role: userFound.role,
                username: userFound.username
            }
    
            //sleding
            next()

        }

    } catch (error) {
        next(error)
    }
}

module.exports = authenticationCustomer