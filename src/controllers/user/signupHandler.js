const bcrypt = require('bcryptjs');

const { signupSchema } = require('../../utils/validation');
const { signup } = require('../../database/queries');
const { boomify } = require('../../utils/boomify');
const { checkUser } = require('../../database/queries');

const signupHandler = (req, res, next) => {
  try {
    const {
      password, email,
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
    }).then((hash) => signup({ ...req.body, password: hash }))
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
