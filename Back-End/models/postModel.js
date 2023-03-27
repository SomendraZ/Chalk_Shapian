const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    type: {
        type: String,
        enum: ['image', 'video'],
        required: true
    },
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    toolsUsed: {
        type: String,
        required: true
    },
    artistName: {
        type: String,
        required: true
    },
    filters: [{
        type: String,
        required: true
    }],
    description: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Post', postSchema)
