const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.post('/register', async (req, res) => {
    try {
        const { originalName, email, password } = req.body;
        
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: "User already exists!" });

        user = new User({ originalName, email, password });
        await user.save();
        
        res.status(201).json({ message: "Registered Successfully!", displayID: user.uniqueDisplayID });
    } catch (error) { 
        // THIS LINE WILL PRINT THE REAL SECRET ERROR TO YOUR SERVER TERMINAL:
        console.log("❌ X-RAY ERROR DETECTED:", error);
        
        // THIS LINE WILL SEND THE REAL ERROR TO YOUR TEST SCRIPT:
        res.status(500).json({ 
            message: "REAL ERROR: " + error.message,
            details: error.toString() 
        }); 
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid credentials" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.json({ token, user: { originalName: user.originalName, displayID: user.uniqueDisplayID } });
    } catch (error) { 
        res.status(500).json({ message: "REAL ERROR: " + error.message }); 
    }
});

module.exports = router;