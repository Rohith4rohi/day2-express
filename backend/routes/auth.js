const express = require('express');
const router = express.Router();
const pool = require('../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createUser, findUserByEmail } = require('../models/user');
const authMiddleware = require('../middleware/auth');
require('dotenv').config();

// SIGNUP
router.post('/signup', async (req, res) => {
  const { name, phone, email, password } = req.body;
  if (!name || !phone || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const existingUser = await pool.query('SELECT * FROM users WHERE email=$1', [email]);
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const password_hash = await bcrypt.hash(password, 10);
    const newUser = await pool.query(
      'INSERT INTO users(name, phone, email, password_hash) VALUES($1,$2,$3,$4) RETURNING *',
      [name, phone, email, password_hash]
    );

    const token = jwt.sign({ id: newUser.rows[0].id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    res.json({ user: newUser.rows[0], token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


// SIGNIN
router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'Email and password required' });

  const user = await findUserByEmail(email);
  if (!user) return res.status(400).json({ message: 'Invalid credentials' });

  const isMatch = await bcrypt.compare(password, user.password_hash);
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

  res.json({ user: { id: user.id, name: user.name, phone: user.phone, email: user.email }, token });
});

// PROFILE
router.get('/me', authMiddleware, async (req, res) => {
  res.json(req.user);
});

module.exports = router;
