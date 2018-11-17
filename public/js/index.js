var express = require('express');
var fs = require('fs')

var app = express()

app.get('/', function (req, res) {
  res.send('Registration!');
}) 

app.get('/register', function(req,res){
	// this is how we will receive params from front end 
	
	var fname = req.query.fname; 
  var mname = req.query.mname; 
  var lname = req.query.lname; 
  var email = req.query.email;
  var mobile=req.query.mobile;
  var orga_name=req.query.orga_name;
  var design=req.query.design;
  var off_no=req.query.off_no;
  var add1=req.query.add1;
  var add2=req.query.add2;
  var lmark=req.query.lmark;
  var pin=req.query.pin;
  var city=req.query.city;
  var state=req.query.state;
  var country=req.query.country;
  var email_di=req.query.email_di;
  //For demo purpose
  console.log(name + '' + email + ' ' + password);

  /**
   * Store this in a database and perform further processing
   */
    res.send("In Registration module")
});

app.listen(3000, function () {
  console.log('Server is listening at 3000')
})
					