const express = require('express');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define a schema and model for storing form submissions
const ContactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now }
});
const Contact = mongoose.model('Contact', ContactSchema);

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Endpoint to handle form submission
app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  try {
    // Store form data in MongoDB
    const contact = new Contact({ firstName, lastName, email, message });
    await contact.save();

    // Send email
    const mailOptions = {
      from: process.env.EMAIL,
      to: 'dharun12351@gmail.com',
      subject: 'New Contact Form Submission',
      text: `You have a new message from ${firstName} ${lastName} (${email}):\n\n${message}`
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent and saved successfully' });
  } catch (error) {
    console.error("Detailed error:", error);  // Add this to log detailed error info

    res.status(500).json({ message: 'Error sending message', error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
