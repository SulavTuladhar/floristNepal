// Database connection banako
const mongoose = require('mongoose');
const dbConfig = require('./config/db.config');

mongoose.set('strictQuery', false);

mongoose.connect(dbConfig.connectionURL + '/' + dbConfig.dbName, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, function(err,done){
    if(err){
        console.log("Db connection failed");
    }else{
        console.log('Database connection open');
    }
})