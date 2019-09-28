const DATABASE = "newtesting2";

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/' + DATABASE, {
    useNewUrlParser: true
});
var db = mongoose.connection;


var Item = require('./model/item');
var List = require('./model/list');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT");
    next();
});

app.put('/list/additem', function (req, res) {
    Item.findOne({
        _id: req.body.itemId
    }, function (err, item) {
        if (err) {
            res.status(500).send({
                error: "Could not save the item to the list"
            });
        } else {
            List.update({
                _id: req.body.listId
            }, {
                $push: {
                    items: item._id
                }
            }, function (err, list) {
                if (err) {
                    res.status(500).send({
                        error: "Could not save the item to the list"
                    });
                } else {
                    res.send(list);
                }
            })
        }
    })


});

app.put('/list/removeitem', function (req, res) {
    Item.findOne({
        _id: req.body.itemId
    }, function (err, item) {
        if (err) {
            res.status(500).send({
                error: "could not find the item"
            });
        } else {
            List.update({
                _id: req.body.listId
            }, {
                $pull: {
                    items: item._id
                }
            }, function (err, list) {
                if (err) {
                    res.status(500).send({
                        error: "Could not remove the item from the list"
                    });
                } else {
                    res.send(list);
                }
            })
        }
    })
});

app.put('/populate', function (req, res) {
    List.find({}).populate({
        path: 'items',
        model: 'Item'
    }).exec(function (err, list) {
        if (err) {
            res.status(500).send({
                error: "Could not populate the lists"
            });
        } else {
            res.send(list);
        }
    })
})

app.post('/item', function (req, res) {
    var item = new Item();
    item.finnish = req.body.finnish;
    item.french = req.body.french;
    item.score = req.body.score;
    item.alternate = req.body.alternate;
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

app.get('/item', function (req, res) {
    Item.find({}, function (err, items) {
        if (err) {
            res.status(500).send({
                error: "Could not fetch items from item"
            });
        } else {
            res.send(items);
        }
    });
});

app.get('/list', function (req, res) {
    List.find({}).populate({
        path: 'items',
        model: 'Item'
    }).exec(function (err, list) {
        if (err) {
            res.status(500).send({
                error: "Could not fetch the list"
            });
        } else {
            res.send(list);
        }
    })
});

app.post('/list', function (req, res) {
    var item = new List();
    item.title = req.body.title;
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

app.listen(3000, function () {
    console.log("API is running on port 3000");
});
