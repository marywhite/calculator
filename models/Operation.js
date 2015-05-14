var mongoose = require('mongoose');

var Operation = new mongoose.Schema({
    operation: String,
    total: Number
});

module.exports = mongoose.model('Operation', Operation);