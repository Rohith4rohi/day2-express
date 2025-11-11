const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: String(process.env.DB_PASSWORD), // ensure password is a string
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT, 10),
});

module.exports = pool;
