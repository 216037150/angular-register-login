const express = require('express');
const pool = require('./db.js');
const bcrypt = require('bcrypt'); 
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json());


// app.post('/register', async (req, res) => {
  
//   const { username, email, password } = req.body;

//   try {
    
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const result = await pool.query(
//       'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
//       [username, email, hashedPassword]
//     );

//     res.status(201).json(result.rows[0]);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Error registering user.');
//   }
//   // res.status(201).json({ username, email, password })
// });


// app.post('/login', async (req, res) => {
//     const { email, password } = req.body;
    
//    try {
//       const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  
//       if (result.rows.length === 0) {
//         return res.status(401).send('Invalid email or password.');
//       }
  
//       const user = result.rows[0];
  
     
//       const validPassword = await  user.password;
  
//       if (!validPassword) {
//         return res.status(401).send('Invalid email or password.');
//       }
  
//       res.status(200).send('Login successful!');
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send('Error logging in.');
//     }
//   });
  

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


// app.post('/login', async (req, res) => {
//   const { email, password } = req.body; // Get email and password from request body
  
//   try {
//     // Step 1: Retrieve the user from the database using the email
//     const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

//     if (result.rows.length === 0) {
//       // No user found
//       return res.status(401).send('Invalid email or password.');
//     }

//     const user = result.rows[0]; // Extract the user record

//     // Step 2: Compare provided password with the hashed password
//     const validPassword = await bcrypt.compare(password, user.password);

//     if (!validPassword) {
//       // Password does not match
//       return res.status(401).send('Invalid email or password.');
//     }

//     // Step 3: Successful login
//     res.status(200).send('Login successful!');
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Error logging in.');
//   }
// });


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

    res.status(200).json({message: 'Login successful!'});

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error logging in.');
  }
});



app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
