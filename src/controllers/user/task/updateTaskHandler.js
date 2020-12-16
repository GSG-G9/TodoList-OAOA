const { updateTask } = require('../../../database/queries');

const updateTaskHandler = (req, res, next) => {
  const { taskTitle, taskStatus, taskId } = req.body;
  const { userId } = req;

  updateTask(taskId, taskStatus, taskTitle, userId)
    .then((data) => data.rows[0])
    .then((data) => {
      res.json({
        msg: 'Task list updated',
        data,
      });
    })
    .catch((err) => next(err));
};

module.exports = { updateTaskHandler };
