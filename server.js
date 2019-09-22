var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/newtestdatabase', {
    useNewUrlParser: true
});
var db = mongoose.connection;


var Allitem = require('./model/allitem');
var Done = require('./model/done');
var Mistake = require('./model/mistake');
var Newphrase = require('./model/newphrase');
var Review = require('./model/review');
var Reviewedmistake = require('./model/reviewedmistake');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET");
    next();
});


app.post('/all', function (req, res) {
    var item = new Allitem();
    item.finnish = req.body.finnish;
    item.french = req.body.french;
    item.save(function (err, savedItem) {
        if (err) {
            res.status(500).send({
                error: "Could not save item"
            });
        } else {
            res.send(savedItem);
        }
    });
});

app.post('/review', function (req, res) {
    var item = new Review();
    item.finnish = req.body.finnish;
    item.french = req.body.french;
    item.save(function (err, savedItem) {
        if (err) {
            res.status(500).send({
                error: "Could not save item"
            });
        } else {
            res.send(savedItem);
        }
    });
});

app.post('/drop', function (req, res) {
    var name = req.body.collection;

    mongoose.connection.db.dropCollection(name, function (err, result) {
        if (err) {
            res.status(500).send({
                error: "Could not delete the Collection"
            });
        } else {
            res.send(result);
        }
    });

});

app.get('/all', function (req, res) {
    Allitem.find({}, function (err, items) {
        if (err) {
            res.status(500).send({
                error: "Could not fetch items from all"
            });
        } else {
            res.send(items);
        }
    });
});

app.get('/review', function (req, res) {
    Review.find({}, function (err, items) {
        if (err) {
            res.status(500).send({
                error: "Could not fetch items from review"
            });
        } else {
            res.send(items);
        }
    });
});

app.listen(3000, function () {
    console.log("API is running on port 3000");
});
