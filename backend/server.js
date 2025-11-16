const express = require('express'); 
const mysql = require('mysql'); 
const cors = require('cors'); 
const bcrypt = require('bcrypt');

const app = express(); 
app.use(cors()); 
app.use(express.json()); 

const db = mysql.createConnection({
    host: 'your-host', 
    user: 'your-root',
    password: 'your-pwd', 
    database: 'your-db'
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database.');
});


// Signup logic
app.post('/signup', async (req, res) => {
    console.log('Request body:', req.body);

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const sql = "INSERT INTO buildingdetails (name, email, password, street_address, state, zip_code, area, no_of_floors, year_built, purpose_usage) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.name,
        req.body.email, 
        hashedPassword,
        req.body.streetAddress, 
        req.body.state,
        req.body.zipCode, 
        req.body.area,
        req.body.noOfFloors, 
        req.body.yearBuilt, 
        req.body.purposeUsage
    ];

    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error inserting data into database:', err);
            return res.status(500).json({ message: 'Error occurred while inserting data', error: err });
        }
        return res.status(201).json({ message: 'User registered successfully' });
    });
}); 

// Login logic
app.post('/login', (req, res) => {
    const sql = "SELECT * FROM buildingdetails WHERE email = ?";

    db.query(sql, [req.body.email], async (err, data) => {
        if (err) { 
            console.error('Error retrieving data from database:', err);
            return res.status(500).json({ message: 'Error occurred while fetching data', error: err });
        }
        if (data.length > 0) {
            const user = data[0];
            const isMatch = await bcrypt.compare(req.body.password, user.password);
            if (isMatch) {
                return res.json({ message: 'Login successful' }); 
            } else {
                return res.status(401).json({ message: 'Invalid credentials' }); 
            }
        } else {
            return res.status(404).json({ message: 'User not found' }); 
        }
    });
});

// Users logic
app.get('/users', (req, res) => {
    const sql = "SELECT name, email, password, street_address, state, zip_code, area, no_of_floors, year_built, purpose_usage FROM buildingdetails"; 
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            return res.status(500).json({ message: 'Internal Server Error', error: err });
        }
        res.json(results);
    });
});

//Utilization logic
app.post('/utilization', (req, res) => {
    const utilizationData = req.body;  // Directly access the array of objects

    utilizationData.forEach((entry) => {
        const { day, time, occupancy } = entry;

        const sql = "INSERT INTO utilization (day, time, number_of_occupancy) VALUES (?, ?, ?)";
        console.log('Executing SQL:', sql, [day, time, occupancy]);  // Log the SQL query

        db.query(sql, [day, time, occupancy], (err, result) => {
            if (err) {
                console.error('Error inserting data into database:', err);
                return res.status(500).json({ message: 'Error occurred while inserting data', error: err });
            }
            console.log('Data inserted:', result);  // Log the result
        });
    });

    res.status(200).json({ message: 'Data inserted successfully' });
});

// Start the server
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
