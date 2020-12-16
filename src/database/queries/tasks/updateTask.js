const connection = require('../../config/connection');

const updateTask = (id, details, status, userId) => {
  const sql = {
    text: 'UPDATE tasks SET details = $1, status= $2 WHERE id = $3 AND todoListId = (SELECT id FROM todoLists WHERE userId = $4) returning *;',
    values: [details, status, id, userId],
  };
  return connection.query(sql);
};

module.exports = { updateTask };
