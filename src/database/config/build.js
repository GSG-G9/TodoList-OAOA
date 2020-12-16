/* eslint-disable no-console */
const { join } = require('path');
const { readFileSync } = require('fs');
const connection = require('./connection');

const buildDB = (name) => {
  const sql = readFileSync(join(__dirname, `${name}.sql`)).toString();
  connection
    .query(sql)
    .then(() => console.log('DB created successfully'))
    .catch((err) => console.log(err));
};

module.exports = buildDB;
