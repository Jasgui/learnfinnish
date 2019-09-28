var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var allitem = new Schema({
    finnish: String,
    french: String,
});

module.exports = mongoose.model('Allitem', allitem);
