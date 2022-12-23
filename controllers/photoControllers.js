const { User, Photo } = require("../models");

class photoControllers {
  static async getAllPhotos(req, res) {
    try {
      const findPhoto = await Photo.findAll({
        include: User,
      });
      return res.status(201).json(findPhoto);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async getOnePhotoById(req, res) {
    try {
      let id = req.params.id;
      const findPhoto = await Photo.findOne({
        where: {
          id: id,
        },
      });

      if (!findPhoto) {
        return res.status(404).json({ msg: "Photo not found" });
      }
      return res.status(201).json(findPhoto);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async createPhoto(req, res) {
    try {
      const { title, caption, image_url } = req.body;

      const createPhoto = await Photo.create({
        title,
        caption,
        image_url,
      });

      if (!createPhoto) {
        console.log("eor ");
        return res.status(400).json({ msg: "failed create Photos" });
      }

      return res.status(200).json(createPhoto);
    } catch (error) {
      let errorMes = error.name;
      if (
        errorMes === "SequelizeUniqueConstraintError" ||
        errorMes === "SequelizeValidationError"
      ) {
        return res.status(400).json({ message: error.errors[0].message });
      }
      return res.status(500).json(error);
    }
  }

  static updateOnePhotoById(req, res) {
    let id = req.params.id;
    const { title, caption, image_url } = req.body;
    let data = {
      title,
      caption,
      image_url,
    };
    Photo.update(data, {
      where: { id },
      returning: true,
    })
      .then((result) => {
        res.status(200).json(result);
      })
      .then((err) => {
        res.status(500).json(err);
      });
  }

  static deleteOnePhotoById(req, res) {
    let id = req.params.id;
    Photo.destroy({
      where: { id },
    })
      .then((result) => {
        res.status(200).json(`Deleted id ${id} successfull`);
      })
      .then((err) => {
        res.status(500).json(err);
      });
  }
}

module.exports = photoControllers;
