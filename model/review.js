var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//var review = new Schema({
//    finnish: String,
//    french: String,
//
//});

var review = new Schema({
    item: {
        type: Schema.Types.ObjectId,
        ref: 'Allitem'
    }
});


module.exports = mongoose.model('Review', review);
