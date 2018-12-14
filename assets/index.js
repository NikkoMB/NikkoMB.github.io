var nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  port: 25,
  auth: {
    user: 'nikko.bustillo18@gmail.com',
    pass: '4fire123'
  },
  tls: {
    rejectUnauthorized: false
  }
});

let HelperOptions = {
  from: '"John" <nikko.bustillo18@gmail.com',
  to: 'nikko.bustillo18@gmail.com',
  subject: 'dd',
  text: 'dd'
};



  transporter.sendMail(HelperOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("The message was sent!");
    console.log(info);
  });
