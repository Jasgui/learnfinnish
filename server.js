//var express = require('express');
//var app = express();


//app.listen(3000, function () {
//    console.log("api running");
//});

var button = document.getElementById("button");

var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/learnfinnish', {
    useNewUrlParser: true
});

var kittySchema = new mongoose.Schema({
    name: String
});
kittySchema.methods.speak = function () {
    var greetings = this.name ?
        "Meow name is " + this.name :
        "I don't have a name";

}
var Kitten = mongoose.model('Kitten', kittySchema);
//
//var silence = new Kitten({
//    name: 'Silence'
//});
//var fluffy = new Kitten({
//    name: 'Fluffy'
//});


button.onclick = function () {

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {

        Kitten.find(function (err, kittens) {
            if (err) return console.error(err);
            console.log(kittens);
        })

    });

};
