

const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.route("/").get(function (req, res) {
  res.sendFile(process.cwd() + "/public/index.html");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "delineodiseasemodeling@gmail.com",
    pass: "bluejay123"
  },
});


transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready");
  }
});

app.post("/send", (req, res) => {
  console.log(req);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const subject = req.body.subject; 
  const comment = req.body.comment; 
  const mail = {
    from: `${firstName}${' '}${lastName}`,
    to: "gytong0429@gmail.com",
    subject: "Contact Us Submission",
    html: `<p>FirstName: ${firstName}</p>
           <p>LastName: ${lastName}</p>
           <p>Email: ${email}</p>
           <p>Subject: ${subject}</p>
           <p>Comment: ${comment}</p>`,
  };

  transporter.sendMail(mail, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error.");
    } else {
      res.status(200).send("Email successfully sent.");
    }
  });
});
