const connection = require('../config/connection');

const login = () => {
  const sql = {
  };
  return connection.query(sql);
};

module.exports = { login };
