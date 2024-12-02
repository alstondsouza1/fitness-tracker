// Get required packages
const express = require('express');
const mariadb = require('mariadb');

const methodOverride = require('method-override');

// Configure the database connection
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'your_new_password',
    database: 'fitness_tracker'
});

// Helper function to connect to the database
async function connect() {
    try {
        let conn = await pool.getConnection();
        console.log('Connected to the database');
        return conn;
    } catch (err) {
        console.error('Error connecting to the database:', err);
        throw err;
    }
}

// Instantiate an express app
const app = express();
const PORT = 3000; // Define the port

// Middleware
app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(express.static('public')); // Serve static files
app.set('view engine', 'ejs'); // Set EJS as the view engine
app.use(methodOverride('_method'));

// Routes

// Home Route
app.get('/', (req, res) => {
    res.redirect('/workouts');
});

const motivationalQuotes = [
    "Push yourself, because no one else is going to do it for you.",
    "Success starts with self-discipline.",
    "The only bad workout is the one that didn’t happen.",
    "You are stronger than you think.",
    "Don’t stop when you’re tired. Stop when you’re done."
];

// Modify the '/workouts' route to include a random quote
app.get('/workouts', async (req, res) => {
    const conn = await connect();
    try {
        const rows = await conn.query('SELECT * FROM workouts ORDER BY date DESC;');
        const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
        res.render('index', { workouts: rows, randomQuote });
    } catch (err) {
        console.error('Error fetching workouts:', err);
        res.status(500).send('Error fetching workouts');
    } finally {
        conn.release();
    }
});

// Display form to add a new workout
app.get('/workouts/new', (req, res) => {
    res.render('add-workout');
});

// Add a new workout
app.post('/workouts', async (req, res) => {
    const { type, duration, calories_burned, notes } = req.body;
    const conn = await connect();
    try {
        const query = 'INSERT INTO workouts (type, duration, calories_burned, note) VALUES (?, ?, ?, ?)';
        await conn.query(query, [type, duration, calories_burned, notes]);
        res.redirect('/workouts');
    } catch (err) {
        console.error('Error adding workout:', err);
        res.status(500).send('Error adding workout');
    } finally {
        conn.release();
    }
});

// View details of a specific workout
app.get('/workouts/:id', async (req, res) => {
    const { id } = req.params;
    const conn = await connect();
    try {
        const rows = await conn.query('SELECT * FROM workouts WHERE id = ?;', [id]);
        if (rows.length > 0) {
            res.render('workout-details', { workout: rows[0] });
        } else {
            res.status(404).send('Workout not found');
        }
    } catch (err) {
        console.error('Error fetching workout details:', err);
        res.status(500).send('Error fetching workout details');
    } finally {
        conn.release();
    }
});

// About Page
app.get('/about', (req, res) => {
    res.render('about');
});

// Delete a workout
app.delete('/workouts/:id', async (req, res) => {
    const { id } = req.params;
    const conn = await connect();
    try {
        await conn.query('DELETE FROM workouts WHERE id = ?;', [id]);
        res.redirect('/workouts');
    } catch (err) {
        console.error('Error deleting workout:', err);
        res.status(500).send('Error deleting workout');
    } finally {
        conn.release();
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
