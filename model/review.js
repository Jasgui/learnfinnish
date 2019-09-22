var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var review = new Schema({
    finnish: String,
    french: String,

});

module.exports = mongoose.model('Review', review);
