require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    port: 465,
    auth: {
        user: 'info.lukochuri@gmail.com',
        pass: process.env.GOOGLE_APP_PASS
    }
});

async function sendOTP(email, otp) {
    try {
        await transporter.sendMail({
            from: '"Verify" <info.lukochuri@gmail.com>',
            to: email,
            subject: "Verify Your Account!",
            text: "Enter This OTP To Verify Your Account",
            html: `<h2 style="color: #FE0B18;">${otp}</h2>`,
        });
    } catch (err) {
        console.error("Error while sending mail:", err);
    }
}

module.exports = {
    sendOTP,
};