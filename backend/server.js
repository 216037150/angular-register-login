
require('dotenv').config();
const express = require('express');
const pool = require('./db.js');
const bcrypt = require('bcrypt');
const cors = require('cors')
const port = process.env.PORT||5000;



const app = express();
app.use(cors())
app.use(express.json());


app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
      [username, email, hashedPassword]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error registering user.');
  }
});


app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (result.rows.length === 0) {
      return res.status(401).send('Invalid email or password.');
    }
    const user = result.rows[0];
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).send('Invalid email or password.');
    }
    res.status(200).json({ message: 'Login successful!' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error logging in.');
  }
});




app.listen(port, () => {
  
  console.log(`Server is running on http://localhost:${port}`);
});
