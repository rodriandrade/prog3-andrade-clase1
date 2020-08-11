var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var http = require('http');
var server = http.createServer(app);
var mongoose = require('mongoose');
var cors = require('cors');

mongoose.connect('mongodb+srv://rodri:rodri123@cluster0-i4exz.mongodb.net/artists_api?retryWrites=true&w=majority', function(err, res){
  if(err) throw err;
  console.log("Connected to DB :3");
});

// Middle

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

routes = require('./routes/artists')(app) ;

app.get('/', function(req, res){
  res.send("Hellooo...PUM");
});

server.listen(process.env.PORT || 4000, function(){
  console.log("Servidor corriendo en localhost:4000");
});

module.export = app;