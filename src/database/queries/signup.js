const connection = require('../config/connection');

const signup = () => {
  const sql = {
  };
  return connection.query(sql);
};

module.exports = { signup };
