const pool = require('../db');

const createUser = async ({ name, phone, email, password_hash }) => {
  const result = await pool.query(
    'INSERT INTO users (name, phone, email, password_hash) VALUES ($1, $2, $3, $4) RETURNING id, name, phone, email, created_at',
    [name, phone, email, password_hash]
  );
  return result.rows[0];
};

const findUserByEmail = async (email) => {
  const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  return result.rows[0];
};

const findUserById = async (id) => {
  const result = await pool.query('SELECT id, name, phone, email, created_at FROM users WHERE id = $1', [id]);
  return result.rows[0];
};

module.exports = { createUser, findUserByEmail, findUserById };
