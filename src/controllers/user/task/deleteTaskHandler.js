const deleteTask = require('../../../database/queries/tasks/deleteTask');

const deleteTaskHandler = (req, res, next) => {
  const { userId } = req;
  const { taskId } = req.body;
  deleteTask(userId, taskId).then((data) => res.json({
    msg: 'Your Todo List has been updated successfully',
    data: data.rows[0],
  }))
    .catch(next);
};

module.exports = { deleteTaskHandler };

//
