const express = require('express');
const router =  express.Router();
var MongoClient = require('MongoDB').MongoClient; 
var new_db = "mongodb://localhost:27017/registration";
sampleCollection='details';
router.get('/', function(req, res){
   res.render('index', { success: req.session.success, errors: req.session.errors });
   req.session.errors = null;
});
module.exports =  router;
router.post('/register', function(req, res) {
  var fname=req.body.fname;
  var mname=req.body.mname;
  var lname=req.body.lname;
  var email= req.body.email;
  var mobile= req.body.mobile;
  var orga_name=req.body.orga_name;
  var design=req.body.design;
  var off_no=req.body.off_no;
  var add1=req.body.add1;
  var add2=req.body.add2;
  var lmark=req.body.lmark;
  var pin=req.body.pin;
  var city=req.body.city;
  var state=req.body.state;
  var country=req.body.country;
  var email_di=req.body.email_di;
   req.checkBody('fname','Invalid First Name')
  .isAlpha()
  .withMessage('Name Must be only alphabetical characters')
  .isLength({ min: 2 })
  .withMessage('Must be at least 2 characters long long'),
  // req.checkBody('mname','Invalid Middle Name').isAlpha(),
   req.checkBody('lname','Invalid Last Name').isAlpha(),
   req.checkBody('lname', 'Last Name is required').notEmpty(),
   req.checkBody('email', 'Email is required').notEmpty(),
   req.checkBody('email', 'Invalid email ID').isEmail(),
 // req.checkBody('mobile', 'Invalid mobile number').isMobilePhone(),
  req.checkBody('orga_name','Invalid Organisation Name').isAlphanumeric(),
   req.checkBody('orga_name', 'Organisation Name is required').notEmpty(),
   req.checkBody('design','Invalid Designation ').isAlphanumeric(),
   req.checkBody('design', 'Designation  is required').notEmpty(),
  req.checkBody('off_no','Invalid Office Number').isNumeric(),
  req.checkBody('off_no', 'Office Number  is required').notEmpty(),
   req.checkBody('add1', 'Address Line 1  is required').notEmpty(),
  req.checkBody('pin', 'Pin Code is required').notEmpty(),
    req.checkBody('pin', 'Pin Code is Invalid').isNumeric(),
    req.checkBody('pin', 'Pin Code should be minimum of 5 digits').isLength({ min: 5 }),
    req.checkBody('city', 'City Name is required').notEmpty(),
   req.checkBody('city','Invalid City Name').isAlpha(),
       req.checkBody('state', 'State Name is required').notEmpty(),
   req.checkBody('state','Invalid State Name').isAlpha(),
       req.checkBody('country', 'Country Name is required').notEmpty();
   var errors = req.validationErrors();
   if(errors){

      req.session.errors = errors;
      req.session.success = false;
      res.redirect('/cimplyfive');
   }
   else{

      req.session.success = true;
      var data = {
    "fname":fname,
    "mname":mname,
    "lname":lname,
    "email":email,
    "mobile":mobile,
    "orga_name":orga_name,
    "design":design,
    "off_no":off_no,
    "add1":add1,
    "add2":add2,
    "lmark":lmark,
    "pin":pin,
    "city":city,
    "state":state,
    "country":country,
    "email_di":email_di
  }
  
  MongoClient.connect(new_db , function(error , client){
    if (error){
      throw error;
    }
    console.log("connected to database successfully");
     const db = client.db('registration');
    //CREATING A COLLECTION IN MONGODB USING NODE.JS
    db.collection(sampleCollection).insertOne(data, (err , collection) => {

      if(err) throw err;
       
      console.log("Record inserted successfully");
      console.log(collection);
      var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'cimplyfive084@gmail.com',
    pass: 'Cimply_123'
  }
});

var mailOptions = {
  from: 'cimplyfive084@gmail.com',
  to: email,
  subject: 'CimplyFive Registeration',
  text: 'You have succesfully registered!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
 
    });
  });
  
  console.log("DATA is " + JSON.stringify(data) );
  res.set({
    'Access-Control-Allow-Origin' : '*'
  });
  



    return  res.redirect('/html/success.html'); 
client.close(); 
  
   }
   


});