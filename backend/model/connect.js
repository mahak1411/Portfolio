const mongoose = require('mongoose');

// Define the schema
const connectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});

// Create a model
const Contact = mongoose.model('Contact', connectSchema);

// Export the model
module.exports = Contact;
