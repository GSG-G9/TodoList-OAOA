const connection = require('../../config/connection');

const deleteTask = () => {
  const sql = {
  };
  return connection.query(sql);
};

module.exports = { deleteTask };
