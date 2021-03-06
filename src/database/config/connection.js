const { Pool } = require('pg');

let DB_URL = '';

switch (process.env.NODE_ENV) {
  case 'production':
    DB_URL = process.env.DATABASE_URL;
    break;
  case 'development':
    DB_URL = process.env.DB_URL_DEV;
    break;
  case 'test':
    DB_URL = process.env.DB_URL_TEST;
    break;
  default:
    throw new Error('there is no database url');
}

const option = {
  connectionString: DB_URL,
  ssl: process.env.NODE_ENV === 'production',
};

module.exports = new Pool(option);
