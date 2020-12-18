const bcrypt = require('bcrypt');

const { checkUser, signup } = require('../../database/queries');
const { signupSchema } = require('../../utils/validation');
const { boomify } = require('../../utils/boomify');

const signupHandler = (req, res, next) => {
  try {
    const {
      password, email,
    } = req.body;
    const { error } = signupSchema.validate(req.body);
    if (error) {
      throw boomify(400, error.message);
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
      .catch(next);
  } catch (error) {
    next(error);
  }
};
module.exports = { signupHandler };
