const connection = require('../../config/connection');

const deleteTask = (userId, taskId) => {
  const sql = {
    text: 'DELETE FROM tasks WHERE todoListId = (SELECT id FROM todoLists WHERE userId = $1) AND id = $2 RETURNING * ;',
    values: [userId, taskId],
  };
  return connection.query(sql);
};

module.exports = { deleteTask };
