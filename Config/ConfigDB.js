'use strict'
const mysql = require('mysql');
require('dotenv').config();
const config  = {
  connectionLimit: 10,
  host            : process.env.DB_HOST,
  user            : process.env.DB_USER_NAME,
  password        : process.env.DB_PASSWORD,
  database        : process.env.DB_NAME
};

const conn = new mysql.createPool(config);

module.exports = conn;