const bcrypt = require('bcryptjs');
// const { signupSchema } = require('../../utils/validation');
const Joi = require('joi');
const { signup } = require('../../database/queries');
const { boomify } = require('../../utils/boomify');
const { checkUser } = require('../../database/queries');

const signupHandler = (req, res, next) => {
  try {
    const signupSchema = Joi.object({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required(),
    });
    const {
      firstName, lastName, password, email,
    } = req.body;
    const { error } = signupSchema.validate(req.body);
    if (error) {
      throw boomify(400, 'Bad request');
    }
    checkUser(email).then((isExists) => {
      if (isExists) {
        throw boomify(400, 'Email is already exists');
      }
      return bcrypt.hash(password, 10);
    }).then(
      (hash) => signup({
        firstName,
        lastName,
        password: hash,
        email,
      }),
    )
      .then((data) => {
        res.json({ message: data });
      })
      .catch((err) => next(boomify(400, err.message)));
  } catch (error) {
    next(error);
  }
};
module.exports = { signupHandler };

// take body from request => validate => check email if exist => hash password =>  insert into DB
