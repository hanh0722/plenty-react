const bcrypt = require("bcrypt");

const validationPassword = require("../helper/checkPassword");
const User = require("../models/user");

exports.postLogin = (req, res, next) => {};

exports.postRegister = (req, res, next) => {
  const { name, email, password, phone } = req.body;
  const validatePassword = validationPassword(password);

  if (
    !name ||
    !email ||
    !password ||
    !phone ||
    !validatePassword ||
    !email.includes("@") ||
    password.length < 10
  ) {
    return res.status(422).json("not validation");
  }
  bcrypt.hash(password, 12, (err, hash) => {
    if (err) {
      return res.status(500).json("error in hash");
    }
    const newUser = new User({
      name,
      password: hash,
      email,
      phone,
    });
    newUser
      .save()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  });
};
