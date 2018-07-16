const mongoose = require('mongoose')
// so pra usar o Promise do node
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/todo')