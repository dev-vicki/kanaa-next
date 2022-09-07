import { NextApiHandler } from 'next';
import { createTransport } from 'nodemailer'

const handler: NextApiHandler = (req, res) => {
  // Get data submitted in request's body.
  const body = req.body;

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!body.name || !body.mobile) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: 'First or last name not found' });
  }
  

  const transporter = createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'shajansheriff@gmail.com',
      pass: process.env.GOOGLE_PASS,
    },
    secure: true,
  })
  const mailData = {
    from: 'shajansheriff@gmail.com',
    to: 'shajansheriff@gmail.com',
    subject: `Message From ${req.body.name}`,
    html: `<div>${req.body.mobile}</div><p>Sent from:
    ${req.body.email}</p>`
  }

  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })

  res.status(200)


  // Found the name.
  // Sends a HTTP success code
  res.status(200).json({ data: body });
};

export default handler;
