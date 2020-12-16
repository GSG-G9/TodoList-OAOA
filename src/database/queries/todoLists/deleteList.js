const connection = require('../../config/connection');

const deleteList = (userId, todoListID) => {
  const sql = {
    text: 'DELETE FROM todoLists WHERE userId =$1 AND id =$2 RETURNING *',
    values: [userId, todoListID],
  };
  return connection.query(sql);
};

module.exports = { deleteList };
