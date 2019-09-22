var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var done = new Schema({
    finnish: String,
    french: String,

});

module.exports = mongoose.model('Done', done);
