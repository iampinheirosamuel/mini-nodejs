import express from 'express';
import sendgrid from '@sendgrid/mail';

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('contact', { title: 'Contact' });
});

// nodemailer
router.post('/send', (req, res) => {
  sendgrid.setApiKey('');
  const msg = {
    from: 'Website <pinheirolaoluwa@gmail.com>',
    to: 'samuel.pinheiro@multiskills-ng.com',
    subject: 'Website Submission Test',
    text: `You have jus received a request from your website: Name- ${req.body.name} Emmail- ${req.body.email} Message- ${req.body.message}`,
    html: `<p>You have jus received a request from your website:<br> Name- ${req.body.name}<br> Emmail- ${req.body.email}<br> Message- ${req.body.message}</p>`,
  };
  sendgrid.send(msg);

  res.redirect('/');
  // const transporter = nodemailer.createTransport({
  //   service: 'Gmail',
  //   auth: {
  //     user: 'pinheirolaoluwa@gmail.com',
  //     password: 'samuel40',
  //   },
  // });

  // const mailOptions = {
  //   from: 'Website <pinheirolaoluwa@gmail.com>',
  //   to: 'samuel.pinheirolaoluwa@multiskills-ng.com>',
  //   subject: 'Website Submission Test',
  //   plain: `You have jus received a request from your website: Name- ${req.body.name} Emmail- ${req.body.email} Message- ${req.body.message}`,
  //   html: `<p>You have jus received a request from your website: Name- ${req.body.name} Emmail- ${req.body.email} Message- ${req.body.message}</p>`,

  // };

  // transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     console.log(error);
  //     res.redirect('/');
  //   } else {
  //     console.log(`Message Sent: ${info.response}`);
  //     res.redirect('/');
  //   }
  // });
});

module.exports = router;
