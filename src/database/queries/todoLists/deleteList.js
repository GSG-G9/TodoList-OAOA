const connection = require('../../config/connection');

const deleteList = () => {
  const sql = {
  };
  return connection.query(sql);
};

module.exports = { deleteList };
