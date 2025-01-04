const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT;
const Contact = require('./model/connect');
const cors = require('cors');
app.use(cors());


// Middleware to parse JSON request bodies
app.use(express.json());

// Replace with your MongoDB URI
const mongoURI = process.env.MONGO_URL;

// Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

// Handle form submissions (POST request)
app.post('/connect', async (req, res) => {
    const { name, email, subject, message } = req.body;

    // Check if all fields are provided
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // Create a new contact entry
    const newContact = new Contact({ name, email, subject, message });

    try {
        // Save the contact to the database
        await newContact.save();
        res.status(201).json({ message: "Contact saved successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error saving contact", error: error.message });
    }
});

// Simple home route
app.get('/', (req, res) => {
    res.send("Working");
});

// Start the server
app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
});
