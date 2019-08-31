var express = require('express');
var app = express();
var bodyparser = require('body-parser');


var ingredients = [
    {
        "id": "123H",
        "text": "eggs"
  },
    {
        "id": "943h",
        "text": "milk"
  },
    {
        "id": "3405J",
        "text": "bacon"
  },
    {
        "id": "9537h",
        "text": "flour"
  },
];

app.get('/', function (req, res) {

    res.send(ingredients);

});



app.listen(3000, function () {
    console.log("API is running on port 3000");
});
