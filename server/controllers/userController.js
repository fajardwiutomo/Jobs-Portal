const { Job, User, Company } = require("../models");
const { hashPass, comparePass } = require("../helpers/bcrypt");
const { tokenPayload } = require("../helpers/jwt");

class UserController {
  static async register(req, res, next) {
    try {
      const { username, email, password, phoneNumber, address } = req.body;
      const result = await User.create({
        username,
        email,
        password,
        role: "Admin",
        phoneNumber,
        address,
      });
      res.status(201).json({ id: result.id, email: result.email });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      
      if (!email || !password) {
        throw {
          code: 400,
          name: "Unauthorized",
          message: "username or email or password must required",
        };
      }

      const emailFound = await User.findOne({
        where: {
          email,
        },
      });

      if (!emailFound) {
        throw {
          code: 401,
          name: "Unauthorized",
          message: "Invalid username, email or password",
        };
      } else {
        const compare = comparePass(password, emailFound.password);

        if (!compare) {
          throw {
            code: 401,
            name: "Unauthorized",
            message: "Invalid username, email or password",
          };
        } else {
          const payload = {
            id: emailFound.id,
          };

          //buat token
          const token = tokenPayload(payload);
          // next();

          res.status(200).json({
            access_token: token,
          });
        }
      }
      //compare pssword
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
