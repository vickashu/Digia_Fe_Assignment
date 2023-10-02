const mongoose = require('mongoose');
const connect = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/cardProject', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log("Connected DB"))
        .catch((err) => console.log(err.message));
}
module.exports = {connect};