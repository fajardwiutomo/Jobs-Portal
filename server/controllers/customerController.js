const { Job, User, Company, Customer } = require("../models");
const { comparePass } = require("../helpers/bcrypt")
const { tokenPayload } = require("../helpers/jwt");
const { query } = require("express");
const {Op} = require("sequelize")

class Controller {
    static async registerCustomer(req, res, next){
        try {
            const { username, email, password, phoneNumber, address } = req.body 
                const response = await Customer.create({
                    username,
                    email,
                    password,
                    role: "customer",
                    phoneNumber,
                    address,
                })
                res.status(201).json({id: response.id, email: response.email})
        } catch (error) {
            next(error)
        }
    }


    static async loginCustomer(req, res, next){
        try {
            const { email, password } = req.body

            if(!email || !password) {
                throw{
                    code: 400,
                    name: " Unauthorized",
                    message: "email or password must required"
                }
            }

            const emailFound = await Customer.findOne({
                where: {
                    email
                }
            })

            if(!emailFound){
                throw {
                    code: 401,
                    name: "Unauthorized",
                    message: "Invalid username, email or password",
                }
            } else {
                const compare = comparePass(password, emailFound.password)
                if(!compare) {
                    throw {
                        code: 401,
                        name: "Unauthorized",
                        message: "Invalid username, email or password",
                    }
                } else {
                    const payload = {
                        id: emailFound.id
                    }
                    const token = tokenPayload(payload)
                    res.status(200).json({
                        access_token: token
                    })
                }
            }


        } catch (error) {
            next(error)
        }
    }


    static async getAll(req, res, next){
        try {
            let { page, title, jobType } = req.query;
            let limit = 9
            let options = {
                where: {
                    [Op.and]: []
                },
                include: jobType,
                order: [["title","desc"]]
            };

            if(!page){
                page = 1
            }

            if(page) {
                options.limit = limit
                options.offset = (page - 1) * limit
            }

            if(title) {
                options.where[Op.and].push({
                    title: {
                        [Op.lte]: title
                    }
                })
            }

            if(jobType) {
                options.where[Op.and].push({
                    jobType,
                })
            }
            const response = await Job.findAndCountAll(options)
            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }

    static async getJobById(req, res, next) {
        try {
          const { id } = req.params;
          let result = await Job.findByPk(id);
          if (!result) {
            throw {
              code: 404,
              name: "Not Found",
              message: `Job not found with id ${req.params.id}`,
            };
          } else {
            res.status(200).json(result);
          }
        } catch (error) {
          next(error);
        }
      }

}

module.exports = Controller