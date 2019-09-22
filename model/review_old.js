var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var review_old = new Schema({
    finnish: String,
    french: String,

});

module.exports = mongoose.model('Review_old', review_old);
