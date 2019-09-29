const DATABASE = "testing";
const QUESTIONS_PER_LESSON = 20;

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

app.put('/item/updatescore', function (req, res) {
    Item.findOneAndUpdate({
        _id: req.body.itemId
    }, {
        score: req.body.score
    }, function (err, item) {
        if (err) {
            res.status(500).send({
                error: "Could not update document"
            })
        } else {
            res.send(item);
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

app.get('/lesson', function (req, res) {
    List.find({}).populate({
        path: 'items',
        model: 'Item'
    }).exec(function (err, list) {
        if (err) {
            res.status(500).send({
                error: "Could fetch the list"
            });
        } else {
            var learnNum = 0;
            var learnList = [];
            var reviewNum = 0;
            var reviewList = [];
            var mistakeNum = 0;
            var mistakeList = [];

            for (let i = 0; i < list.length; i++) {
                if (list[i].title === "learn") {
                    learnNum = list[i].items.length;
                    learnList = [...list[i].items];
                } else if (list[i].title === "review") {
                    reviewNum = list[i].items.length;
                    reviewList = [...list[i].items];
                } else if (list[i].title === "mistake") {
                    mistakeNum = list[i].items.length;
                    mistakeList = [...list[i].items];
                } else {
                    console.log("Issues with determining number of items in lists");
                }
            }

            var total = learnNum + reviewNum + mistakeNum;
            var learnPerc = learnNum / total;
            var reviewPerc = reviewNum / total;
            var mistakePerc = mistakeNum / total;

            var reviewLesson = Math.floor(QUESTIONS_PER_LESSON * reviewPerc);
            var mistakeLesson = Math.floor(QUESTIONS_PER_LESSON * mistakePerc);
            var learnLesson = QUESTIONS_PER_LESSON - (reviewLesson + mistakeLesson);

            var lessonMatrix = [];
            var learnIndex = Math.floor(learnLesson / 4);
            if (learnIndex === 0) {
                learnIndex = 1
            };

            var reviewIndex = Math.floor(reviewLesson / 4);
            if (reviewIndex === 0) {
                reviewIndex = 1
            };
            var mistakeIndex = Math.floor(mistakeLesson / 4);
            if (mistakeIndex === 0) {
                mistakeIndex = 1
            };

            var learnTotalAllow = learnLesson;
            var reviewTotalAllow = reviewLesson;
            var mistakeTotalAllow = mistakeLesson;

            for (let d = 0; d < (QUESTIONS_PER_LESSON / 4) + 1; d++) {

                for (let a = 0; a < learnIndex; a++) {
                    if (learnTotalAllow > 0) {
                        lessonMatrix.push("learn");
                        learnTotalAllow--;
                    }
                }
                for (let b = 0; b < reviewIndex; b++) {
                    if (reviewTotalAllow > 0) {
                        lessonMatrix.push("review");
                        reviewTotalAllow--;
                    }
                }
                for (let c = 0; c < mistakeIndex; c++) {
                    if (mistakeTotalAllow > 0) {
                        lessonMatrix.push("mistake");
                        mistakeTotalAllow--;
                    }
                }
            }

            var lesson = [];
            var learnCounter = 0;
            var reviewCounter = 0;
            var mistakeCounter = 0;

            for (let x = 0; x < lessonMatrix.length; x++) {
                if (lessonMatrix[x] === "learn") {
                    lesson.push(learnList[learnCounter]);
                    learnCounter++;
                } else if (lessonMatrix[x] === "review") {
                    lesson.push(reviewList[reviewCounter]);
                    reviewCounter++;
                } else if (lessonMatrix[x] === "mistake") {
                    lesson.push(mistakeList[mistakeCounter]);
                    mistakeCounter++;
                }
            }


            var result = lesson;
            res.send(result);
        }
    })
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
