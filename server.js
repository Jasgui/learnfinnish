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
var List = require('./model/list');

var Done_old = require('./model/done_old');
var Mistake_old = require('./model/mistake_old');
var Newphrase_old = require('./model/new_old');
var Review_old = require('./model/review_old');
var Reviewedmistake_old = require('./model/reviewedmistake_old');


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


////////////////////////////////////////////////////////////NEW

app.put('/list/additem', function (res, res) {
    Allitem.findOne({
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
                $addToSet: {
                    items: allitem._id
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

app.post('/new', function (req, res) {
    var item = new Newphrase();
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

app.post('/done', function (req, res) {
    var item = new Done();
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

app.post('/mistake', function (req, res) {
    var item = new Mistake();
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

app.post('/reviewedmistake', function (req, res) {
    var item = new Reviewedmistake();
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


app.post('/new_old', function (req, res) {
    var item = new Newphrase_old();
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

app.post('/done_old', function (req, res) {
    var item = new Done_old();
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

app.post('/mistake_old', function (req, res) {
    var item = new Mistake_old();
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

app.post('/review_old', function (req, res) {
    var item = new Review_old();
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

app.post('/reviewedmistake_old', function (req, res) {
    var item = new Reviewedmistake_old();
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

app.get('/new', function (req, res) {
    Newphrase.find({}, function (err, items) {
        if (err) {
            res.status(500).send({
                error: "Could not fetch items from review"
            });
        } else {
            res.send(items);
        }
    });
});

app.get('/done', function (req, res) {
    Done.find({}, function (err, items) {
        if (err) {
            res.status(500).send({
                error: "Could not fetch items from review"
            });
        } else {
            res.send(items);
        }
    });
});

app.get('/mistake', function (req, res) {
    Mistake.find({}, function (err, items) {
        if (err) {
            res.status(500).send({
                error: "Could not fetch items from review"
            });
        } else {
            res.send(items);
        }
    });
});

app.get('/list', function (req, res) {
    List.find({}).populate({
        path: 'items',
        model: 'Allitems'
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





app.get('/reviewedmistake', function (req, res) {
    Reviewedmistake.find({}, function (err, items) {
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
