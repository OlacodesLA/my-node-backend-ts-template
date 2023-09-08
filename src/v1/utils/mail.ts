import nodemailer from "nodemailer";

const sendEmail = async (options: any) => {
  const transporter = nodemailer.createTransport({
   service: 'yahoo',
   host: 'smtp.mail.yahoo.com',
   port:465,
   secure: false,
   auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS,
   },
   debug:true,
   logger:true,
  });

  const message = {
    from: `${process.env.FROM_NAME} <${process.env.AUTH_EMAIL}>`,
    to: options.email,
    subject: options.subject,
    text: 'Verify account fella',
    html:options.message
  };

  const info = await transporter.sendMail(message);
return info;
}

export {
  sendEmail
}