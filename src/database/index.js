const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/rankingdosalunos', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;