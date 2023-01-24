const mongoose = require('mongoose');

mongoose.connect(
    //process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/decked-out',
    //process.env.MONGODB_URI || 
    `mongodb+srv://LelandByrd:asKd7RblXwkwAhzv@decked-outv2.tyzmnxp.mongodb.net/?retryWrites=true&w=majority`,
    // `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@decked-outv2.tyzmnxp.mongodb.net/?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

module.exports = mongoose.connection;