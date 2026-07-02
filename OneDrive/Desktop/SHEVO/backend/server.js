const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const app = express();
connectDB();
app.use(cors());
app.use(express.json());
// Activate ALL feature routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));
app.use('/api/community', require('./routes/community'));
app.use('/api/health', require('./routes/health'));
const PORT = process.env.PORT || 5003;
app.listen(PORT, () => {
    console.log(`🚀 SHEVO Backend is running on port: ${PORT}`);
});