const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: String,
    username: String,
    password: String,
    dateOfbirth: Date
})

const User = mongoose.model('User', UserSchema);

module.exports = User