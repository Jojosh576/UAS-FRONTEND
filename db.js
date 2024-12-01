require('dotenv').config();
const { Client } = require('pg');

// Konfigurasi koneksi menggunakan variabel lingkungan
const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

async function connectAndQuery() {
  try {
    await client.connect();
    const res = await client.query('SELECT * FROM your_table');
    console.log(res.rows);
  } catch (err) {
    console.error('Error connecting to PostgreSQL database:', err);
  } finally {
    await client.end();
  }
}

connectAndQuery();