const { join } = require('path');
const { readFileSync } = require('fs');
const connection = require('./connection');

function buildDB = (name) =>  {

  const sql = readFileSync(join(__dirname, `${name}.sql`)).toString();
  connection
    .query(sql)
    .then(() => console.log('DB created successfuly'))
    .catch(err => console.log(err));

}

module.exports = buildDB;