var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var item = new Schema({
    finnish: String,
    french: String,
    alternate: [String],
    position: {
        status: {
            type: String,
            default: "test"
        },
        order: {
            type: Number,
            default: 0
        }
    }
});

module.exports = mongoose.model('Item', item);
