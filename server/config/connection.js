const path = require('path');
const dotenv = require('dotenv')
const envFound = dotenv.config({ path: path.resolve(__dirname, '../../.env')});
const mongoose = require('mongoose');
console.log(process.env.MONGODB_URI);


if(!envFound) {
    console.error("no .env found")
    throw new Error("couldn't find .env")
}

mongoose.connect(
    process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

module.exports = mongoose.connection;