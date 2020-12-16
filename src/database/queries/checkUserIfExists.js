const connection = require('../config/connection');

const checkUser = (email) => {
  const sql = {
    text: 'SELECT id from users where email = $1;',
    values: [email],
  };
  return connection.query(sql)
    .then((data) => data.rows.length !== 0);
};

module.exports = { checkUser };
