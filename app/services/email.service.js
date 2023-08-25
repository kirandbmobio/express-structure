require('dotenv').config();

const nodemailer = require('nodemailer');

exports.sendMail = async (data) => {
  console.log(process.env);
  let transporter = await nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    }
  });

  const output = `
        <p>Welcome to the ${data.projectName}</p>
        <p>To reset your Password <b> <a href = "${data.resetLink}"> Click Here </a></b></p>
        `;
  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: data.toEmail,
    subject: data.subject,
    html: data.output ? data.output : output,
  };
  if (data.attachments) {
    mailOptions.attachments = data.attachments;
  }
  return await transporter.sendMail(mailOptions);
};
