const nodemailer = require("nodemailer");
require('dotenv').config();

const sendEmail = async (req, res) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'nabajyotimodak2000@gmail.com',
            pass: process.env.EMAIL_PASSWORD
        }
    });
    
    let info = await transporter.sendMail({
        from: "nabajyotimodak2000@gmail.com",
        to: 'naba93980@gmail.com',
        subject: 'hello',
        html: '<h1>hi mr naba93980, how are you</h1>'
    })
    res.send(info);
}
module.exports = sendEmail;