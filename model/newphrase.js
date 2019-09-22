var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newphrase = new Schema({
    finnish: String,
    french: String,

});

module.exports = mongoose.model('Newphrase', newphrase);
