var express = require('express');
var app = express();

app.get('/', function (req, res) {

    res.send("my first api");

});

app.listen(3000, function () {
    console.log("API is running on port 3000");
});
