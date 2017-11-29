const mongoose = require('mongoose');

/**
 * Group  Mongo DB model
 * @name groupModel
 */
const groupSchema = new mongoose.Schema({
    groupName: { type: String, unique: true },
    members: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    updatedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    status: { type: number }, // active, inActive
}, {timestamps: true});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;