const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true }, // e.g., "Kaisiri Eco-Friendly Saree"
    price: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String }
}, { timestamps: true });
module.exports = mongoose.model('Product', productSchema);