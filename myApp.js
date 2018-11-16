
var express = require('express');
var bodyParser =require('body-parser')

var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//var port = 3000;

//app.use( function (req, res, next){
//  console.log(req.method + " " + req.path+ " " + '-' + " " + req.ip);
 // next();
//})

//app.get('/', function(req, res){
//  res.sendFile( __dirname+ "/views/index.html");
//})



// --> 7)  Mount the Logger middleware here


// --> 11)  Mount the body-parser middleware  here


/** 1) Meet the node console. */
//console.log("Hello World");

/** 2) A first working Express Server */
//app.get('/',function(req, res){
  //res.send('Hello Express');
//})

/** 3) Serve an HTML file */
//app.get('/', function(req, res){
//  res.sendFile(__dirname + "/views/index.html");
//})

/** 4) Serve static assets  */
//app.use(express.static(__dirname+'/public'))

/** 5) serve JSON on a specific route */
//app.get('/json', function(req, res){
 //res.json({"message": "Hello json"});
//})

/** 6) Use the .env file to configure the app */
/*app.get('/json', function (req, res){
  let object = {"message": "Hello json"};
  if(process.env.MESSAGE_STYLE == 'uppercase'){
    object.message=object.message.toUpperCase();
    res.json(object);
  }else{
    res.json(object);
  }
});*/
 
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !
/*app.use(
function(req, res, next){
  //method path ip
  console.log(req.method + " " + req.path +'-'+ req.ip);
  next();
});*/

/** 8) Chaining middleware. A Time server */
/*app.get('/now', function(req, res, next){
  req.time = new Date().toString();// hypothetical asychronous operation
  next();
}, function(req, res){
  //var time = new Date().toString();
  res.send({ 'time': req.time})
})*/

/** 9)  Get input from client - Route parameters */
/*this is sample
route_path: '/user/:userId/book/:bookId'
actual_request_URL: '/user/546/book/6754' 
req.params: {userId: '546', bookId: '6754'}*/

//{echo : word} there are two answers right
/*app.get('/:echo/echo', function(req, res){
  res.json(req.params);
})*/
//app.get('/:word/echo', function(req, res){
 // res.json({'echo': req.params.word});
 // console.log(req.params.word);
//}) 

/** 10) Get input from client - Query parameters */ 
// /name?first=<firstname>&last=<lastname>
//app.route(path).get(handler).post(handler)
/*app.route('/name').get((req, res) => {
   var first = req.query.first;
   var last = req.query.last;
   var jsonObj = {name: first + ' ' + last};
   res.send(jsonObj);
 }).post();*/

/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !
app.post('/name', function(req, res){
  var first = req.body.first;
   var last = req.body.last;
   var jsonObj = {name: first + ' ' + last};
   res.send(jsonObj);
})



/** 12) Get data form POST  */
app.post('/name', function(req, res){
  var name = req.body.first + ' ' + req.body.last;
  res.json({name : name});
})


// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
