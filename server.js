const express =  require('express');
const cookieParser =  require('cookie-parser');
const bodyParser =  require('body-parser') ;
const hbs = require('express-hbs');
const path = require('path');
const expressValidator =  require('express-validator') ;
const session =  require('express-session') ;
const user = require('./routes/user.route');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.engine('hbs', hbs.express4({
   partialsDir: __dirname + '/views/partials'
 }));
 app.set('view engine', 'hbs');
 app.set('views', __dirname + '/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(expressValidator());
app.use(cookieParser());
app.use(session({secret: 'prr', saveUninitialized: false, resave: false}));

app.use('/cimplyfive',user);

/*app.get('/', function(req, res){
   res.send('hello world');
});*/
app.get('/',function(req,res){
	res.set({
		'Access-Control-Allow-Origin' : '*'
	});
	return res.redirect('/routes/user.route.js');
}).listen(3000);
console.log("Server listening at : 3000");
/*app.listen(PORT, function(){
  console.log('Server is running on',PORT);
});*/
/*app.listen(PORT, function(){
  console.log('Server is running on',PORT);
});*/
/*var express = require('express');
var path = require('path'); 
 //var MongoClient = require('MongoDB').MongoClient; 
var bodyParser = require('body-parser');
var app = express();
const hbs = require('express-hbs');
var expressValidator=require('express-validator');
var expressSession=require('express-session');
//const { check } = require('express-validator/check');
//const { body,validationResult } = require('express-validator/check');
//const { sanitizeBody } = require('express-validator/filter');
//enter the name of the database in the end 
const user = require('./routes/user.route');
app.get('/',function(req,res){
	res.set({
		'Access-Control-Allow-Origin' : '*'
	});
	return res.redirect('/public/html/index.html');
}).listen(3000);

console.log("Server listening at : 3000");
app.use('/public', express.static(__dirname + '/public'));
app.use( bodyParser.json() );
app.use(expressValidator);
//app.use(express.static(path.join(_dirname,'public')));
//app.use(expressSession({secret:'prr',saveUninitialized:false,resave:false}));
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
	extended: true
}));

// Sign-up function starts here. . .
/*
app.post('/register',function(req,res){
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
console.log("is it finehere?");
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
		});
	});
	
	console.log("DATA is " + JSON.stringify(data) );
	res.set({
		'Access-Control-Allow-Origin' : '*'
	});
		return res.redirect('/public/html/success.html');  
client.close(); 

});*/
													