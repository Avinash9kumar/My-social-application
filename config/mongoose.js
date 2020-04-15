const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codeial_development');

const db = mongoose.connection;

db.on('error',console.error.bind(console,"ERROR in connecting : Mondodb"));

db.once('open',function(){

    console.log("connected to database : Mondodb");

});

module.exports = db;