var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testdatabase', {
    useNewUrlParser: true
});
var db = mongoose.connection;

var Product = require('./model/product');
var Wishlist = require('./model/wishlist');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));



app.listen(3000, function () {
    console.log("API is running on port 3000");
});
