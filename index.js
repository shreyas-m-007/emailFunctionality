const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000; 

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
    host: 'INETMAIL.EMRSN.NET',
    port: 25,
    secure: false, 
    auth: {
        user: 'shreyas.mohite@emerson.com',
        pass: 'your-pass'
    }
});


app.get('/sendEmail', async (req, res) => {
    try {
        // Create email message
        const mailOptions = {
            from: '"Software Renewal Test Mail" <shreyas.mohite@emerson.com>', // Sender address
            to: 'parminder.singh@emerson.com', // Recipient address (your own email)
            subject: 'Renew your Software License', // Subject line
            text: 'Hello from Nodemailer!', // Plain text body
            html: '<b>Hello from <i>Nodemailer</i>!</b></br><p>This is a test email to check the functionality of email reminder functionality!</p>', // HTML body
        };

        // Send the email
        await transporter.sendMail(mailOptions);
        res.send('Email sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email.');
    }
});


app.listen(port, () => {
    console.log(`NodemailerProject is listening at http://localhost:${port}`);
});
