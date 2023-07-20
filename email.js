
const express = require('express');
const   sgMail = require('@sendgrid/mail');
const path = require('path');
require('dotenv').config();
require ('./db/conn');

const ContactFormSubmission = require('./models/contactform');
const app = express();


app.use(express.json()); //Used to READ  body fields
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname)));

app.post("/submitform", (req, res)=>{
 

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  
const msg = {
to: 'jlrkumarjaddu@gmail.com', // Change to your recipient HR@COMPANY.COM
from: 'jlrkumarjaddu@gmail.com', // Change to your verified sender
subject: `${req.body.fname} has submitted a request on your website`,
text: `Name: ${req.body.fname} \nEmail: ${req.body.email} \nPhone: ${req.body.tel} \nMessage: ${req.body.message}`,
html: `

<strong> 
  Name: ${req.body.fname} <br> 
  Email: ${req.body.email} <br>  
  Phone: ${req.body.tel} <br> 
  Message: ${req.body.message} 
</strong>
`
}


sgMail
.send(msg)
.then((req, res) => {
console.log('Email sent Successfully!!')
})
.catch((error) => {
console.error(error)
})








  var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();






 /* Start of Save to DB*/
    try{
       const contactReq =  new ContactFormSubmission({
           fname : req.body.fname,
           lname : req.body.lname,
           email : req.body.email,
           tel   : req.body.tel,
           message   : req.body.message, 
           submitted : date
           
       })

     const formsubmit =  contactReq.save();  
     
     /* End of Save to DB*/

       res.status(201).redirect("thanks.html");
      

    }catch(error){
        res.status(400).send(error);
    }
})



var port = process.env.PORT || 3200;
app.listen(port, () => {
    console.log(` app listening at Port: ${port}`)
  });




