const connection = require('../../config/connection');

const addList = (userId, todoListTitle) => {
  const sql = {
    text: 'INSERT INTO todoLists(title, userId) VALUES ($1, $2) returning *;',
    values: [todoListTitle, userId],
  };
  return connection.query(sql);
};

module.exports = { addList };
