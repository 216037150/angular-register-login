const { Pool } = require('pg');

const pool = new Pool({
  user: 'Siyabonga',
  host: 'localhost',
  database: 'angulardb',
  password: 'Siya@100',
  port: 5432,
});


async function connectDb() {
  try {
    await pool.connect();
    console.log("Database connected successfully!!!");
  } catch (error) {
    console.error("Failed to connect:", error.message);
  }
}
connectDb();

module.exports = pool;
