const connection = require('../config/connection');

const getUserData = () => {
  const sql = {
  };
  return connection.query(sql);
};

module.exports = { getUserData };
