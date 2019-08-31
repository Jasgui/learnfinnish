var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


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

app.post('/', function (req, res) {
    var ingredient = req.body;
    if (!ingredient || ingredient.text === "") {
        res.status(500).send({
            error: "your ingredient must have text"
        });
    } else {
        ingredients.push(ingredient);
        res.status(200).send(ingredients);
    }
});



app.listen(3000, function () {
    console.log("API is running on port 3000");
});
