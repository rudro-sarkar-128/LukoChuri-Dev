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
        const info = await transporter.sendMail({
            from: '"Verify" <info.lukochuri@gmail.com>',
            to: email,
            subject: "Verify Your Account!",
            text: "Enter This OTP To Verify Your Account",
            html: `<h2 style="color: #FE0B18;">${otp}</h2>`,
        });

        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", transporter.getTestMessageUrl(info));
    } catch (err) {
        console.error("Error while sending mail:", err);
    }
}

module.exports = {
    sendOTP,
};