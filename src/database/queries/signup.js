const connection = require('../config/connection');

const signup = (user) => {
  const sql = {
    text: 'INSERT INTO users(firstName, lastName, email, password, createdAt) VALUES ($1, $2, $3, $4, $5) RETURNING * ;',
    values: [user.firstName, user.lastName, user.email, user.password, Date.now()],
  };
  return connection.query(sql)
    .then((result) => `${result.rows[0].firstname} has been created successfully`);
};

module.exports = { signup };
