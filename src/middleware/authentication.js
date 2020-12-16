const { verify } = require('../utils/jwt');
const { boomify } = require('../utils/boomify');
const { isUserExist } = require('../database/queries');

const authenticate = (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (typeof token !== 'string') {
      throw new Error();
    }
    verify(token)
      .then((decoded) => isUserExist(decoded.userId))
      .then((re) => {
        const { isThere, userId } = re;
        if (isThere) {
          req.userId = userId;
        } else {
          throw new Error();
        }
      }).catch(() => {
        next(boomify(401, 'Request cookie is invalid.'));
      });
  } catch (err) {
    next(boomify(401, 'Request cookie is invalid.'));
  }
};

module.exports = { authenticate };
