const { User } = require("../models");
const { generateToken } = require("../helper/jwt");
const { hashPassword, comparePassword } = require("../helper/bcrypt");

class UserControllers {
  static async userRegister(req, res) {
    const { username, email, password } = req.body;

    await User.create({
      username,
      email,
      password,
    })
      .then((result) => {
        res.status(201).json(result);
      })
      .then((err) => {
        res.status(500).json(err);
      });
  }

  static async userLogin(req, res) {
    try {
      const { email, password } = req.body;
      const userData = await User.findOne({
        where: {
          email,
        },
      });
      if (!userData) {
        return res
          .status(401)
          .json({ message: "User not Found", name: "User Login Error" });
      }
      // const comparedPassword = comparePassword(password, data.password);
      const token = generateToken({
        id: userData.id,
      });

      if (token) {
        return res.status(200).json({ token });
      }
    } catch (err) {
      return res.status(500).json({ msg: err });
    }
  }
}

module.exports = UserControllers;
