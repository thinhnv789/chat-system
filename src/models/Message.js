const mongoose = require('mongoose');

/**
 * Group  Mongo DB model
 * @name messageModel
 */
const messageSchema = new mongoose.Schema({
    conversation: {type: mongoose.Schema.Types.ObjectId, ref: 'Conversation'},
    messageContent: { type: String },
    status: { type: number }, // active, deleted
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    updatedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}, {timestamps: true});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;