const connection = require('../../config/connection');

const addList = () => {
  const sql = {
  };
  return connection.query(sql);
};

module.exports = { addList };
