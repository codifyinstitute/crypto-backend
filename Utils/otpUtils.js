const crypto = require('crypto');
const nodemailer = require('nodemailer');

// Function to generate a 6-digit numeric OTP
const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // Generates a 6-digit OTP
};

// Function to format OTP with spaces between digits
const formatOTPWithSpaces = (otp) => {
    return otp.split('').join(' '); // Adds a space between each digit
};

// Function to send OTP email with HTML styling and spaced OTP
const sendOTPEmail = async (email, otp) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Use your email provider
        auth: {
            user: 'codifyinstitute@gmail.com',
            pass: 'ejyexoaehlbwdmqj'
        }
    });

    const formattedOTP = formatOTPWithSpaces(otp);

    const mailOptions = {
        from: 'codifyinstitute@gmail.com',
        to: email,
        subject: 'Your OTP Code',
        html: `
            <div style="font-family: Arial, sans-serif; color: #333;">
                <h2 style="color: #4CAF50;">Your OTP Code</h2>
                <p>Dear user,</p>
                <p>Thank you for using our service. Please use the following One Time Password (OTP) to complete your transaction:</p>
                <p style="font-size: 24px; font-weight: bold; color: #333; background-color: #f4f4f4; padding: 10px; display: inline-block;">
                    ${formattedOTP}
                </p>
                <p>This OTP is valid for the next 10 minutes.</p>
                <p>If you did not request this OTP, please ignore this email.</p>
                <br />
                <p>Best regards,</p>
                <p>Codify Institute</p>
            </div>
        `
    };

    await transporter.sendMail(mailOptions);
};

module.exports = {
    generateOTP,
    sendOTPEmail
};
