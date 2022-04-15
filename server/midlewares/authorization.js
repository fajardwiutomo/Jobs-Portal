const { User, Job , History} = require("../models");

const user = require("../models/user");

const authorization = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const role = req.user.role;

        const findJob = await Job.findByPk(id);
        if (!findJob) {
          throw {
            code: 404,
            name: "Not Found",
            message: "Your job not found",
          };
        } else {
            if(role !== "Admin" && findJob.authorId !== userId) {
                throw {
                        code: 403,
                        name: "Forbidden",
                        message: "Your cannot access",
                      };
            } else {
                next()
            }
        }
  } catch (error) {
    next(error);
  }

}

const verifyAdmin = async (req, res, next) => {
  const { id } = req.params;
  try {
      const role = req.user.role;
      if(role !== "Admin"){
          throw {
              name:"Forbidden",
              code:403,
              message: "Staff cannot access"
          };
      }
      next();
  } catch(error){
      next(error);
  }

};

module.exports = {authorization, verifyAdmin }
