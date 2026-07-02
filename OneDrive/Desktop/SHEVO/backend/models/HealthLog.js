const mongoose = require('mongoose');
const healthLogSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true },
    cycleDay: { type: Number },
    symptoms: [{ type: String }],
    pcosNotes: { type: String }
}, { timestamps: true });
module.exports = mongoose.model('HealthLog', healthLogSchema);