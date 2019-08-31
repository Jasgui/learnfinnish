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

app.post('/product', function (req, res) {
    var product = new Product();
    product.title = req.body.title;
    product.price = req.body.price;
    product.save(function (err, savedProduct) {
        if (err) {
            res.status(500).send({
                error: "Could not save product"
            });
        } else {
            res.status(200).send(savedProduct);
        }
    });
});

app.listen(3000, function () {
    console.log("API is running on port 3000");
});
