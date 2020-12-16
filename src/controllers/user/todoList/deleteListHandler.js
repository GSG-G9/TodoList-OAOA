const { boomify } = require('../../../utils/boomify');
const { deleteList } = require('../../../database/queries');

const deleteListHandler = (req, res, next) => {
  try {
    const { todoListId } = req.body;
    const { userId } = req;

    if (!todoListId) {
      throw boomify(400, 'User id id required');
    }

    deleteList(todoListId, userId)
      .then((re) => {
        res.status(200).json({ msg: 'List is deleted', data: re.rows[0] });
      })
      .catch((err) => next(err));
  } catch (err) {
    next(err);
  }
};

module.exports = { deleteListHandler };
