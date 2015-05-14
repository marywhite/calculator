var mongoose = require('mongoose');

var Operation = new mongoose.Schema({
    number: Number,
    completed: Boolean,
    note: String
});

module.exports = mongoose.model('Operation', Operation);