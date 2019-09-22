var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var done_old = new Schema({
    finnish: String,
    french: String,

});

module.exports = mongoose.model('Done_old', done_old);
