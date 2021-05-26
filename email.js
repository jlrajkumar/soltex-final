
const express = require('express');
const   sgMail = require('@sendgrid/mail');

require('dotenv').config();
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


app.use(express.json()); //Used to parse JSON bodies

//Mail Functionality
app.post('/submitform',(req, res, next)=>{
    
   console.log(req.body);
   res.render("Thanks, Submitted form details successfully!!");
}

)

const port = "3000";
app.listen(port, () => {
    console.log(` app listening at http://localhost:${port}`)
  })


  app.get('/', (req,res)=>{
      res.send("Thanks!!");
  })



/*
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
   
const msg = {
to: 'jlrkumarjaddu@gmail.com', // Change to your recipient HR@COMPANY.COM
from: 'lakshman.jaddu@gmail.com', // Change to your verified sender
subject: 'A new contact form has submitted on your website',
//`Name : {outputmsg.Name } , Phone: {outputmsg.Phone}, Email:{outputmsg.Email}, Message:{outputmsg.Message}`,
text: 'A new form has submitted by a new user ',


};

sgMail
.send(msg)
.then(() => {
console.log('Email sent')
//console.log(req.body.subject);
})
.catch((error) => {
console.error(error)
})

*/