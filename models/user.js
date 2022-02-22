const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },

    contactNumber: {
        type: Number,
    },

    country: { type: String, default: ''},
    occupation: { type: String, default: ''},
    organization: { type: String, default: ''},
    credentialsVitae: { type: String, default: ''},
    photograph: { type: String, default: ''}
});

module.exports = mongoose.model('Users', userSchema);