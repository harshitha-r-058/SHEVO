const express = require('express');
const router = express.Router();
const HealthLog = require('../models/HealthLog');
router.get('/:userId', async (req, res) => {
    const logs = await HealthLog.find({ userId: req.params.userId }).sort({ date: -1 });
    res.json(logs);
});
router.post('/', async (req, res) => {
    const newLog = new HealthLog(req.body);
    const savedLog = await newLog.save();
    res.status(201).json(savedLog);
});
module.exports = router;