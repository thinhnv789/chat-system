const mongoose = require('mongoose');

/**
 * Group  Mongo DB model
 * @name conversationModel
 */
const conversationSchema = new mongoose.Schema({
    conversationTitle: { type: String },
    participants: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    groupJoined: [{type: mongoose.Schema.Types.ObjectId, ref: 'Group'}],
    conversationType: { type: number }, // one to one, group
    status: { type: number }, // active, inActive
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    updatedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}, {timestamps: true});

const Conversation = mongoose.model('Conversation', conversationSchema);

module.exports = Conversation;