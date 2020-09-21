const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require("cors")({ origin: true })
const admin = require("firebase-admin")
admin.initializeApp();



const mailTransport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: 'gmail',
    auth: {
        user: functions.config().gmail.email,
        pass: functions.config().gmail.password,
    },
});


exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {

        const mailOptions = {
            from: req.body.email,
            to: "toporka1@gmail.com",
            subject: 'Nowa wiadomość od klienta Sovrana!',
            html: `
                 <div 
                 style=
                 "
                 padding:3rem 0;
                 border:2px solid #ff5200;
                 text-align:center;
                 font-size:20px;
                 font-family: 'Montserrat', sans-serif;
                 color:#ff5200;
                  "
                  >
                    <p>Nowa wiadomość od <span style='font-weight:bold'>${req.body.name}</span></p>
                    <p >E-mail od <span style='font-weight:bold'>${req.body.email}</span></p>
                    <p style='font-weight:bold; font-size: 1.8rem; margin:1.5rem;'>Treść </p>
                    <p style='font-weight:bold; width:70%; margin:0 auto;'> ${req.body.message}</p>
                <div>
            `

                


        };

        return mailTransport.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.send(error.toString());
            }
            return res.send("Sent!");
        });

    });
});




