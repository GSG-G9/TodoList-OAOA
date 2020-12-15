const connection = require('../../config/connection');

const updateTask = () => {
  const sql = {
  };
  return connection.query(sql);
};

module.exports = { updateTask };
