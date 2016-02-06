var db = require('mongoose');

// change this to mongo url with user and password
db.connect('mongodb://usr:pwd@xxx');

module.exports = db;
