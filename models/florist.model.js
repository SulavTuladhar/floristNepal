const mongoose = require('mongoose');

const SocialMediaSchema = new mongoose.Schema({
    name: {
        type: String
    },
    url: {
        type: String
    }
})

const FloristSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    image: {
        type: String
    },
    area: {
        type: String
    },
    city: {
        type: String
    },
    description: {
        type: String
    },
    website: {
        type: String
    },
    number: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    socialMedia: [SocialMediaSchema],
    color: [String],
    password: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Florist', FloristSchema);