const DATABASE = "Guillaume";
const QUESTIONS_PER_LESSON = 20;

var async = require('async');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/' + DATABASE, {
    useNewUrlParser: true
});
var db = mongoose.connection;


var Item = require('./model/item');

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

app.listen(3000, function () {
    console.log("API is running on port 3000");
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////START


////NOT USER-FACING

app.post('/addall', function (req, res) {

    var items = req.body.content;

    for (let i = 0; i < items.length; i++) {
        var item = new Item();
        item.finnish = items[i].finnish;
        item.french = items[i].french;
        item.order = i;
        item.save(function (err, savedItem) {
            if (err) {
                res.status(500).send({
                    error: "Could not save the item"
                });
            }
        })
    }
    res.send({
        success: "saved"
    });


});


////USER-FACING

app.get('/getall', function (req, res) {
    Item.find({}, function (err, items) {
        if (err) {
            res.status(500).send({
                error: "Could not fetch items"
            });
        } else {
            var itemsArray = items;
            itemsArray.sort(dynamicSort("order"));
            res.send(itemsArray);
        }
    });
});

app.put('/updateAll', function (req, res) {

    let items = req.body;

    items.forEach(newItem => {

        Item.findOne({
            _id: newItem._id
        }, function (err, item) {
            item.status = newItem.status;
            item.order = newItem.order;
            item.level = newItem.level;
            item.alternate = newItem.alternate;
            item.save(function (err) {
                if (err) {
                    console.log("error updating data");
                }
            })
        });



    })
    res.send({
        success: "updated"
    });





});


function dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a, b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
};


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////END


//app.put('/list/removeitem', function (req, res) {
//    Item.findOne({
//        _id: req.body.itemId
//    }, function (err, item) {
//        if (err) {
//            res.status(500).send({
//                error: "could not find the item"
//            });
//        } else {
//            List.update({
//                _id: req.body.listId
//            }, {
//                $pull: {
//                    items: item._id
//                }
//            }, function (err, list) {
//                if (err) {
//                    res.status(500).send({
//                        error: "Could not remove the item from the list"
//                    });
//                } else {
//                    res.send(list);
//                }
//            })
//        }
//    })
//});
//
//app.put('/populate', function (req, res) {
//    List.find({}).populate({
//        path: 'items',
//        model: 'Item'
//    }).exec(function (err, list) {
//        if (err) {
//            res.status(500).send({
//                error: "Could not populate the lists
//            });
//        } else {
//            res.send(list);
//        }
//    })
//})
//
//

//
//app.get('/list', function (req, res) {
//    List.find({}).populate({
//        path: 'items',
//        model: 'Item'
//    }).exec(function (err, list) {
//        if (err) {
//            res.status(500).send({
//                error: "Could not fetch the list"
//            });
//        } else {
//            res.send(list);
//        }
//    })
//});
//
