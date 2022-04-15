const { Job, User, Company , History} = require("../models");

class Controller {
  static async createJob(req, res, next) {
    try {
      const { title, description, imgUrl, companyId, jobType } =
        req.body;
      const result = await Job.create({
        title,
        description,
        imgUrl,
        companyId,
        authorId: req.user.id,
        jobType,
      });

      await History.create({
        title,
        description: `Job with id ${result.id} created`,
        updatedBy: req.user.username,
        entityId: result.id
      })
      res.status(201).json({ result, message: "Success Create Job" });
    } catch (error) {
      next(error);
    }
  }

  static async getJob(req, res, next) {
    try {
      const result = await Job.findAll({
        include: [Company, User],
        order: [["createdAt", "desc"]],
      });
      res.status(200).json(result);
    } catch (error) {
      next(error);
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

  static async updateJob(req, res, next) {
    try {
      const { id } = req.params;

      let result = await Job.findByPk(id);
      if (!result) {
        throw {
          code: 404,
          name: "Job not Found",
          message: `Job not found with id ${req.params.id}`,
        };
      } else {
        const { title, description, imgUrl, companyId, jobType } =
          req.body;
        let updateJob = await Job.update(
          {
            title,
            description,
            imgUrl,
            companyId,
            authorId: req.user.id,
            jobType,
          },
          {
            where: {
              id: +id,
            },
            returning: true,
          }
        );

        await History.create({
          title,
          description: `Job with id ${result.id} updated`,
          updatedBy: req.user.username,
          entityId: result.id
        })
        res.status(200).json(updateJob[1][0]);
      }
    } catch (error) {
      next(error);
    }
  }

  static async deleteJob(req, res, next) {
    try {
      let { id } = req.params;
      let foundId = await Job.findByPk(id);
      if (!foundId) {
        throw {
          code: 404,
          name: "Job not Found",
          message: `Job not found with id ${req.params.id}`,
        };
      } else {
        Job.destroy({
          where: {
            id: +id,
          },
        });
        res.status(200).json({
          message: `job success to delete`,
        });
      }
    } catch (error) {
      next(error);
    }
  }

  static async updateStatus(req, res, next){
    try{
      const { id } = req.params
      const {status, title} = req.body
      console.log(id)
        let result = await Job.findByPk(id);
        if (!result) {
          throw {
            code: 404,
            name: "Not Found",
            message: `Job not found with id ${req.params.id}`,
          };
        } else {
            await History.create({
                title,
                description: `Job with id ${result.id} status has been updated from ${result.status} into ${status}`,
                updatedBy: req.user.username,
                entityId: result.id
            })

            let updateJob = await Job.update(
              {
               status,
              },
              {
                where: {
                  id: +id,
                },
                returning: true,
              }
            );
            
          res.status(200).json(result);
        }           
    } catch (error){
      console.log(error)
        next(error)
    }
}
}

module.exports = Controller;
