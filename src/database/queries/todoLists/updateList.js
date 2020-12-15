const connection = require('../../config/connection');

const updateList = () => {
  const sql = {
  };
  return connection.query(sql);
};

module.exports = { updateList };
