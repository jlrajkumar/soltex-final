const mongoose = require('mongoose');
var mongooseTypePhone = require('mongoose-type-phone');

const contactReqSchema = new mongoose.Schema({
    fname : {
        type : String,
        required: true
    }, 

    lname : {
        type : String,
        required: true,
    },

    email : {
        type : String,
        required: true
    }, 

    tel : {
        type : String,
        required: true,
       
    }, 

    message : {
        type : String,
        required: true
    }, 
    
    submitted : {
        type : String
    }, 

  
} ,
{ timestamps: true }
)


//Creating a collection 
const ContactFormSubmission = new mongoose.model("ContactFormSubmissions", contactReqSchema );

module.exports = ContactFormSubmission;