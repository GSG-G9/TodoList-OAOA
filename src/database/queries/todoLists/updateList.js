const connection = require('../../config/connection');

const updateList = (title, listId) => {
  const sql = {
    text: 'UPDATE todoLists SET title = $1 WHERE id = $2 RETURNING * ;',
    values: [title, listId],
  };
  return connection.query(sql);
};

module.exports = { updateList };
