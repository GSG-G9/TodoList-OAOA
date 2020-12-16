const connection = require('../config/connection');

const isUserExist = (userId) => {
  const sql = {
    text: 'SELECT id from users where id = $1;',
    values: [userId],
  };

  return connection.query(sql)
    .then((data) => ({
      isThere: data.rows.length !== 0,
      userId: data.rows[0].id,
    }));
};

module.exports = { isUserExist };
