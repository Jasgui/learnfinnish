var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewedmistake_old = new Schema({
    finnish: String,
    french: String,

});

module.exports = mongoose.model('Reviewedmistake_old', reviewedmistake_old);
