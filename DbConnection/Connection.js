const mongoose = require('mongoose');
const URI = 'mongodb+srv://dbUser:dbUser@cluster0-jgcaf.mongodb.net/test?retryWrites=true&w=majority'

const connectDb = async () => {
    await mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true },);
    console.log('mongodb Connected....');
}
module.exports = connectDb;