const { getDataById, updateList } = require('../../../database/queries');
const boomify = require('../../../utils/boomify');

const updateListHandler = (req, res, next) => {
  const { userId } = req;
  const { todoListTitle, todoListId } = req.body;
  getDataById(todoListId).then((data) => data.rows[0].userId).then((DBuserId) => {
    if (DBuserId !== userId) {
      throw boomify(401, 'user unAutheraized');
    }
    return updateList(todoListTitle, todoListId);
  }).then((data) => res.json({
    msg: 'Your Todo List has been updated successfully',
    data: data.rows[0],
  }))
    .catch(next);
};

module.exports = { updateListHandler };
