const bcrypt = require('bcryptjs');
const { sign } = require('../../utils/jwt');
const { login } = require('../../database/queries');
const { boomify } = require('../../utils/boomify');
const { loginSchema } = require('../../utils/validation/loginSchema');

const loginHandler = (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { error } = loginSchema.validate(req.body);
    if (error) {
      throw boomify(400, error.message);
    }
    let userId = '';
    login(email)
      .then((data) => {
        if (data.rows.length === 0) {
          throw boomify(400, 'Bad request');
        }
        userId = data.rows[0].id;
        return bcrypt.compare(password, data.rows[0].password);
      }).then((succeed) => {
        if (!succeed) {
          throw boomify(400, 'Bad request');
        }
        return sign({ userId });
      }).then((token) => {
        res.cookie('token', token);
        res.status(200).json({
          msg: 'login succeed',
        });
      })
      .catch((err) => next(err));
  } catch (err) {
    next(err);
  }
};

module.exports = { loginHandler };
