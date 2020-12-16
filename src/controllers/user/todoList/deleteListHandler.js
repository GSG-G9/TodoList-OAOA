const { boomify } = require('../../../utils/boomify');
const { deleteList } = require('../../../database/queries');
const { verify } = require('../../../utils/jwt');

const deleteListHandler = (req, res, next) => {
  try {
    const { todoListId } = req.body;
    if (typeof todoListId !== 'string') {
      throw boomify(400, 'User id id required');
    }

    verify(req.cookies.userId)
      .then((decode) => {
        const { userId } = decode;
        return deleteList(todoListId, userId);
      }).then((re) => {
        res.status(200).json({ msg: 'List is deleted', data: re.rows[0] });
      })
      .catch((err) => next(err));
  } catch (err) {
    next(err);
  }
};

module.exports = { deleteListHandler };
