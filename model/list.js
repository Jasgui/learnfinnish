var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var list = new Schema({
    title: String,
    items: [{
        type: ObjectId,
        ref: 'Allitem'
    }]
});

module.exports = mongoose.model('List', list);
