var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newphrase_old = new Schema({
    finnish: String,
    french: String,

});

module.exports = mongoose.model('Newphrase_old', newphrase_old);
