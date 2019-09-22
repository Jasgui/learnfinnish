var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mistake_old = new Schema({
    finnish: String,
    french: String,

});

module.exports = mongoose.model('Mistake_old', mistake_old);
