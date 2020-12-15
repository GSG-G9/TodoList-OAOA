const connection = require('../../config/connection');

const addTask = () => {
  const sql = {
  };
  return connection.query(sql);
};

module.exports = { addTask };
