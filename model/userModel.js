const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
    name: String,
    budget_name: String,
    owner_id: String,
    spent: {
    value: Number,
    currency: String
    },
    available_to_spend: {
    value: Number,
    currency: String
    },
    card_type: String,
    expiry: Date,
    limit: Number,
    status: String
});

const User = mongoose.model('User', userSchema);
module.exports = User;