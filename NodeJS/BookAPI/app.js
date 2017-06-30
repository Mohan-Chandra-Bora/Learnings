var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var db;
if(process.env.ENV == 'Test'){
 db = mongoose.connect('mongodb://localhost/bookModel_test');
}
else{
 db = mongoose.connect('mongodb://localhost/bookModel');
}

var Book = require('./models/bookModel');
var bookRouter = require('./routes/bookRoutes')(Book);


var app = express();
var port = process.env.port || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api/books', bookRouter);

app.get('/', function(req, res){
    res.send('Welcome to API');
});

app.listen(port, function(err){
     console.log('running server on port: ' + port);
});

module.exports = app;