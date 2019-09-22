var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mistake = new Schema({
    finnish: String,
    french: String,

});

module.exports = mongoose.model('Mistake', mistake);
