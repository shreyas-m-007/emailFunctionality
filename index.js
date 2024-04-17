const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000; // Change this to your desired port

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'company.007.work@gmail.com',
        pass: '**********',
    },
    secure: true, // Use SSL/TLS
});

// Define a route to send an email
app.get('/sendEmail', async (req, res) => {
    try {
        // Create email message
        const mailOptions = {
            from: '"Company" <company.007.work@gmail.com>', // Sender address
            to: 'shreyasmohite001@gmail.com', // Recipient address (your own email)
            subject: 'Test Email', // Subject line
            text: 'Hello from Nodemailer!', // Plain text body
            html: '<b>Hello from <i>Nodemailer</i>!</b>', // HTML body
        };

        // Send the email
        await transporter.sendMail(mailOptions);
        res.send('Email sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email.');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`nodemailerProject is listening at http://localhost:${port}`);
});
