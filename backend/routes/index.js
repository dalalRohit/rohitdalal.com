require('dotenv').config();
var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");
// const cors=require('cors');

const sendMail=async (info) => {
  // Step 1  
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL, // TODO: your gmail account
      pass: process.env.PASSWORD  // TODO: your gmail password
    }
  });

  // Step 2
  let mailOptions = {
    from: `Rohit Dalal ${process.env.EMAIL}`, // TODO: email sender
    to: `${info.name}  ${info.email}`, // TODO: email receiver
    subject: 'Nodemailer - Test',
    text: info.message
  };


  //Step 3
  let data=await transporter.sendMail(mailOptions);

  console.log(`E-Mail sent to ${info.email} succesfully!.. \n ${data.messageId}`);

}


//POST /send
router.post('/send',async (req, res) => {
  let {name,email,message,contact} = req.body;

  let data={
    name:name.trim(),
    email:email.trim(),
    message:message.trim(),
    contact:contact.trim()
  }
  
  sendMail(data)
    .then( () => {
      res.status(201).send({
        msg:"Mail sent succesfully!",
        success:true
      })
    })
    .catch( () => {
      res.status(500).send({
        msg:'E-Mail sending failed!',
        error:false
      })
    });
  
})


module.exports = router;
