import { useState, useEffect } from 'react';
import { Cron } from 'react-js-cron';
import styles from './cron.module.scss'

export default function ScheduleEmailComponent() {
    const [cronValue, setCronValue] = useState('*/5 * * * *'); // default 5 minutes

    useEffect(() => {
        const submitCronValue = async () => {
            try {
                await fetch('http://localhost:4000/schedule-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ cron: cronValue }),
                });
                console.log('Email schedule set successfully!');
            } catch (error) {
                console.error('Error setting email schedule.', error);
            }
        };
 
        submitCronValue();

    }, [cronValue]);

    return (
        <div className={styles.container}>
            <Cron value={cronValue} setValue={setCronValue} />
        </div>
    )

}

// const express = require("express");
// const app = express();
// const cors = require("cors");

// const cron = require('node-cron');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     type: 'OAuth2',
//     user: 'ervandharutyunyan06096@gmail.com',
//     clientId: '386647202931-oh0gjf6nlm71jmkj2nh1ja21k4sr18oo.apps.googleusercontent.com', // Your clientId
//     clientSecret: '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', // Your clientSecret
//     refreshToken: '1//04QXpz3Koe02TCgYIARAAGAQSNwF-L9IrQDu4zmvuPVvX30qd05jm30-BHctww8BFo9kL3qDJLI9lyBYK3TdOFxpWTCGSdj3JPRU'//your refreshToken
//   }
// });

// cron.schedule('* * * * *', sendEmail); // */5 * * * * every 5 minute
// const sendEmailUser = ['ervand.harutyunyan@solicy.net', 'erikharutyunyan565@gmail.com',] // 'ah2840812@gmail.com'
// function sendEmail() {
//   const mailOptions = {
//     from: 'ervandharutyunyan06096@gmail.com',
//     to: sendEmailUser.join(','),
//     subject: 'notification subject',
//     text: 'text',
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent:', info.response);
//     }
//   });
// }

// app.use(express.urlencoded({ extended: true }));
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

// const PORT = process.env.PORT ?? 4000;
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

// app.listen(PORT, () => {
//   console.log(`Server ${PORT}`);// My BE port http://localhost:4000/, FE http://localhost:3000/
// });

// You must install these packages

// npm i nodemailer
// npm i node-cron
// npm i body-parser
// npm i cors
