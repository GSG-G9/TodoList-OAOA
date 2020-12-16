const connection = require('../../config/connection');

const getDataById = (todoListId) => {
  const sql = {
    text: 'SELECT * from todoLists WHERE AND id = $1;',
    values: [todoListId],
  };
  return connection.query(sql);
};

module.exports = { getDataById };
