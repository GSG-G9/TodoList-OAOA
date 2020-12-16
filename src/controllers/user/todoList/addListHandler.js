const { addList } = require('../../../database/queries');
const { addListSchema } = require('../../../utils/validation');
const { boomify } = require('../../../utils/boomify');

const addListHandler = (req, res, next) => {
  try {
    const { todoListTitle } = req.body;
    const { userId } = req;

    const { error } = addListSchema.validate({ todoListTitle });
    if (error) {
      throw boomify(400, error.message);
    }

    addList(userId, todoListTitle)
      .then((data) => data.rows[0])
      .then((data) => {
        res.json({
          msg: 'new list created',
          data,
        });
      })
      .catch((err) => next(boomify(400, err.message)));
  } catch (error) {
    next(error);
  }
};

module.exports = { addListHandler };
