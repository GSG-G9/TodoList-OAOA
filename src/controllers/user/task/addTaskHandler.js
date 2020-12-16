const addTaskHandler = (req, res, next) => {

};

module.exports = { addTaskHandler };

const { addTask } = require('../../../database/queries');
const { addListSchema } = require('../../../utils/validation');
const { boomify } = require('../../../utils/boomify');

const addListHandler = (req, res, next) => {
  try {
    const { taskDetail, todoListId } = req.body;
    const { userId } = req;

    addTask(todoListId, taskDetail)
      .then((data) => data.rows[0])
      .then((data) => {
        res.json({
          msg: 'new task created',
          data,
        });
      })
      .catch((err) => next(boomify(400, err.message)));
  } catch (error) {
    next(error);
  }
};

module.exports = { addListHandler };
