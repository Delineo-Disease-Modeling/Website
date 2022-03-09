
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/about", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});


const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "delineodiseasemodeling@gmail.com",
    pass: "Bluejay123"
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

app.post("/about", async (req, res) => {
  
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const subject = req.body.subject; 
  const comment = req.body.comment; 
  const mail = {
    from: `${firstName}${' '}${lastName}`,
    to: "delineodiseasemodeling@gmail.com",
    subject: "Contact Us Form",
    html: `<p>FirstName: ${firstName}</p>
           <p>LastName: ${lastName}</p>
           <p>Email: ${email}</p>
           <p>Subject: ${subject}</p>
           <p>Comment: ${comment}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});


