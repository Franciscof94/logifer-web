const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const path = require("path");


const PORT = process.env.PORT || 3001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log("You are listening on port " + "" + PORT);
});

app.post("/api/form", (req, res) => {
  const data = req.body;
  let transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  transporter.sendMail(
    {
      from: data.email,
      to: "nashkan94@yahoo.com",
      subject: `${data.subject}`,
      html: `<!DOCTYPE html>
          <html><head><title></title>
          <style>
              .container {
                  border: 3px solid #A9A8AE;
                  border-radius: 8px;
                  height: 100%;
                  width: 100%
              }
              .header {
                  color: white;
                  background-color: #3342B1;
                  border-top-left-radius: 8px;
                  border-top-right-radius: 8px;
                  width: 100%;
                  height: 15vh;
              }
              .emailContainer {
                  font-size: 24px;
                  color: white;
                  padding: 10px 0 0 15px;
              }
              .subjectContainer {
                  font-size: 24px;
                  color: white;
                  padding: 15px 0 10px 15px;
              }
              .message {
                  margin: 25px;
                  font-size: 18px
              }
              .infoContainer {
                  
              }
              .email {
                  font-size: 16px;
              }
              .subject {
                  font-size: 16px
              }
          
          </style>
          </head>
              <body>
              <div class="container">
                  <div class="header">
                      <div class="infoContainer">
                          <div class="emailContainer">Email: <div class="email">${data.email}</div></div>
                          <div class="subjectContainer">Asunto: <div class="subject">${data.subject}</div></div>
                      </div>
                  </div>
                  <div class="message">
                      ${data.message}
                  </div>
              </div>
              </body>
          </html>`,
    },

    function (err, info) {
      err
        ? res.json({ message: "an error ocured; check the server's console" })
        : res.json({ message: `message sent with ID: ${info.messageId}` });
    }
  );
});
