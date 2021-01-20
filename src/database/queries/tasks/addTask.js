const connection = require('../../config/connection');

const addTask = (taskDetail, todoListId) => {
  const sql = {
    text: 'INSERT INTO tasks(details, todoListId) VALUES ($1, $2) returning *;',
    values: [taskDetail, todoListId],
  };

  return connection.query(sql);
};

module.exports = { addTask };
