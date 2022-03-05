
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/about", router);

const port = 3001;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
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

router.post("/about", (req, res) => {
  console.log(req);
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





// const express = require("express");
// const nodemailer = require("nodemailer");
// require("dotenv").config();

// const app = express();
// app.route("/").get(function (req, res) {
//   res.sendFile(process.cwd() + "/public/index.html");
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}...`);
// });

// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   auth: {
//     user: "delineodiseasemodeling@gmail.com",
//     pass: "Bluejay123"
//   },
// });


// transporter.verify(function (error, success) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Server is ready");
//   }
// });

// app.post("http://localhost:3000/about", (req, res) => {
//   console.log(req);
//   const firstName = req.body.firstName;
//   const lastName = req.body.lastName;
//   const email = req.body.email;
//   const subject = req.body.subject; 
//   const comment = req.body.comment; 
//   const mail = {
//     from: `${firstName}${' '}${lastName}`,
//     to: "gytong0429@gmail.com",
//     subject: "Contact Us Submission",
//     html: `<p>FirstName: ${firstName}</p>
//            <p>LastName: ${lastName}</p>
//            <p>Email: ${email}</p>
//            <p>Subject: ${subject}</p>
//            <p>Comment: ${comment}</p>`,
//   };

//   transporter.sendMail(mail, (err) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send("Error.");
//     } else {
//       res.status(200).send("Email successfully sent.");
//     }
//   });
// });
