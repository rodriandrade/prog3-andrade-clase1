var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var artistsSchema = new Schema({
    _id: {type: String},
    name: {type: String},
    genre: {type: String},
    avatar: {type: String},
    id: {type: String},
})

module.exports = mongoose.model('Artists', artistsSchema, 'artists');