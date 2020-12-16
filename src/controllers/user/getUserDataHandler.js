const { getUserData } = require('../../database/queries');

const getUserDataHandler = (req, res, next) => {
  const { userId } = req;
  getUserData(userId)
    .then((data) => {
      res.json(data);
    }).catch((err) => {
      next(err);
    });
};

module.exports = { getUserDataHandler };
