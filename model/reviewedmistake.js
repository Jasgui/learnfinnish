var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewedmistake = new Schema({
    finnish: String,
    french: String,

});

module.exports = mongoose.model('Reviewedmistake', reviewedmistake);
