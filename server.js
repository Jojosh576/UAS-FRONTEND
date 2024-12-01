const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const path = require('path');
const bcrypt = require('bcrypt');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const pool = new Pool({
    user: 'your_db_user',
    host: 'localhost',
    database: 'your_db_name',
    password: 'your_db_password',
    port: 5432,
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/api/signup', async (req, res) => {
    const { username, password } = req.body;
    try {
        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await pool.query(
            'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
            [username, hashedPassword]
        );
        res.status(201).json({ message: 'Signup successful', user: result.rows[0] });
    } catch (err) {
        if (err.code === '23505') { // Unique violation error code
            res.status(400).json({ error: 'Username already exists' });
        } else {
            res.status(500).json({ error: 'Database error' });
        }
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});